"use client";

import { personalInfo } from "@/data/cv";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Failed to send message");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Have a project in mind or want to discuss an opportunity? Reach out."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xl font-medium text-white transition-colors hover:text-violet-400"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Phone
                </p>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="text-xl font-medium text-white transition-colors hover:text-violet-400"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Location
                </p>
                <p className="text-xl font-medium text-white">
                  {personalInfo.location}
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-violet-500/50 hover:bg-violet-500/10"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-violet-500/50"
                  placeholder="Your name"
                />
                {errors.name ? (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-violet-500/50"
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-violet-500/50"
                  placeholder="Tell me about your project..."
                />
                {errors.message ? (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 py-3.5 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" ? (
                <p className="mt-4 text-center text-sm text-emerald-400">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              ) : null}

              {status === "error" ? (
                <p className="mt-4 text-center text-sm text-red-400">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
