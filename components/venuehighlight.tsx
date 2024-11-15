import React from 'react';

export default function VenueHighlight() {
  return (
    <div className="bg-white shadow-md px-8 py-12 w-full flex flex-col items-center gap-4">
      {/* Venue Image */}
      <div className="w-full md:w-3/4 lg:w-1/2">
        <div className="relative">
          <img
            src="/hero.avif"
            alt="Grand Ballroom"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            On Sale
          </div>
        </div>
      </div>

      {/* Venue Details */}
      <div className="w-full md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Grand Ballroom</h2>
            <p className="text-gray-500 text-sm">Lakeville, CT</p>
          </div>
          <button className="bg-gray-200 px-3 py-1 rounded text-xs">
            Lime Rock Park
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center">
            <p className="text-xl font-bold">23</p>
            <p className="text-gray-500 text-sm">Days</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">17</p>
            <p className="text-gray-500 text-sm">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">48</p>
            <p className="text-gray-500 text-sm">Minutes</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-bold">$240.00 - Price From</p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <img
                src="/avatar1.jpg"
                alt="User 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/avatar2.jpg"
                alt="User 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/avatar3.jpg"
                alt="User 3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-sm text-gray-500">+157 Already Bought Tickets</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Buy Ticket Now
          </button>
          <button className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}