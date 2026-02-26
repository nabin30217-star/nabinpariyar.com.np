import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for apps and services by Nabin Pariyar.",
};

export default function TermsPage() {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight text-text">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-text-muted">Effective date: January 11, 2026</p>

      <div className="mt-10 max-w-3xl space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-text">1. Acceptance</h2>
          <p className="mt-2 leading-7 text-text-muted">
            By downloading, installing, or using any of our Android applications
            published under &quot;TheMixzone&quot; on the Google Play Store, you
            agree to be bound by these Terms &amp; Conditions. If you do not
            agree, please uninstall the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            2. Use of the Apps
          </h2>
          <p className="mt-2 leading-7 text-text-muted">
            Our apps are provided for personal, non-commercial use. You agree
            not to misuse the apps, reverse-engineer them, or use them in any
            way that violates applicable laws or regulations. We reserve the
            right to update, modify, or discontinue any app at any time without
            prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            3. Third-Party Services
          </h2>
          <p className="mt-2 leading-7 text-text-muted">
            Our apps may include third-party services such as Google AdMob for
            advertising and Firebase for analytics and crash reporting. These
            services operate under their own terms and privacy policies. We are
            not responsible for the practices of these third-party services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">4. Disclaimer</h2>
          <p className="mt-2 leading-7 text-text-muted">
            Our apps are provided &quot;as is&quot; and &quot;as available&quot;
            without any warranties, express or implied. We do not guarantee that
            the apps will be error-free, uninterrupted, or free of harmful
            components.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            5. Limitation of Liability
          </h2>
          <p className="mt-2 leading-7 text-text-muted">
            To the fullest extent permitted by law, we shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenue, whether incurred
            directly or indirectly, arising from your use of our apps.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">6. Contact</h2>
          <p className="mt-2 leading-7 text-text-muted">
            If you have any questions about these Terms &amp; Conditions, please
            contact us at{" "}
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="text-accent hover:text-accent-hover"
            >
              {SITE_CONFIG.supportEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
