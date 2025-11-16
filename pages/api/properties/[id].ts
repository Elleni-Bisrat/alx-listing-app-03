// pages/api/properties/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: "1",
    title: "Cozy Apartment",
    location: "New York",
    price: 1200,
    image: "/images/property1.jpg",
    description: "A cozy apartment in the heart of New York.",
  },
  {
    id: "2",
    title: "Luxury Villa",
    location: "Los Angeles",
    price: 5000,
    image: "/images/property2.jpg",
    description: "A luxurious villa with amazing amenities.",
  },
  {
    id: "3",
    title: "Beach House",
    location: "Miami",
    price: 3500,
    image: "/images/property3.jpg",
    description: "A beach house with stunning ocean views.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.status(200).json(property);
}
