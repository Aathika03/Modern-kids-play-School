// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: "Missing required fields" });

  // TODO: integrate email service or DB here
  return res.status(200).json({ message: "Received" });
}
