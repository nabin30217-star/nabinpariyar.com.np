"use client";

import { useState, type FormEvent } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CheckCircleIcon } from "@/components/ui/Icons";
import { submitContactForm } from "@/app/actions/contact";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await submitContactForm(form);

    if (result.success) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-text">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            minLength={2}
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-text">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-text">
            Message
          </label>
          <textarea
            id="message"
            required
            minLength={10}
            rows={5}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Tell me about your project or idea..."
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}

        <Button type="submit" variant="primary" className="w-full">
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
