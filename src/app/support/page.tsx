import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support for apps by Nabin Pariyar.",
};

const faqs = [
  {
    question: "Why do I see different ads depending on my region?",
    answer:
      "We use Google AdMob to display ads. The type and frequency of ads may vary based on your geographic location, device, and Google's ad personalization settings. You can adjust ad preferences in your device settings.",
  },
  {
    question: "How can I request a new feature?",
    answer:
      "We'd love to hear your ideas! Send us an email with the subject 'Feature Request' along with the app name and a description of the feature you'd like to see. We review all requests and prioritize based on demand.",
  },
  {
    question: "How do I report a bug?",
    answer:
      "If you encounter a bug, please email us with the subject 'Bug Report'. Include the app name, your device model, Android version, and a description of the issue. Screenshots or screen recordings are very helpful.",
  },
  {
    question: "How can I delete my data?",
    answer:
      "Most of our apps work offline and don't store data on external servers. If you'd like to request data deletion for any data collected by third-party services, please visit our Delete Account page or email us directly.",
  },
];

export default function SupportPage() {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight text-text">Support</h1>

      <div className="mt-8 max-w-3xl">
        <p className="text-lg text-text-muted">
          Need help with one of our apps? We&apos;re here to help.
        </p>
        <p className="mt-4 text-text-muted">
          Contact us at{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="text-accent hover:text-accent-hover"
          >
            {SITE_CONFIG.supportEmail}
          </a>
        </p>
      </div>

      {/* FAQ */}
      <div className="mt-16 max-w-3xl">
        <h2 className="mb-8 text-2xl font-semibold text-text">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.question} hover={false}>
              <h3 className="font-semibold text-text">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
