import type { NextApiRequest, NextApiResponse } from "next";
import type { ContactApiResponse } from "@/types/contact";
import { validateContactPayload } from "@/lib/validation";
import { sendContactEmail } from "@/services/contactService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactApiResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const validation = validateContactPayload(req.body);
  if (!validation.ok) {
    return res.status(400).json({ success: false, message: validation.message });
  }

  try {
    await sendContactEmail(validation.data);
    return res.status(200).json({
      success: true,
      message: "Thanks — your message has been sent. I’ll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "The message could not be sent right now. Please use WhatsApp or email me directly.",
    });
  }
}
