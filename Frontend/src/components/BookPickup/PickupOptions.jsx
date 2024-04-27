


import React, { useState } from "react";
import { Link} from "react-router-dom";
import arrow from '../../assets/img/arrow.png'

function PickupContainer() {
  // State to track which option is selected
  const [selectedOption, setSelectedOption] = useState("Free pickup");

  // Content for each option
  const content = {
    "Free pickup": (
      <div className="container mx-auto p-4">
        <div className="py-3 text-xl text-center text-red-500">
          All the logistics charges for book collection will be taken care of by
          Kitab Daan for upto 5 km only in city itself.
        </div>
        {/* First row */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 1</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree_pickup_img1.aaa9db37.png&w=640&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Fill up the Book donation form.
              </span>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Share images of books through WhatsApp (+91 81xxx xxx48)
              </span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 2</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree_pickup_img2.f533328c.png&w=384&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                We will contact you one day before the pickup date.
              </span>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 3</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree_pickup_img3.33dd585d.png&w=256&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                We will try to doorstep pickup twice in week only
              </span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 4</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree_pickup_img4.1acec29f.png&w=384&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Handover boxes at your doorstep.
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          We arrange Free pickups on a First come, First serve basis.
        </div>
        <div className="text-right py-3">
          <Link
            to="/signUp"
            className="inline-block bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Proceed to Next
          </Link>
        </div>
      </div>
    ),
    "Self Drop": (
      <div className="container mx-auto p-4">
        <div className="py-3 text-xl text-center text-red-500">
          All logistics-related expenses are to be taken care of by Book Donors
          only.
        </div>
        {/* First row */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 1</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fself_ship_img1.7b9c71d6.png&w=256&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Fill up the Book donation form.
              </span>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Note the donation form number for future reference
              </span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 2</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fself_ship_img2.f446933c.png&w=96&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">Pack your books</span>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Write the donation form id on each packet
              </span>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 3</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fself_ship_img3.9151cabf.png&w=256&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Share shipment details after dispatch
              </span>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Like The number of boxes/tracking number /courier company name.
              </span>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                It helps to track your package during transit.
              </span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 4</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fself_ship_img4.f123b0d6.png&w=64&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                We will notify you once we receive the package at our office
                address.
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          We arrange Free pickups on a First come, First serve basis.
        </div>
        <div className="text-right py-3">
          <Link
            to="/signUp"
            className="inline-block bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Proceed to Next
          </Link>
        </div>
      </div>
    ),
    "Pay for pickup": (
      <div className="container mx-auto p-4 ">
        <div className="py-3 text-xl text-center text-red-500">
          Pay subsidised standard pickup charges for books pickup
        </div>
        {/* First row */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 1</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaid_pickup_img1.dac47776.svg&w=256&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Fill up the Book donation form.
              </span>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Pay subsidised standard pickup charges at the time of filling
                the donation form
              </span>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Share images of books through WhatsApp (+91 81xxx xxx48)
              </span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 2</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaid_pickup_img2.3f9c43a9.svg&w=256&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Pack your books and share packed box images
              </span>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                So that we can arrange courier booking and send tracking slips
              </span>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 3</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaid_pickup_img3.355c1692.svg&w=256&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">Take print out</span>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Paste tracking slip on your box
              </span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-center mt-2 justify-center">
              <b className="">STEP : 4</b>
            </div>
            <img
              src="https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaid_pickup_img4.1e283f09.svg&w=256&q=75"
              alt=""
              className="mx-auto h-20"
            />
            <div className="mt-6 flex items-center justify-center">
              <img src={arrow} alt="" className="w-4 h-4 mr-2" />
              <span className="block text-center">
                Handover boxes to pickup person Who arrives at your doorstep.
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          Paid pickups are arranged on priority basis keeping book donor urgency
          in mind via our logistics partner only .
        </div>
        <div className="text-right py-3">
          <Link
            to="/signUp"
            className="inline-block bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Proceed to Next
          </Link>
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-gray-200 p-4 sm:p-10">
      {/* Buttons for different pickup options */}

      <h2 className="text-xl font-bold mb-4 py-9 text-center">
        Available Pickup Methods
      </h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded-md focus:outline-none ${
            selectedOption === "Free pickup"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedOption("Free pickup")}
        >
          Free Pickup
        </button>
        <button
          className={`py-2 px-4 rounded-md focus:outline-none ${
            selectedOption === "Self Drop"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedOption("Self Drop")}
        >
          Self Drop/Ship your book @ Office/NGO
        </button>
        <button
          className={`py-2 px-4 rounded-md focus:outline-none ${
            selectedOption === "Pay for pickup"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedOption("Pay for pickup")}
        >
          Pay for Pickup
        </button>
      </div>
      {/* Container to display selected content */}
      <div className="border border-gray-600 p-4">
        <div></div>
        {content[selectedOption]}
      </div>
    </div>
  );
}

export default PickupContainer;

