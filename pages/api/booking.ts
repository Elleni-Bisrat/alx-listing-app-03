// pages/api/bookings.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const bookingData = req.body;

    // In real app, save to DB here
    console.log("New booking received:", bookingData);

    return res.status(200).json({ message: "Booking confirmed!", data: bookingData });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
