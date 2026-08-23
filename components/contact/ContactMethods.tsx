import { Download, Mail, MessageCircle } from "lucide-react";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ravindu.kaveesha2001@gmail.com";
const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Hi Ravindu, I found your portfolio and would like to discuss a project with you.");

export default function ContactMethods() {
  return (
    <aside className="contact-methods">
      <p className="contact-method-label">Prefer another way?</p>
      <a href={`mailto:${email}`} className="contact-method-card">
        <Mail size={20} />
        <span><small>Email me directly</small><strong>{email}</strong></span>
      </a>

      {whatsapp ? (
        <a href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="contact-method-card accent">
          <MessageCircle size={20} />
          <span><small>Quick conversation</small><strong>Chat on WhatsApp</strong></span>
        </a>
      ) : (
        <div className="contact-method-card muted" title="Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local">
          <MessageCircle size={20} />
          <span><small>WhatsApp</small><strong>Add your number in .env.local</strong></span>
        </div>
      )}

      <a href="/documents/Ravindu-Kaveesha-CV.pdf" download className="contact-method-card">
        <Download size={20} />
        <span><small>Resume</small><strong>Download my CV</strong></span>
      </a>
    </aside>
  );
}
