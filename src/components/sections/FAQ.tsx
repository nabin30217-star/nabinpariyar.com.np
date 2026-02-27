"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideUp, { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "I build Android apps (Kotlin, Jetpack Compose) and modern websites (Next.js, TypeScript). I also offer UI/UX design, app maintenance, and consulting.",
    },
    {
        question: "How long does a typical project take?",
        answer:
            "It depends on complexity. A simple app takes 2-4 weeks, a medium project 4-8 weeks. I'll give you a clear timeline before we start.",
    },
    {
        question: "Do you work with international clients?",
        answer:
            "Yes! I work with clients worldwide. I'm comfortable with different time zones and communicate via email, WhatsApp, or any tool you prefer.",
    },
    {
        question: "What's your pricing?",
        answer:
            "I offer project-based pricing so you know the full cost upfront — no surprises. Contact me with your project details for a free estimate.",
    },
    {
        question: "Can you maintain my app after launch?",
        answer:
            "Absolutely. I offer ongoing support packages including bug fixes, feature updates, and Play Store compliance monitoring.",
    },
];

function FAQItem({
    question,
    answer,
    index,
}: {
    question: string;
    answer: string;
    index: number;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StaggerItem direction={index % 2 === 0 ? "left" : "right"}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="w-full cursor-pointer rounded-xl border border-border bg-card p-5 text-left transition-all duration-300 hover:border-accent/30"
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-text pr-4">{question}</h3>
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-sm"
                    >
                        +
                    </motion.span>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <p className="mt-3 text-sm leading-relaxed text-text-muted">
                                {answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </StaggerItem>
    );
}

export default function FAQ() {
    return (
        <div className="mt-16">
            <SlideUp>
                <h2 className="mb-2 text-2xl font-semibold text-text">
                    Frequently Asked Questions
                </h2>
                <p className="mb-8 text-text-muted">
                    Quick answers to common questions
                </p>
            </SlideUp>
            <StaggerContainer className="flex flex-col gap-3">
                {faqs.map((faq, i) => (
                    <FAQItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                        index={i}
                    />
                ))}
            </StaggerContainer>
        </div>
    );
}
