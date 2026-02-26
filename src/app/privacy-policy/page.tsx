import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for apps and services by Nabin Pariyar.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight text-text">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-text-muted">Effective date: January 11, 2026</p>

      <div className="mt-10 max-w-3xl space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-text">1. Overview</h2>
          <p className="mt-2 leading-7 text-text-muted">
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you use any of our Android
            applications published under the developer name &quot;TheMixzone&quot;
            on the Google Play Store.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            2. Information We May Collect
          </h2>
          <p className="mt-2 leading-7 text-text-muted">
            Our apps are designed to work mostly offline and do not require user
            registration. We do not directly collect, store, or transmit your
            personal data. However, third-party services integrated into our apps
            (such as Google AdMob and Firebase) may collect certain information
            automatically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">3. Ads (AdMob)</h2>
          <p className="mt-2 leading-7 text-text-muted">
            Our apps use Google AdMob to display advertisements. AdMob may
            collect and use data such as your device&apos;s advertising ID, IP
            address, and general location to serve relevant ads. You can control
            ad personalization through your device&apos;s settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            4. Analytics / Crash Reporting
          </h2>
          <p className="mt-2 leading-7 text-text-muted">
            We may use Firebase Crashlytics and Firebase Analytics to collect
            anonymous usage data and crash reports. This helps us identify bugs,
            improve app stability, and understand how users interact with our
            apps. This data is anonymized and cannot be used to personally
            identify you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">5. Permissions</h2>
          <p className="mt-2 leading-7 text-text-muted">
            Some of our apps may request device permissions (such as camera,
            storage, or network access) to provide core functionality. These
            permissions are only used for the stated purpose and no data is
            transmitted to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">6. Data Sharing</h2>
          <p className="mt-2 leading-7 text-text-muted">
            We do not sell, trade, or share your personal data with third
            parties, except as required by the third-party SDKs mentioned above
            (AdMob, Firebase) which operate under their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            7. Data Retention &amp; Deletion
          </h2>
          <p className="mt-2 leading-7 text-text-muted">
            Since we do not collect personal data directly, there is no user data
            stored on our servers. Any data collected by third-party services is
            subject to their respective data retention policies. You can request
            deletion of your data by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            8. Children&apos;s Privacy
          </h2>
          <p className="mt-2 leading-7 text-text-muted">
            Our apps are not specifically directed at children under the age of
            13. We do not knowingly collect personal data from children. If you
            believe we have inadvertently collected such data, please contact us
            immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">9. Contact</h2>
          <p className="mt-2 leading-7 text-text-muted">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="text-accent hover:text-accent-hover"
            >
              {SITE_CONFIG.supportEmail}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            10. Updates to This Policy
          </h2>
          <p className="mt-2 leading-7 text-text-muted">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date. We encourage
            you to review this page periodically.
          </p>
        </section>
      </div>
    </Container>
  );
}
