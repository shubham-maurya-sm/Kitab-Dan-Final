import React from "react";
import {Link} from 'react-router-dom'
import arrow from "../../assets/img/arrow.png";
import whyDonate from "../../assets/img/whyDonate.jpg";
import DidUKnow from "../../assets/img/DidUKnow.jpg";

const DonateNKnow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };
  return (
    <div className="container mx-auto px-4 lg:px-0 py-8 border border-black rounded-md">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4 mb-6 lg:mb-0 bg-green-100 border border-black">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-center border border-black">
            Why to donate?
          </h2>
          <div>
            <h3 className="text-center font-semibold">
              "Knowledge increases by sharing, but not saving"
            </h3>
          </div>

          <div className="px-8 py-7">
            <ul className="text-gray-700">
              <li className="mb-2 flex items-start ">
                <img src={arrow} alt="1." className="w-4 h-4 mr-2 mt-1" />
                <span>
                  Books are uniquely portable magic that carries your attached
                  feelings forward.
                </span>
              </li>

              <li className="mb-2 flex items-start ">
                <img src={arrow} alt="1." className="w-4 h-4 mr-2 mt-1" />
                <span>
                  Your books can help someone in the same way they did for you.
                </span>
              </li>
              <li className="mb-2 flex items-start ">
                <img src={arrow} alt="1." className="w-4 h-4 mr-2 mt-1" />
                <span>
                  We are committed to carrying your emotions with your books and
                  making them grow older!
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <img src={arrow} alt="1." className="w-4 h-4 mr-2 mt-1" />
                <span>
                  Let's become a cause for change & make a difference.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center font-semibold">
              Let's Educate Together & Rise Together!
            </h3>
          </div>
          <img src={whyDonate} alt="Why to Donate" className="h-80 mx-auto " />
        </div>
        <div className="lg:w-1/2 lg:pl-4 bg-green-100 border border-black">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-center border border-black">
            Did you know?
          </h2>
          <div className="px-8 py-8">
            <ul className="text-gray-700">
              <li className="mb-2 flex items-start ">
                <img src={arrow} alt="1." className="w-4 h-4 mr-2 mt-1" />
                <span>
                  By donating (30 books), you will help to reduce 85kg of
                  carbon-footprint
                </span>
              </li>

              <li className="mb-2 flex items-start">
                <img src={arrow} alt="1." className="w-4 h-4 mr-2 mt-1" />
                <span>A ton of recycled paper saves 17 Trees</span>
              </li>
              <li className="mb-2 flex items-start border-b">
                <img src={arrow} alt="1." className="w-4 h-4 mr-2 mt-1" />
                <span>
                  In 1993, U.S. paper recovery saved more than 90,000,000 cubic
                  yards of landfill space. It's our turn in India.
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <img src={arrow} alt="1." className="w-4 h-4 mr-2 mt-1" />
                <span>
                  Some people cannot access books. They can get books at FREE OF
                  COST anywhere across India.
                </span>
              </li>
            </ul>
          </div>
          <div className="py-10">
            <img src={DidUKnow} alt="Did You Know" className="h-80 mx-auto " />
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Link
          to="/city-available"
          className="inline-block bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          Donate Your Loved One's
        </Link>
      </div>
      {/* <div className="ml-10 mr-10 md:(ml-40 mr-40) py-6">
        <button
          className="w-full outline-none bg-blue-600 text-white text-3xl font-semibold "
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      </div> */}
    </div>
  );
};

export default DonateNKnow;
