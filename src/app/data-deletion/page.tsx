import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getPortfolioProjects } from "@/lib/services/playStore";
import { SITE_CONFIG } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "App Data Deletion",
  description: "How to remove local app data and request help with data associated with Android apps published by TheMixzone.",
  path: "/data-deletion",
});

export const revalidate = 86400;

export default async function DataDeletionPage() {
  const projects = await getPortfolioProjects();
  return (
    <Container className="max-w-5xl pt-28 pb-20 sm:pt-36 sm:pb-28">
      <SectionHeading eyebrow="TheMixzone app support" title="App data deletion" subtitle="Use this page to remove data stored on your device or ask what deletion options apply to a specific TheMixzone app." />

      <div className="max-w-3xl space-y-12">
        <section aria-labelledby="deletion-scope">
          <h2 id="deletion-scope" className="font-display text-3xl font-semibold text-text">What this page covers</h2>
          <p className="mt-4 leading-7 text-text-muted">
            Data practices differ by app and can change with a release. The current Data Safety section on each Google Play listing is the source of truth for what that app declares. I do not operate a shared account system for the apps listed below.
          </p>
        </section>

        <section aria-labelledby="remove-local-data">
          <h2 id="remove-local-data" className="font-display text-3xl font-semibold text-text">Remove data stored on your device</h2>
          <ol className="mt-5 border-y border-border">
            <li className="grid gap-2 border-b border-border py-5 sm:grid-cols-[3rem_1fr]"><span className="font-utility text-xs text-accent">01</span><p className="text-text-muted">Open Android Settings and select Apps.</p></li>
            <li className="grid gap-2 border-b border-border py-5 sm:grid-cols-[3rem_1fr]"><span className="font-utility text-xs text-accent">02</span><p className="text-text-muted">Choose the relevant TheMixzone app, then Storage &amp; cache.</p></li>
            <li className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr]"><span className="font-utility text-xs text-accent">03</span><p className="text-text-muted">Use Clear storage, or uninstall the app. Either action removes that app’s local files and preferences from the device.</p></li>
          </ol>
        </section>

        <section aria-labelledby="third-party-data">
          <h2 id="third-party-data" className="font-display text-3xl font-semibold text-text">Google-managed data</h2>
          <p className="mt-4 leading-7 text-text-muted">
            Advertising, analytics, or crash-reporting data—when declared by a specific app—is managed through Google services rather than a server I operate. Use your device’s Privacy / Ads controls and your Google Account Data &amp; Privacy controls for those services. I cannot delete data that Google does not make available to me as the developer.
          </p>
          <a href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noopener noreferrer" className="text-link mt-4">Google Data &amp; Privacy ↗</a>
        </section>

        <section aria-labelledby="covered-apps">
          <h2 id="covered-apps" className="font-display text-3xl font-semibold text-text">Covered app listings</h2>
          <ul className="mt-5 border-y border-border">
            {projects.map((project) => (
              <li key={project.id} className="grid gap-2 border-b border-border py-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center">
                <span className="font-semibold text-text">{project.title}</span>
                {project.playStoreUrl && <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-link">Check current Data Safety ↗</a>}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="request-help" className="border-l-2 border-accent pl-6">
          <h2 id="request-help" className="font-display text-3xl font-semibold text-text">Request help</h2>
          <p className="mt-4 leading-7 text-text-muted">Email the app name and describe the data you are concerned about. Do not include passwords, payment details, advertising IDs, or other sensitive credentials. Requests are reviewed and answered with the deletion options that apply to that app.</p>
          <a href={`mailto:${SITE_CONFIG.supportEmail}?subject=App%20data%20deletion%20request`} className="text-link mt-4">{SITE_CONFIG.supportEmail} →</a>
        </section>

        <p className="text-sm leading-6 text-text-muted">Looking for account-specific guidance? See <Link href="/delete-account" className="text-link align-middle">Account deletion</Link>. Last reviewed: August 7, 2026.</p>
      </div>
    </Container>
  );
}
