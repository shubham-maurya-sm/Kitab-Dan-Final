

import React from "react";
import logo from "../../assets/logo_image/logo_kitab_dan.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center flex justify-between items-center">
        <img src={logo} alt="Left Logo" className="h-20 filter invert" />
        <div>
          <p className="text-sm">&copy; 2023-2024 Kitab Daan (An initiative for education)</p>
          <p className="text-sm mt-2">
            Designed with ❤️ 
          </p>
        </div>
        <div className="text-bold text-xs">
          <h1 className="text-yellow-200">Office Address</h1>
          <address className="mb-2 text-center">
            CCE Building, Institute of Professional Studies
           <br />
            Science-Faculty, University of Allahabad
          <br />
            Prayagraj 211002
           
          </address>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
