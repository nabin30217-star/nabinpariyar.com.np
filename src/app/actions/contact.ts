"use server";

import { headers } from "next/headers";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/rate-limit";

interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResult> {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  const { name, email, message } = validatedFields.data;

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not configured");
    return { success: false, error: "The form is temporarily unavailable. Please email nabin30217@gmail.com directly." };
  }

  // Best-effort local guard. A shared production store should replace this
  // if the deployment scales across multiple server instances.
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";
  const rateLimitResult = checkRateLimit(ip, 3, 60000); // Max 3 requests per minute per IP

  if (!rateLimitResult.success) {
    console.warn("[RATE_LIMIT] Blocked an excessive contact-form submission");
    return { success: false, error: "Too many requests. Please try again in a minute." };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.info("[CONTACT_FORM_SUCCESS] Message delivered");
      return { success: true };
    }

    console.error("[CONTACT_FORM_API_ERROR] Web3Forms rejected a submission");
    return { success: false, error: "The message could not be delivered. Please email nabin30217@gmail.com directly." };
  } catch (error) {
    console.error(`[CONTACT_FORM_NETWORK_ERROR] Fetch failed:`, error);
    return { success: false, error: "Network error. Please try again." };
  }
}
