import React from "react";

const Card10 = () => {
  return (
    <div className="container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-3xl font-bold mb-4">Special Offer!</div>
      <div className="text-lg mb-4">
        Get <span className="text-yellow-400 font-bold">25% OFF</span> your next
        purchase!
      </div>
      <div className="text-base mb-4">Use coupon code:</div>
      <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
        <span className="text-2xl font-semibold">TAILOFFER25</span>
        <button className="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Copy
        </button>
      </div>
      <div className="text-sm mt-4">
        <p>
          Valid until <span className="font-semibold">December 31, 2023</span>
        </p>
        <p>Terms and conditions apply.</p>
      </div>
    </div>
  );
};

export default Card10;
