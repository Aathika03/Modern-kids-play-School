import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, phone, message } = req.body;

  // Email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email))
    return res.status(400).json({ message: "Invalid email format" });

  // Phone validation (India – 10 digits)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone))
    return res.status(400).json({ message: "Invalid Indian phone number" });

  // If everything is valid
  return res.status(200).json({ message: "Received" });
}

