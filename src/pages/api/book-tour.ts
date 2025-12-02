// src/pages/api/book-tour.ts
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type ResponseData = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    parentName,
    childName,
    childAge,
    phone,
    email,
    preferredDate,
    preferredTime,
    message,
  } = req.body || {};

  if (!parentName || !childName || !phone) {
    return res.status(400).json({
      message: "Required fields missing: parentName, childName, phone.",
    });
  }

  // quick env presence check (no secrets logged)
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

  // Verify transporter so we fail early with clear server log
  try {
    await transporter.verify();
    console.log("Mail transporter verified OK");
  } catch (verifyErr) {
    console.error("Mail transporter verify failed:", verifyErr && verifyErr.message ? verifyErr.message : verifyErr);
    return res.status(500).json({ message: "Mail server authentication failed. Check EMAIL_USER and EMAIL_PASS." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "New Tour Booking Request",
    html: `
      <h2>New Tour Booking Request</h2>
      <p><strong>Parent Name:</strong> ${parentName}</p>
      <p><strong>Child Name:</strong> ${childName}</p>
      <p><strong>Child Age:</strong> ${childAge || "Not provided"}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate || "Not selected"}</p>
      <p><strong>Preferred Time:</strong> ${preferredTime || "Not selected"}</p>
      <p><strong>Message:</strong> ${message || "No message"}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Book-tour email sent OK, messageId:", info?.messageId || "(no id)");
    return res.status(200).json({ message: "Success" });
  } catch (err) {
    console.error("Email sending error:", err && err.message ? err.message : err);
    return res.status(500).json({ message: "Email sending failed. Please try again." });
  }
}
