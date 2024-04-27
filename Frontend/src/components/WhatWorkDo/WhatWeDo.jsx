import React from "react";
import bookReceived from "../../assets/img/bookReceived.svg";
import assuredBooksWebsite from "../../assets/img/assuredBooksWebsite.webp";
import storeNmaintain from "../../assets/img/storeNmaintain.webp";
import shipBooks from "../../assets/img/shipBooks.webp";

function WhatWedo() {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-8">
      <h1 className="text-2xl text-center font-bold py-5 bg-green-200">
        What Kitab Dan Do?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-2 rounded-lg">
          <img src={bookReceived} alt="" className="mx-auto h-52" />
          <span className="block text-center">
            Kitab Dan receives the books and does quality checks
          </span>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg">
          <img src={assuredBooksWebsite} alt="" className="mx-auto h-52" />
          <span className="block text-center">
            Assured books are listed on the website
          </span>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg">
          <img src={storeNmaintain} alt="" className="mx-auto h-52" />
          <span className="block text-center">
            Storing & maintaining the book's quality
          </span>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg">
          <img src={shipBooks} alt="" className="mx-auto h-52" />
          <span className="block text-center">
            Shipping books to reader's doorstep
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhatWedo;
