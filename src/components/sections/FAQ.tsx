const faqs = [
  {
    question: "What kind of work is a strong fit?",
    answer: "Full-stack web applications, operational and garment ERP workflows, native Android products, background processing, media pipelines, device communication, and Play Store delivery.",
  },
  {
    question: "Can you help after an app ships?",
    answer: "Yes. I publish and maintain my own Play Store apps, so release work, policy changes, failure handling, listing updates, and support are part of my scope.",
  },
  {
    question: "What should I include in the first message?",
    answer: "Describe the user problem, the main constraint, the current state of the product, and what has already been tried. A concise, concrete brief is enough.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-20 border-t border-border pt-12" aria-labelledby="contact-faq-title">
      <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <p className="utility-label text-accent">Before writing</p>
          <h2 id="contact-faq-title" className="mt-3 font-display text-3xl font-semibold text-text">Useful context</h2>
        </div>
        <div className="border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-border last:border-b-0">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 font-semibold text-text marker:content-none">
                {faq.question}
                <span aria-hidden="true" className="font-utility text-accent group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pb-6 leading-7 text-text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
