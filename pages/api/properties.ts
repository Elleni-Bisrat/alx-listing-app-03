// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: "1",
    title: "Cozy Apartment",
    location: "New York",
    price: 1200,
    image: "/images/property1.jpg",
  },
  {
    id: "2",
    title: "Luxury Villa",
    location: "Los Angeles",
    price: 5000,
    image: "/images/property2.jpg",
  },
  {
    id: "3",
    title: "Beach House",
    location: "Miami",
    price: 3500,
    image: "/images/property3.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(properties);
}
