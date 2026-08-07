import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "App Support",
  description: "Support contacts, troubleshooting, privacy, and data-deletion guidance for Android apps published by TheMixzone.",
  path: "/support",
});

const supportTopics = [
  ["Report a bug", "Include the app title, Android version, device model, the steps that caused the problem, and a screenshot or recording when possible."],
  ["Request a feature", "Name the app, describe the user problem, and explain what the new behavior would let you do."],
  ["Advertising controls", "Ad availability and personalization can vary by region and Google settings. Android’s Privacy / Ads settings provide the user controls."],
];

export default function SupportPage() {
  return (
    <Container className="max-w-5xl pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <p className="utility-label text-accent">TheMixzone / app support</p>
        <div>
          <h1 className="display-title text-text">Start with the app name and what happened.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted">Clear reproduction details make support faster. Send them directly to <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="inline-flex min-h-11 items-center underline hover:text-text">{SITE_CONFIG.supportEmail}</a>.</p>
        </div>
      </div>

      <section aria-labelledby="support-topics-title" className="pt-12">
        <h2 id="support-topics-title" className="sr-only">Support topics</h2>
        <dl className="border-y border-border">
          {supportTopics.map(([title, text], index) => (
            <div key={title} className="grid gap-3 border-b border-border py-7 last:border-b-0 sm:grid-cols-[3rem_11rem_1fr]">
              <span className="font-utility text-xs text-accent">0{index + 1}</span>
              <dt className="font-semibold text-text">{title}</dt>
              <dd className="leading-7 text-text-muted">{text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <section className="border-t border-accent pt-5">
          <h2 className="font-display text-2xl font-semibold text-text">Remove app data</h2>
          <p className="mt-3 leading-7 text-text-muted">Device removal steps, Google controls, and app-specific support.</p>
          <Link href="/data-deletion" className="text-link mt-3">Data deletion guidance →</Link>
        </section>
        <section className="border-t border-border pt-5">
          <h2 className="font-display text-2xl font-semibold text-text">Privacy details</h2>
          <p className="mt-3 leading-7 text-text-muted">How app, website, analytics, and contact data are handled.</p>
          <Link href="/privacy-policy" className="text-link mt-3">Read the privacy policy →</Link>
        </section>
      </div>
    </Container>
  );
}
