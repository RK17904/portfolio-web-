import { Resend } from "resend";
import type { ContactFormData } from "@/types/contact";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactEmail(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !from) {
    throw new Error("Email service is not configured. Add RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL to .env.local.");
  }

  const resend = new Resend(apiKey);
  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    service: escapeHtml(data.service),
    budget: escapeHtml(data.budget ?? "Not specified"),
    message: escapeHtml(data.message).replaceAll("\n", "<br />"),
  };

  const { data: result, error } = await resend.emails.send({
    from,
    to: recipient,
    replyTo: data.email,
    subject: `Portfolio inquiry — ${data.service} — ${data.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Service:</strong> ${safe.service}</p>
        <p><strong>Budget:</strong> ${safe.budget}</p>
        <p><strong>Message:</strong><br />${safe.message}</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message || "Unable to send the email.");
  }

  return result;
}
