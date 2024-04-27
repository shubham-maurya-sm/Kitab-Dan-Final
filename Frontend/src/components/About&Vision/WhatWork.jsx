import React from "react";
import whatWorkImg1 from "../../assets/img/pickup.jpg";
import whatWorkImg2 from "../../assets/img/sorting.jpg";
import whatWorkImg3 from "../../assets/img/giving.jpg";

export default function WhatWork() {
  return (
    <div>
      <section className="container mx-auto px-4 bg-lime-200 ">
        <div className="specialoffer">
          <h2 className="text-center font-bold text-2xl">What do we do</h2>
          <h1 className="text-center font-bold text-4xl">
            Be the reason of someone's smile
          </h1>
          <h6 className="text-center">
            Well, we are just trying to make the world a better place.
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="card">
              <img src={whatWorkImg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">#Pickup</h5>
                <p className="card-text">
                  Collecting books from those who want to support the
                  underprivileged people who cannot afford to buy books.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={whatWorkImg2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">#Sorting</h5>
                <p className="card-text">
                  Recycling those that are worn out/torn/not in good shape.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={whatWorkImg3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">#Giving Away</h5>
                <p className="card-text">
                  Curriculum-based books to the children and other literary
                  material to the grown-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
