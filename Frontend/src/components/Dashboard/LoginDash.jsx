import React from "react";
import { Link } from "react-router-dom";
import logSuccess from "../../assets/logIn_Success.webp";

function LoginDash() {
  return (
    <div className="bg-gray-200 p-4 sm:p-8">
      <div className="container mx-auto px-2 lg:">
        <div className="flex flex-col sm:flex-row">
          {/* Title Box */}
          <div className="container mx-auto sm:w-2/3 bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-0">
            {/* Decreased image size */}
            <img
              src={logSuccess}
              alt="Login Success"
              className="w-52 h-auto mx-auto mb-6"
            />
            <h2 className="text-xl font-bold mb-4 text-center">
              Congratulations! User Validated
            </h2>
            {/* Button for next section */}
            <div className="text-right">
              <Link
                to="/OptionsUser"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Proceed to Next 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginDash;
