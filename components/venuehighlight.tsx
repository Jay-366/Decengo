"use client";
import React, { useState } from 'react';
import { Wallet, ExternalLink, Calendar, X } from 'lucide-react';
import { useRouter } from "next/navigation";

const VenuePreview = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [price, setPrice] = useState(140);
  const [showKeysModal, setShowKeysModal] = useState(false);
  const router = useRouter(); 

  const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };


const showServices = () => {
  router.push("/product/services");
};

  // Mock Photographers Component
  const PhotographersPreview = () => (
    <div className="mt-8 p-6 border-t border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Available Photographers</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium">John Doe</h4>
            <p className="text-sm text-gray-500">Wedding Specialist</p>
          </div>
          <button
            onClick={() => setPrice(prev => prev + 50)}
            className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800"
          >
            Book +$50
          </button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium">Jane Smith</h4>
            <p className="text-sm text-gray-500">Event Photography</p>
          </div>
          <button
            onClick={() => setPrice(prev => prev + 45)}
            className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800"
          >
            Book +$45
          </button>
        </div>
      </div>
    </div>
  );

  // Coinbase Keys Modal
  const KeysModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Coinbase Keys Sign Request</h3>
            <button 
              onClick={() => setShowKeysModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Wallet size={16} />
            <span>Sign transaction with Coinbase Keys</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <div className="font-medium mb-2">Transaction Details:</div>
            <div className="text-gray-600">
              <div>Amount: ${price.toFixed(2)}</div>
              <div>Event Date: {formatDate(date)}</div>
              <div>Network: Ethereum Mainnet</div>
              <div>Method: wallet_sendCalls</div>
            </div>
          </div>

          <a 
            href="https://keys.coinbase.com/sign/wallet-send-calls" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue to Coinbase Keys
            <ExternalLink size={16} />
          </a>
          
          <div className="text-center text-sm text-gray-500">
            You will be redirected to Coinbase Keys to sign this transaction
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl mx-auto mt-8 mb-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="relative">
          <img
            src="/api/placeholder/800/600"
            alt="Grand Ballroom"
            className="w-full h-[400px] object-cover rounded-lg bg-gray-100"
          />
          <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-900">
            On Sale
          </span>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-black">Grand Ballroom</h2>
              <p className="text-black">Lakeville, CT</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-900">
              Lime Rock Park
            </span>
          </div>

          {/* Date Picker */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-500">Select Event Date</label>
            <div className="relative">
              <button
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="w-full flex items-center justify-start px-4 py-2 text-left border rounded-md hover:bg-gray-50 text-black"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {formatDate(date)}
              </button>
              {showDatePicker && (
                <div className="absolute top-full mt-1 w-full z-50 bg-white border rounded-md shadow-lg text-black">
                  <input 
                    type="date"
                    className="w-full p-4 border-none rounded-lg"
                    value={date.toISOString().split('T')[0]}
                    onChange={(e) => {
                      setDate(new Date(e.target.value));
                      setShowDatePicker(false);
                    }}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Price and Attendees */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-black">Starting from ${price.toFixed(2)}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button 
              className="flex-1 px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 font-medium"
            >
              Pay
            </button>

            <button 
              onClick={() => setShowKeysModal(true)}
              className="flex-1 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Wallet size={16} />
              Pay with Crypto
            </button>

            <button  onClick={showServices}
              className="flex-1 px-8 py-3 border border-gray-400 rounded-md hover:bg-black hover:text-white font-medium transition-all duration-300 ease-in-out"
            >
              Services
            </button>
          </div>
        </div>
      </div>
      
      <PhotographersPreview />
      
      {/* Coinbase Keys Modal */}
      {showKeysModal && <KeysModal />}
    </div>
  );
};

export default VenuePreview;