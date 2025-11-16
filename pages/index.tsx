import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HERO_BACKGROUND_IMAGE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const Pill: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border ${
      isActive
        ? "bg-blue-600 text-white border-blue-600"
        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
    } transition`}
  >
    {label}
  </button>
);

const IndexPage: React.FC = () => {
  const filters = [
    "All",
    "Top Villa",
    "Free Reschedule",
    "Book Now,Play later",
    "Self Checkin",
    "Instant Book",
  ];

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const displayedProperties =
    activeFilter === "All"
      ? properties
      : properties.filter((property) =>
          property.category?.includes(activeFilter)
        );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <>
      <section
        className="relative h-96 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(/image.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 flex flex-wrap gap-4 justify-center">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() =>
              setActiveFilter(activeFilter === filter ? "All" : filter)
            }
          />
        ))}
      </section>

      <section className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProperties.length > 0 ? (
          displayedProperties.map((property: PropertyProps) => (
            <Link href={`/property/${property.id}`} key={property.id}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{property.name}</h3>
                  <p className="text-gray-600">
                    ${property.price.toLocaleString()}/night
                  </p>
                  <p className="text-yellow-500">★ {property.rating}</p>
                  {property.discount && (
                    <p className="text-red-500">{property.discount}% off</p>
                  )}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">No properties found.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default IndexPage;