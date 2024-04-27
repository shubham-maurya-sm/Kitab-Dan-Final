import React from 'react'
import { Link } from "react-router-dom";
import donor from "../../assets/donorImg.png";
import receiver from "../../assets/receiverImg.png";

function Options() {
  return (
    <div>
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
                Select Your Option
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {/* City 1 */}
                <Link
                  to="donate-form"
                  className="bg-gray-100 p-4 rounded-lg shadow hover:bg-green-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 flex flex-col items-center justify-center"
                >
                  <img src={donor} alt="donor Logo" className=" h-52 mb-2" />
                  <h3 className="text-lg font-semibold mb-2">Donor</h3>
                  {/* <p>Prayagraj</p> */}
                </Link>
                {/* <span>OR</span> */}
                {/* City 2 */}
                <Link
                  to="booksAvailable"
                  className="bg-gray-100 p-4 rounded-lg shadow hover:bg-green-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 flex flex-col items-center justify-center"
                >
                  <img
                    src={receiver}
                    alt="receiver Logo"
                    className=" h-52 mb-2"
                  />
                  <h3 className="text-lg font-semibold mb-2">Receiver</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options
