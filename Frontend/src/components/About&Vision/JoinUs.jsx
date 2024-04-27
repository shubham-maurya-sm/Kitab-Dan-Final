import React from "react";
import { Link } from "react-router-dom";
import JoinUsImage from "../../assets/img/joinUs.png";

function JoinUs() {
  return (
    <div className="flex flex-col items-center justify-center bg-teal-200">
      <div className="mt-8">
        <img src={JoinUsImage} alt="join us" className="mx-auto" />
      </div>
      <div>
        <section className="container mx-auto px-4">
          <div className="specialoffer">
            <h2 className="text-center text-2xl font-bold">
              BY SUPPORTING OUR WORK
            </h2>
            <h6 className="text-center">
              Your support is vital to our work at "Kitab Dan Organization".
              There are many ways you can contribute towards our activities, and
              every little bit that you commit goes a long way in helping us
              fulfill our mission. Learn more about how you can get involved by
              exploring the opportunities below.
            </h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 text-lg text-center">
              <div className="card bg-white ">
                <img
                  src="https://www.harvesters.org/wp-content/uploads/2021/09/Spread-The-Word.jpg"
                  className="card-img-top h-64 object-cover mx-auto "
                  alt="Spread The Words"
                />
                <div className="card-body">
                  <h5 className="card-title">SPREAD THE WORDS</h5>
                  <p className="card-text">Join Our Efforts</p>
                </div>
              </div>
              <div className="card  bg-white">
                <img
                  src="https://blog.hubspot.com/hs-fs/hubfs/nonprofit-fundraising-2.jpg?width=893&height=600&name=nonprofit-fundraising-2.jpg"
                  className="card-img-top h-64 object-cover mx-auto"
                  alt="Non-Profit Fundraise"
                />
                <div className="card-body">
                  <h5 className="card-title">NON-PROFIT FUNDRAISE</h5>
                  <p className="card-text">You Can Make a Difference</p>
                </div>
              </div>
              <div className="card  bg-white">
                <img
                  src="https://startupsmagazine.co.uk/sites/default/files/2023-05/pr.png"
                  className="card-img-top h-64 object-cover mx-auto"
                  alt="Raise Awareness"
                />
                <div className="card-body">
                  <h5 className="card-title">RAISE AWARENESS</h5>
                  <p className="card-text">Become an Active Member</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h1 className="text-4xl font-bold text-center">Register Yourself</h1>
        <div className="flex justify-center mt-4 py-5">
          <Link
            to="/signUp"
            className="btn btn-primary border border-gray-800 hover:bg-gray-800 hover:text-white text-2xl bg-pink-500 hover:bg-blue-700"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
