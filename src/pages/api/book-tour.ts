// src/pages/api/book-tour.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { success: boolean; message?: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = req.body;

    // Basic validation
    if (!body || !body.parentName || !body.phone || !body.childName) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // TODO: Save to DB / send email / connect to CRM
    // Example: await sendEmailToAdmissions(body);

    // For debugging during development, you can print to console
    console.log("Book-tour request received:", JSON.stringify(body));

    return res.status(200).json({ success: true, message: "Request received" });
  } catch (err) {
    console.error("API error (book-tour):", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

