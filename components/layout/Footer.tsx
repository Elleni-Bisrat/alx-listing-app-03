import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <h1 className="text-white text-2xl font-bold mb-4">alx</h1>
          <p className="text-gray-400 text-sm">
            ALX is a platform where travelers can discover and book unique, 
            comfortable, and affordable lodging options worldwide. From cozy city apartments 
            and tranquil countryside retreats to exotic beachside villas, ALX connects you with 
            the perfect place to stay for any trip.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4">Explore</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Apartments in Dubai</li>
            <li>Hotels in New York</li>
            <li>Villa in Spain</li>
            <li>Mansion in Indonesia</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About us</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Customers</li>
            <li>Brand</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4">Help</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Support</li>
            <li>Cancel booking</li>
            <li>Refunds Process</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 pb-6 text-gray-500 text-sm max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>
          Some hotel requires you to cancel more than 24 hours before check-in. Details{" "}
          <span className="text-green-500 cursor-pointer">here</span>.
        </p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-white">Terms of Service</span>
          <span className="cursor-pointer hover:text-white">Policy service</span>
          <span className="cursor-pointer hover:text-white">Cookies Policy</span>
          <span className="cursor-pointer hover:text-white">Partners</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
