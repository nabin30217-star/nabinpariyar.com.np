import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { getPlayStoreApps } from "@/lib/services/playStore";

export const metadata: Metadata = {
  title: "App Data Deletion",
  description:
    "Request deletion of your personal data collected by TheMixzone applications. Compliant with Google Play, GDPR, and CCPA requirements.",
};

export const revalidate = 3600;

export default async function DataDeletionPage() {
  const playStoreApps = await getPlayStoreApps();

  // Build the per-app data table dynamically from Play Store
  const appDataTable = playStoreApps.map((app) => ({
    app: app.title,
    dataCollected: ["AdMob Advertising ID", "Firebase Crashlytics logs"],
    storage: "Google servers (managed by Google)",
    userAccounts: "None",
  }));

  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading
        title="App Data Deletion"
        subtitle="How to request deletion of your personal data"
      />

      {/* Last Updated Badge */}
      <div className="mt-6 flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
          Last updated: April 2026
        </span>
        <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/20">
          GDPR &amp; CCPA Compliant
        </span>
        <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20">
          {appDataTable.length} Apps Covered
        </span>
      </div>

      <div className="mt-12 max-w-4xl space-y-10">
        {/* Section 1: Overview */}
        <section>
          <h2 className="text-xl font-semibold text-text">Overview</h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            We value your privacy and are committed to protecting your personal
            data. All applications developed by{" "}
            <strong className="text-text">TheMixzone</strong> (Nabin Pariyar)
            are designed to be <strong className="text-text">privacy-first</strong>.
            Our apps do not create user accounts, do not require login, and do
            not store any personal data on our own servers. All data processing
            happens locally on your device.
          </p>
        </section>

        {/* Section 2: What Data is Collected */}
        <section>
          <h2 className="text-xl font-semibold text-text">
            What Data is Collected?
          </h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            Our apps use the following third-party Google services, which may
            automatically collect limited data:
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text">Google AdMob</h3>
              </div>
              <p className="text-sm text-text-muted">
                Collects your <strong className="text-text">Advertising ID</strong> to
                serve personalized or non-personalized ads. This data is managed
                entirely by Google and is not accessible to us.
              </p>
            </Card>

            <Card className="h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.135c-.117-1.955-1.727-3.555-3.68-3.555h-6.75c-1.953 0-3.563 1.6-3.68 3.555a23.91 23.91 0 01-1.152 6.135A24.088 24.088 0 0112 12.75z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text">Firebase Crashlytics</h3>
              </div>
              <p className="text-sm text-text-muted">
                Collects anonymous <strong className="text-text">crash logs</strong> and
                device info (OS version, device model) to help us fix bugs. No
                personal information is included. This data is managed by Google.
              </p>
            </Card>
          </div>

          <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
            <p className="text-sm text-emerald-400">
              <strong>✓ No user accounts.</strong> &nbsp;
              <strong>✓ No personal data stored on our servers.</strong> &nbsp;
              <strong>✓ No email or phone collection.</strong>
            </p>
          </div>
        </section>

        {/* Section 3: Per-App Data Table */}
        <section>
          <h2 className="text-xl font-semibold text-text">
            Data Collected Per App
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            This table is automatically updated from the Google Play Store. Currently covering <strong className="text-text">{appDataTable.length} published apps</strong>.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pr-4 font-semibold text-text">App</th>
                  <th className="py-3 pr-4 font-semibold text-text">Data Collected</th>
                  <th className="py-3 pr-4 font-semibold text-text">Storage</th>
                  <th className="py-3 font-semibold text-text">User Accounts</th>
                </tr>
              </thead>
              <tbody>
                {appDataTable.map((row) => (
                  <tr key={row.app} className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-text">
                      {row.app}
                    </td>
                    <td className="py-3 pr-4 text-text-muted">
                      {row.dataCollected.map((item, i) => (
                        <span key={item}>
                          {item}
                          {i < row.dataCollected.length - 1 && ", "}
                        </span>
                      ))}
                    </td>
                    <td className="py-3 pr-4 text-text-muted">{row.storage}</td>
                    <td className="py-3 text-emerald-400 font-medium">
                      {row.userAccounts}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: How to Delete Your Data */}
        <section>
          <h2 className="text-xl font-semibold text-text">
            How to Delete Your Data
          </h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            Since our apps do not store any data on our own servers, you can
            manage or delete the data collected by Google services directly:
          </p>

          <div className="mt-4 space-y-4">
            <Card>
              <h3 className="font-semibold text-text mb-2">
                Option 1: Reset Your Advertising ID
              </h3>
              <p className="text-sm text-text-muted">
                Go to your phone&apos;s{" "}
                <strong className="text-text">
                  Settings → Privacy → Ads
                </strong>{" "}
                and tap <strong className="text-text">&quot;Reset advertising ID&quot;</strong> or{" "}
                <strong className="text-text">&quot;Delete advertising ID&quot;</strong>. This
                immediately disconnects your ad profile from our apps.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-text mb-2">
                Option 2: Uninstall the App
              </h3>
              <p className="text-sm text-text-muted">
                All locally stored app data (preferences, history, cached files)
                is permanently deleted when you uninstall the app from your
                device. No data remains on your phone.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-text mb-2">
                Option 3: Request Deletion via Email
              </h3>
              <p className="text-sm text-text-muted mb-3">
                If you would like us to submit a data deletion request to Google
                on your behalf, or if you have any concerns about your data,
                please contact us:
              </p>
              <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                <p className="font-medium text-accent">
                  Email:{" "}
                  <a
                    href="mailto:nabin30217@gmail.com"
                    className="hover:underline"
                  >
                    nabin30217@gmail.com
                  </a>
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Subject:{" "}
                  <strong className="text-text">
                    Data Deletion Request - [App Name]
                  </strong>
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 5: Processing Time */}
        <section>
          <h2 className="text-xl font-semibold text-text">Processing Time</h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            Email requests are processed within{" "}
            <strong className="text-text">7 business days</strong>. You will
            receive a confirmation email once the deletion request has been
            submitted to the relevant Google services.
          </p>
        </section>

        {/* Section 6: Data Retention */}
        <section>
          <h2 className="text-xl font-semibold text-text">Data Retention</h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            We do not retain any personal data. Crash logs collected by Firebase
            Crashlytics are automatically purged by Google after{" "}
            <strong className="text-text">90 days</strong>. Advertising data
            managed by AdMob follows Google&apos;s own retention and deletion
            policies.
          </p>
        </section>

        {/* Section 7: Your Rights */}
        <section>
          <h2 className="text-xl font-semibold text-text">Your Rights</h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            Under GDPR (EU), CCPA (California), and other applicable privacy
            laws, you have the right to:
          </p>
          <ul className="mt-3 space-y-2 text-text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-text">Access</strong> — Know what data
                has been collected about you.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-text">Deletion</strong> — Request
                permanent deletion of your data.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-text">Opt-out</strong> — Disable
                personalized advertising at any time via your device settings.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-text">Portability</strong> — Request a
                copy of your data in a machine-readable format.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 8: Related Links */}
        <section>
          <h2 className="text-xl font-semibold text-text">Related Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent/30 hover:text-accent"
            >
              Privacy Policy &rarr;
            </Link>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent/30 hover:text-accent"
            >
              Google Privacy Policy &rarr;
            </a>
            <a
              href="https://myaccount.google.com/data-and-privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent/30 hover:text-accent"
            >
              Google Data &amp; Privacy &rarr;
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}
