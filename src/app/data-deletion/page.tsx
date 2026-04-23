import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "App Data Deletion",
  description: "Instructions for requesting the deletion of your user data from our applications.",
};

export default function DataDeletionPage() {
  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading 
        title="App Data Deletion" 
        subtitle="How to request deletion of your personal data"
      />
      
      <div className="prose prose-invert mt-12 max-w-3xl space-y-8 text-text-muted">
        <section>
          <h2 className="text-xl font-semibold text-text">Overview</h2>
          <p className="mt-2">
            We value your privacy and are committed to protecting your personal data. 
            If you have used any applications developed by <strong>TheMixzone</strong> or <strong>Nabin Pariyar</strong> and would like to request the deletion of your user data, please follow the instructions below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">What Data is Collected?</h2>
          <p className="mt-2">
            Most of our utility applications (such as calculators or offline tools) do not collect, transmit, or store any personally identifiable information (PII) on external servers. Data is typically processed locally on your device.
          </p>
          <p className="mt-2">
            For applications that do require account creation or cloud syncing, the data collected is strictly limited to what is necessary for the app to function properly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">How to Request Data Deletion</h2>
          <p className="mt-2">
            To request the complete deletion of your account and associated data, please send an email to our support team:
          </p>
          <div className="mt-4 rounded-lg bg-accent/10 p-4 border border-accent/20">
            <p className="font-medium text-accent">Email: <a href="mailto:nabin30217@gmail.com" className="hover:underline">nabin30217@gmail.com</a></p>
            <p className="mt-2 text-sm">Subject: <strong>Data Deletion Request - [App Name]</strong></p>
          </div>
          <p className="mt-4">
            In your email, please include:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>The name of the application.</li>
            <li>The email address or user ID associated with your account.</li>
            <li>Any other relevant details to help us identify your account.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">Processing Time</h2>
          <p className="mt-2">
            We process all data deletion requests within <strong>7 to 14 business days</strong>. You will receive a confirmation email once your data has been permanently deleted from our active systems and servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">Data Retention</h2>
          <p className="mt-2">
            Please note that some data may be retained temporarily in routine backups or for legal and compliance reasons, as required by law. However, this data will not be used for any active processing.
          </p>
        </section>
      </div>
    </Container>
  );
}
