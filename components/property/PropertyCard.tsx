import React from "react";
import Link from "next/link";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition duration-300">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
          <p className="text-gray-600 mb-2">
            ${property.price?.toLocaleString()}/night
          </p>
          <div className="flex items-center justify-between">
            <p className="text-yellow-500">★ {property.rating}</p>
            {property.discount && (
              <p className="text-red-500 font-semibold">{property.discount}% off</p>
            )}
          </div>
          {property.address && (
            <p className="text-gray-500 text-sm mt-2">{property.address.state}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;