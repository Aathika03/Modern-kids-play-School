// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type ResponseData = { success?: boolean; message?: string; error?: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("Mail env presence:", {
    has_EMAIL_USER: !!process.env.EMAIL_USER,
    has_EMAIL_PASS: !!process.env.EMAIL_PASS,
    has_EMAIL_TO: !!process.env.EMAIL_TO,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("Mail transporter verified OK (contact)");
  } catch (verifyErr) {
    console.error("Mail transporter verify failed (contact):", verifyErr && verifyErr.message ? verifyErr.message : verifyErr);
    return res.status(500).json({ error: "Mail server authentication failed. Check EMAIL_USER and EMAIL_PASS." });
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });
    console.log("Contact email sent OK, messageId:", info?.messageId || "(no id)");
    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Email sending error (contact):", error && error.message ? error.message : error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
