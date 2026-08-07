import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Account Deletion",
  description: "Account-deletion guidance for Android apps published by TheMixzone.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
  return (
    <Container className="max-w-4xl pt-28 pb-20 sm:pt-36 sm:pb-28">
      <p className="utility-label text-accent">TheMixzone app support</p>
      <h1 className="section-title mt-4 text-text">Account deletion</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
        The TheMixzone apps currently listed on my portfolio do not create a shared account that I host. If Google Play or an in-app support link directed you here, use the steps below to identify the app and the applicable data.
      </p>

      <ol className="mt-12 border-y border-border">
        <li className="grid gap-3 border-b border-border py-7 sm:grid-cols-[3rem_11rem_1fr]">
          <span className="font-utility text-xs text-accent">01</span><h2 className="font-semibold text-text">Name the app</h2><p className="leading-7 text-text-muted">Include the exact app title from Google Play. Do not send a password, advertising ID, or other sensitive credential.</p>
        </li>
        <li className="grid gap-3 border-b border-border py-7 sm:grid-cols-[3rem_11rem_1fr]">
          <span className="font-utility text-xs text-accent">02</span><h2 className="font-semibold text-text">Describe the concern</h2><p className="leading-7 text-text-muted">Explain whether you mean local app data, Google-managed data, or an account you believe was created in a specific app.</p>
        </li>
        <li className="grid gap-3 py-7 sm:grid-cols-[3rem_11rem_1fr]">
          <span className="font-utility text-xs text-accent">03</span><h2 className="font-semibold text-text">Send the request</h2><p className="leading-7 text-text-muted">Email <a href={`mailto:${SITE_CONFIG.supportEmail}?subject=Account%20deletion%20request`} className="inline-flex min-h-11 items-center underline hover:text-text">{SITE_CONFIG.supportEmail}</a>. I will confirm what data exists and which party controls it.</p>
        </li>
      </ol>

      <div className="mt-10 border-l-2 border-accent pl-6">
        <h2 className="font-display text-2xl font-semibold text-text">Need to clear app data now?</h2>
        <p className="mt-3 leading-7 text-text-muted">Android’s Clear storage action or uninstalling the app removes locally stored files and preferences from your device.</p>
        <Link href="/data-deletion" className="text-link mt-3">Full app data guidance →</Link>
      </div>
      <p className="mt-10 text-sm text-text-muted">Last reviewed: August 7, 2026.</p>
    </Container>
  );
}
