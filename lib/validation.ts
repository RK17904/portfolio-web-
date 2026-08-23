import type { ContactFormData } from "@/types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(input: unknown):
  | { ok: true; data: ContactFormData }
  | { ok: false; message: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Invalid request body." };
  }

  const body = input as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.service ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 80) {
    return { ok: false, message: "Please enter a valid name." };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 160) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (!service || service.length > 80) {
    return { ok: false, message: "Please select a service." };
  }

  if (message.length < 10 || message.length > 3000) {
    return { ok: false, message: "Your message should be between 10 and 3000 characters." };
  }

  return {
    ok: true,
    data: { name, email, service, budget: budget || undefined, message },
  };
}
