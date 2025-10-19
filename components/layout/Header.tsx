import React from "react";
import {
  BiHomeAlt,
  BiBuilding,
  BiHotel,
  BiSolidTree,
  BiSwim,
  BiLandscape,
  BiStar,
} from "react-icons/bi";

export default function Header() {
  const accommodationTypes = [
    { name: "Rooms", icon: <BiHomeAlt size={20} /> },
    { name: "Mansion", icon: <BiBuilding size={20} /> },
    { name: "Countryside", icon: <BiSolidTree size={20} /> },
    { name: "Villa", icon: <BiHotel size={20} /> },
    { name: "Amazing pool", icon: <BiSwim size={20} /> },
    { name: "Island", icon: <BiLandscape size={20} /> },
    { name: "New", icon: <BiStar size={20} /> },
    { name: "Compaing" },
    { name: "Apartment" },
    { name: "House" },
    { name: "Lakefront" },
    { name: "Farm house" },
    { name: "Treehouse" },
    { name: "Cabins" },
    { name: "Castles" },
    { name: "Lakeside" },
  ];
  return (
    <header className="bg-white ">
      <div className="mx-auto flex  justify-between p-4 ">
        <div className="mt-4">
          <span className="font-bold tex-2xl text-black">alx</span>
        </div>
        <div className="flex flex-1 max-w-4xl mx-auto md:mx-0 bg-white text-black border rounded-lg shadow-sm p-4 mt-4">
          <label htmlFor="" className="text-center">Location</label>
          <input
            type="text"
            className="flex-1  border-r"
            placeholder="Search for destination"
          />
          <label htmlFor="">Check in</label>
          <input type="text" className="flex-1  border-r" placeholder="Add date" />
          <label htmlFor="">Check out</label>
          <input type="text" className="flex-1  border-r" placeholder="Add date" />
          <label htmlFor="">people</label>
          <input type="text" placeholder="Add guest" />
          <button className="bg-orange-400 text-white px-4 rounded-r-xl">
            🔍
          </button>
        </div>
        <div className="mt-4 space-2" >
          <button className="bg-green-600 text-white px-4 py-1 rounded">
            Sign in
          </button>
          <button className="bg-white border border-gray-300 px-4 py-1 rounded">
            Sign up
          </button>
        </div>
      </div>

      <div className=" border-t boder-b py-2 text-black">
        <ul className="flex space-x-6 px-4">
          {accommodationTypes.map((types, i) => (
            <li key={i} className="">
              {types.icon}
              {types.name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
