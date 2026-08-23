"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import type { ContactApiResponse, ContactFormData } from "@/types/contact";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  service: "Full-Stack Development",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as ContactApiResponse;
      if (!response.ok || !result.success) throw new Error(result.message);

      setStatus("success");
      setFeedback(result.message);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-field-grid">
        <label>
          <span>Name</span>
          <input required name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input required type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
        </label>
      </div>

      <div className="contact-field-grid">
        <label>
          <span>I&apos;m interested in</span>
          <select name="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
            <option>Full-Stack Development</option>
            <option>Frontend Development</option>
            <option>Backend / API Development</option>
            <option>UI/UX Design</option>
            <option>Website Redesign</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Budget (optional)</span>
          <input name="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder="Your expected range" />
        </label>
      </div>

      <label>
        <span>Tell me about your project</span>
        <textarea required minLength={10} maxLength={3000} name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Project goals, timeline, features, or anything useful..." />
      </label>

      <button className="contact-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <><LoaderCircle className="spin" size={18} /> Sending</> : <>Send project inquiry <ArrowUpRight size={18} /></>}
      </button>

      {feedback && <p className={`contact-feedback ${status}`} role="status">{feedback}</p>}
    </form>
  );
}
