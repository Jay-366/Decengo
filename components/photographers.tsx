"use client";
import React from 'react';

export const PhotographersComponent = ({ onBookClick }) => { 
  const photographers = [
    {
      name: 'John Doe',
      image: '/api/placeholder/100/100',
      description: 'John is an experienced photographer specializing in portraits and landscapes.',
      price: 150
    },
    {
      name: 'Jane Smith',
      image: '/api/placeholder/100/100',       
      description: 'Jane is a talented photographer with a keen eye for detail and composition.',
      price: 150
    },
    {
      name: 'Alex Johnson',
      image: '/api/placeholder/100/100',
      description: 'Alex is a versatile photographer who excels in both commercial and fine art photography.',
      price: 150
    }
  ];

  const hosters = [
    {
      name: 'Michael Green',
      image: '/api/placeholder/100/100',
      description: 'Michael is a seasoned event host with a charismatic personality and professional demeanor.',
      price: 200
    },
    {
      name: 'Sarah Miller',
      image: '/api/placeholder/100/100',
      description: 'Sarah specializes in hosting corporate and private events with a touch of elegance.',
      price: 200
    },
    {
      name: 'David Lee',
      image: '/api/placeholder/100/100',
      description: 'David is known for his witty humor and energy, making him perfect for parties and celebrations.',
      price: 200
    }
  ];
  
  const handleBookClick = (photographerPrice) => {
    onBookClick(photographerPrice);
  };

  return (
    <div className='mt-6'>
      {/* Photographers Section */}
      <h1 className="m-0 text-red-500 font-bold text-3xl">Photographers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {photographers.map((photographer, index) => (
          <div 
            key={index} 
            className="flex flex-row items-start gap-6 p-6 mt-9 bg-white rounded-lg shadow-md hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-shadow duration-300 cursor-pointer"
          >
            <img 
              src={photographer.image} 
              alt={photographer.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-2 text-black">{photographer.name}</h3>
              <p className="text-gray-600 mb-4">{photographer.description}</p>
              <p className="text-blue-500 font-medium mb-4">{photographer.price}</p>
              <div className="flex gap-4">
                <button onClick={() => handleBookClick(photographer.price)} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                  Book
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hosters Section */}
      <h1 className="m-0 text-red-500 font-bold text-3xl mt-10">Hosters</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {hosters.map((hoster, index) => (
          <div 
            key={index} 
            className="flex flex-row items-start gap-6 p-6 mt-9 bg-white rounded-lg shadow-md hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-shadow duration-300 cursor-pointer"
          >
            <img 
              src={hoster.image} 
              alt={hoster.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-2 text-black">{hoster.name}</h3>
              <p className="text-gray-600 mb-4">{hoster.description}</p>
              <p className="text-blue-500 font-medium mb-4">{hoster.price}</p>
              <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                  Book
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
