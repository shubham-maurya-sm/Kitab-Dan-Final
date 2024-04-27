import React from "react";
import { Link } from "react-router-dom";

function AvailCities() {
  return (
    <div className="bg-gray-200 p-4 sm:p-8">
      <div className="container mx-auto px-2 lg:">
        {" "}
        {/* Adjusted container width */}
        <div className="flex flex-col sm:flex-row">
          {/* Title Box */}
          <div className="container mx-auto sm:w-2/3 bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-0">
            {" "}
            {/* Adjusted container width */}
            <h2 className="text-xl font-bold mb-4 text-center">
              Select Your City For Pickup The Books
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* City 1 */}
              <Link to={'City'+'/prayagraj'} className="bg-gray-100 p-4 rounded-lg shadow hover:bg-green-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 flex flex-col items-center justify-center">
                <img
                  src="https://i.ytimg.com/vi/kDlavpEkbb8/hqdefault.jpg"
                  alt="City 1 Logo"
                  className=" h-40 mb-2"
                />
                <h3 className="text-lg font-semibold mb-2">Prayagraj</h3>
                {/* <p>Prayagraj</p> */}
              </Link>
              {/* City 2 */}
              <Link to='#' className="bg-gray-100 p-4 rounded-lg shadow hover:bg-green-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 flex flex-col items-center justify-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/504/536/non_2x/doodle-freehand-drawing-of-india-map-free-vector.jpg"
                  alt="City 2 Logo"
                  className=" h-40 mb-2"
                />
                <h3 className="text-lg font-semibold mb-2">Rest Of India</h3>
                <p>Available Soon!!</p>
              </Link>
            </div>
            <div className=" px-7 py-8 text-center">
              <h3>
                We Have Door Step Free Pickup Facility (or Drop to nearest registered NGO)
                at Prayagraj city only but soon will available across all other
                cities of India for Pay Pickup Facility
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailCities;
