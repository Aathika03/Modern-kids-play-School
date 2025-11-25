// src/pages/api/book-tour.ts
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = { message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Accept either the new form field names OR older ones for backward compatibility.
  const {
    parentName,
    childName,
    childAge,
    phone,
    email,
    preferredDate,
    preferredTime,
    message,
    // legacy fallback names:
    name,
    date,
  } = req.body || {};

  // Determine readable values (use either parentName or name)
  const applicantName = parentName || name;
  const tourDate = preferredDate || date;

  // Validate required fields that frontend sends (parentName/childName/phone are required)
  if (!applicantName || !childName || !phone) {
    return res.status(400).json({ message: "Missing required fields: parentName, childName, phone are required." });
  }

  // Example: At this point you could:
  // - Save to a DB
  // - Send an email
  // - Push to Google Sheets, etc.
  // For demo, we simply return success.

  try {
    // Simulate async work if needed
    // await someDb.save({ ... });

    // Return success and echo minimal info
    return res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    console.error("book-tour handler error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
