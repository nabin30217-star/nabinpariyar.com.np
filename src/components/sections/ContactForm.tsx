"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CheckCircleIcon } from "@/components/ui/Icons";
import { submitContactForm } from "@/app/actions/contact";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    const result = await submitContactForm(data);

    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <Card hover={false} className="mt-12 text-center">
        <div className="mb-4 flex justify-center">
          <CheckCircleIcon className="h-12 w-12 text-green-400" />
        </div>
        <h3 className="text-lg font-semibold text-text">Message Sent!</h3>
        <p className="mt-2 text-sm text-text-muted">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")} variant="outline" size="sm">
            Send Another Message
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card hover={false} className="mt-12">
      <h3 className="mb-6 text-lg font-semibold text-text">Send a Message</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-text">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-text">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-text">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Tell me about your project or idea..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}

        <Button type="submit" variant="primary" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
