"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "@/app/actions/contact";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const fieldClass = "min-h-12 w-full border border-border bg-surface px-4 py-3 text-base text-text placeholder:text-text-muted/70 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
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
      return;
    }

    setStatus("error");
    setErrorMessage(result.error || "The message could not be sent. Please use the email link above.");
  };

  if (status === "success") {
    return (
      <div className="mt-12 border-y border-accent py-10" role="status" aria-live="polite">
        <p className="utility-label text-accent">Message delivered</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-text">Thank you. I have your note.</h2>
        <button type="button" onClick={() => setStatus("idle")} className="text-link mt-5">Send another message</button>
      </div>
    );
  }

  return (
    <section className="mt-12 border-t border-border pt-10" aria-labelledby="contact-form-title">
      <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <p className="utility-label text-accent">Project brief</p>
          <h2 id="contact-form-title" className="mt-3 font-display text-3xl font-semibold text-text">Send the useful details.</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-text">Name</label>
              <input id="name" type="text" autoComplete="name" {...register("name")} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={fieldClass} placeholder="Your name" />
              {errors.name && <p id="name-error" role="alert" className="mt-2 text-sm text-accent">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text">Email</label>
              <input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={fieldClass} placeholder="you@example.com" />
              {errors.email && <p id="email-error" role="alert" className="mt-2 text-sm text-accent">{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-text">Problem, constraint, and current state</label>
            <textarea id="message" rows={7} {...register("message")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-hint"} className={`${fieldClass} resize-y`} placeholder="What needs to work, what makes it difficult, and what exists today?" />
            <p id="message-hint" className="mt-2 text-sm text-text-muted">Please do not send passwords, API keys, or private user data.</p>
            {errors.message && <p id="message-error" role="alert" className="mt-2 text-sm text-accent">{errors.message.message}</p>}
          </div>

          {status === "error" && <p role="alert" aria-live="assertive" className="border-l-2 border-accent pl-4 text-sm leading-6 text-text">{errorMessage}</p>}

          <button type="submit" disabled={status === "loading"} className="inline-flex min-h-12 w-full items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-hover disabled:cursor-wait disabled:opacity-60 sm:w-auto">
            {status === "loading" ? "Sending…" : "Send project brief →"}
          </button>
        </form>
      </div>
    </section>
  );
}
