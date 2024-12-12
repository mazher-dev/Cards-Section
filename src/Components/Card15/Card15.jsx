import React from "react";

const Card15 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Nature scene"
          />
          <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
            Featured
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Discover Nature's Beauty
          </h2>
          <p className="text-gray-600 mb-4">
            Immerse yourself in the tranquil landscapes and breathtaking vistas
            of the natural world.
          </p>
          <div className="flex items-center mb-4">
            <svg
              className="h-5 w-5 text-yellow-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-gray-600 ml-1">4.9 (128 reviews)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">$299</span>
            <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card15;
