"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: subject || "Contact form",
          email,
          message: subject ? `${subject}\n\n${message}` : message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus({ type: "success", text: t("contact.success") });
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Email send error:", error);
      setStatus({ 
        type: "error", 
        text: error.message || t("contact.error") 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden scroll-mt-24">
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        {/* Left copy */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-neutral-900 dark:text-white">{t("contact.title")}</p>
            <p className="text-lg leading-8 text-neutral-600 dark:text-[#c2c2c6] max-w-xl">
              {t("contact.intro")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-neutral-400 hover:border-neutral-900 text-neutral-800 dark:border-white/70 dark:hover:border-white dark:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.7 1.9-1 .1-.7.4-1.1.7-1.4-2.5-.3-5.1-1.3-5.1-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.8 10.8 0 0 1 5.8 0c2.1-1.5 3.2-1.2 3.2-1.2.5 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.6 5.4-5.2 5.7.4.3.7.9.7 1.8v2.7c0 .4.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.6 18.4.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/peiyingma/"
              target="_blank"
              rel="noreferrer"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-neutral-400 hover:border-neutral-900 text-neutral-800 dark:border-white/70 dark:hover:border-white dark:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                <path d="M4.5 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm-2 6.2h4V21h-4V9.7Zm7.2 0h3.8v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-4v-4.5c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V21h-4V9.7Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-transparent">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-neutral-900 dark:text-white" htmlFor="email">
                {t("contact.emailLabel")}
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder={t("contact.emailPlaceholder")}
                className="w-full rounded-lg bg-white dark:bg-[#0f0f12] border border-neutral-300 dark:border-[#1f1f24] px-4 py-3 text-base text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-[#7f8186] focus:border-[#a94af8] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-neutral-900 dark:text-white" htmlFor="subject">
                {t("contact.subjectLabel")}
              </label>
              <input
                id="subject"
                type="text"
                placeholder={t("contact.subjectPlaceholder")}
                className="w-full rounded-lg bg-white dark:bg-[#0f0f12] border border-neutral-300 dark:border-[#1f1f24] px-4 py-3 text-base text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-[#7f8186] focus:border-[#a94af8] focus:outline-none"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-neutral-900 dark:text-white" htmlFor="message">
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={t("contact.messagePlaceholder")}
                className="w-full rounded-lg bg-white dark:bg-[#0f0f12] border border-neutral-300 dark:border-[#1f1f24] px-4 py-3 text-base text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-[#7f8186] focus:border-[#a94af8] focus:outline-none resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {status && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#a94af8] hover:bg-[#9b40e8] text-white font-semibold py-3 text-base transition-colors disabled:opacity-70"
            >
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

