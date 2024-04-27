import React from "react";
import fillForm from "../../assets/img/fillForm.jpg";
import getBookReady from "../../assets/img/getBookReady.jpg";
import takePrint from "../../assets/img/takePrint.jpg";
import handoverBook from "../../assets/img/handoverBook.jpg";

function WhatUdo() {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-8">
      <h1 className="text-2xl text-center font-bold py-5 bg-green-200">
        What User's Do?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src={fillForm} alt="" className="mx-auto h-52" />
          <span className="block text-center">
            Fill up the Book donation form.
          </span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src={getBookReady} alt="" className="mx-auto h-52" />
          <span className="block text-center">
            Get the books ready and packed
          </span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src={takePrint} alt="" className="mx-auto h-52" />
          <span className="block text-center">
            Take the Print outs (Tracking Slip)
          </span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src={handoverBook} alt="" className="mx-auto h-52" />
          <span className="block text-center">
            Handover books to Pickup Partner at the doorstep
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhatUdo;
