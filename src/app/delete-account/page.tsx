import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Account & Data Deletion",
  description: "Request account and data deletion for apps by Nabin Pariyar.",
};

const steps = [
  {
    step: 1,
    title: "Send an Email",
    description: `Send an email to ${SITE_CONFIG.supportEmail} with the subject line "Delete my account/data".`,
  },
  {
    step: 2,
    title: "Include App Details",
    description:
      "In your email, include the app name and any identifier (such as your email or username if applicable) so we can locate your data.",
  },
  {
    step: 3,
    title: "Confirmation & Processing",
    description:
      "We will confirm receipt of your request and process the deletion within 30 days. You will receive a confirmation email once the deletion is complete.",
  },
];

export default function DeleteAccountPage() {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight text-text">
        Account &amp; Data Deletion
      </h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: January 11, 2026</p>

      <div className="mt-10 max-w-3xl">
        <p className="text-lg text-text-muted">
          If you would like to request the deletion of your account or any data
          associated with our apps, please follow the steps below.
        </p>

        {/* Steps */}
        <div className="mt-10 space-y-4">
          {steps.map((s) => (
            <Card key={s.step} hover={false}>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-text">{s.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    {s.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* What gets deleted */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-text">
            What Gets Deleted
          </h2>
          <ul className="mt-4 space-y-2 text-text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Any account data associated with your identifier
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Analytics data linked to your device (where possible)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Any stored preferences or settings on our servers
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-text">
            What May Be Retained
          </h2>
          <ul className="mt-4 space-y-2 text-text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
              Anonymized, aggregated analytics that cannot identify you
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
              Data required to be retained by law
            </li>
          </ul>
        </div>

        <p className="mt-10 text-sm text-text-muted">
          Questions? Contact us at{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="text-accent hover:text-accent-hover"
          >
            {SITE_CONFIG.supportEmail}
          </a>
        </p>
      </div>
    </Container>
  );
}
