'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const venues = [
  {
    title: "Grand Ballroom",
    price: "$1500",
    image: "/hero.avif",
    date: "Available Year Round",
    description:
      "A luxurious ballroom perfect for weddings, equipped with state-of-the-art facilities and elegant decor.",
    type: "Wedding",
  },
  {
    title: "Garden Pavilion",
    price: "$800",
    date: "Seasonal Availability",
    description:
      "An open garden venue ideal for birthday parties, surrounded by lush greenery and fresh air.",
    type: "Birthday",
  },
  {
    title: "Banquet Hall",
    price: "$1200",
    date: "Available Year Round",
    description:
      "A spacious banquet hall suitable for family reunions or large gatherings with modern amenities.",
    type: "Reunion",
  },
  {
    title: "Beachfront Venue",
    price: "$2000",
    date: "Summer Availability",
    description:
      "A picturesque beachfront venue perfect for romantic weddings with a scenic ocean view.",
    type: "Wedding",
  },
  {
    title: "Private Lounge",
    price: "$500",
    date: "Available Year Round",
    description:
      "A cozy and private space perfect for intimate birthday celebrations or smaller events.",
    type: "Birthday",
  },
];

export default function Tickets() {
  const [selectedType, setSelectedType] = useState("All");
  const router = useRouter();

  const handleFilter = (type: "All" | "Wedding" | "Birthday" | "Reunion") => {
    setSelectedType(type);
  };

  const handleBooking = () => {
    // Navigate to the product page
    router.push("/product");
  };

  const filteredTickets =
    selectedType === "All"
      ? venues
      : venues.filter((venue) => venue.type === selectedType);

  return (
    <div className="px-8 py-12 bg-white">
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => handleFilter("All")}
          className={`px-4 py-2 rounded ${
            selectedType === "All" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
          } hover:bg-red-600 hover:text-white`}
        >
          All
        </button>
        <button
          onClick={() => handleFilter("Wedding")}
          className={`px-4 py-2 rounded ${
            selectedType === "Wedding"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-800"
          } hover:bg-red-600 hover:text-white`}
        >
          Wedding
        </button>
        <button
          onClick={() => handleFilter("Birthday")}
          className={`px-4 py-2 rounded ${
            selectedType === "Birthday" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
          } hover:bg-red-600 hover:text-white`}
        >
          Birthday
        </button>
        <button
          onClick={() => handleFilter("Reunion")}
          className={`px-4 py-2 rounded ${
            selectedType === "Reunion"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-800"
          } hover:bg-red-600 hover:text-white`}
        >
          Reunion
        </button>
      </div>

      {/* Tickets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-gray-400 border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
              {/* Venue Image */}
              <img
              src={ticket.image}
              alt={ticket.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-black font-bold">{ticket.title}</h2>
              <p className="text-black">{ticket.date}</p>
              <p className="my-2">{ticket.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-black  font-bold">{ticket.price}</span>
                <button onClick={handleBooking} 
                className="px-4 py-2 bg-black text-white rounded hover:bg-red-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
