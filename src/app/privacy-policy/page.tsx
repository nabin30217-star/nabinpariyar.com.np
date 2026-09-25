import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy information for TheMixzone Android apps and this portfolio website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-4xl pt-28 pb-20 sm:pt-36 sm:pb-28">
      <p className="utility-label text-accent">TheMixzone apps / nabinpariyar.com.np</p>
      <h1 className="section-title mt-4 text-text">Privacy policy</h1>
      <p className="mt-4 text-sm text-text-muted">Effective date: September 25, 2026</p>

      <div className="mt-12 max-w-3xl space-y-10">
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">1. Scope</h2>
          <p className="mt-3 leading-7 text-text-muted">This policy covers this portfolio website and Android applications published on Google Play under the developer name TheMixzone. Because app integrations can differ, each app’s current Google Play Data Safety section should be read alongside this policy.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">2. Accounts and storage I operate</h2>
          <p className="mt-3 leading-7 text-text-muted">The apps currently listed on my portfolio do not use a shared account system that I operate. App preferences, history, and working files may be stored locally on your device. Local data can be removed through Android’s Clear storage action or by uninstalling the app.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">3. Google services in apps</h2>
          <p className="mt-3 leading-7 text-text-muted">A specific app may use Google services such as AdMob, Analytics, or Crashlytics. Depending on the service and your settings, Google may process advertising identifiers, device information, app activity, diagnostics, approximate location derived from network information, or other data described in that app’s Data Safety disclosure. Google controls its own processing and retention.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">Samsung TV Remote app</h2>
          <p className="mt-3 leading-7 text-text-muted">The Samsung TV Remote app discovers and controls compatible TVs over the local Wi-Fi network or an Android infrared emitter. Saved TV addresses, pairing tokens, and preferences stay on the device. Local media casting sends a selected photo or video to a compatible TV over the home network; it is not uploaded to my servers. The screen-sharing shortcut opens Android cast settings and does not itself transmit the phone screen.</p>
          <p className="mt-3 leading-7 text-text-muted">The app may request nearby Wi-Fi, older-Android location for discovery, selected photo/video access for casting, and microphone access only when voice control is started. The device speech-recognition provider may process audio under its own policy. The app uses Google AdMob without third-party mediation adapters, plus Firebase Analytics and Crashlytics. Those Google services may receive advertising, usage, device, and diagnostic data under their policies. Google User Messaging Platform manages ad choices where required.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">4. Website analytics, advertising, and consent</h2>
          <p className="mt-3 leading-7 text-text-muted">The production website uses Google Analytics, Google AdSense, and Google Funding Choices consent tooling. Consent defaults are restricted for covered regions until a visitor’s choice is available. Vercel Analytics and Speed Insights may also measure aggregate website performance. These services may receive network and device information under their own policies.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">5. Contact messages</h2>
          <p className="mt-3 leading-7 text-text-muted">When you send the contact form or email support, the name, email address, and message you provide are used to respond to the request. Do not include passwords, payment details, API keys, or other sensitive credentials.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">6. Permissions</h2>
          <p className="mt-3 leading-7 text-text-muted">An app requests Android permissions only when needed for a feature, such as accessing media selected for compression, communicating with a television on a local network, or capturing a document. The Play listing and Android permission prompt provide app-specific context.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">7. Deletion and controls</h2>
          <p className="mt-3 leading-7 text-text-muted">Use the app data deletion page for device-level removal steps, Google account controls, and support contact details. I cannot delete third-party data that the provider does not make available to me as the developer.</p>
          <Link href="/data-deletion" className="text-link mt-3">Open app data deletion guidance →</Link>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">8. Children</h2>
          <p className="mt-3 leading-7 text-text-muted">My apps and portfolio are not directed to children under 13. If you believe a child has provided personal information through a support message, contact me so I can review and remove the message where I control it.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-text">9. Contact and updates</h2>
          <p className="mt-3 leading-7 text-text-muted">Questions can be sent to <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="inline-flex min-h-11 items-center underline hover:text-text">{SITE_CONFIG.supportEmail}</a>. Material policy changes will be posted here with a revised effective date.</p>
        </section>
      </div>
    </Container>
  );
}
