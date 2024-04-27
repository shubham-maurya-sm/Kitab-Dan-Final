import React from "react";
import img from "../../assets/img/about-us.png";
import aboutImg1 from "../../assets/img/about-img1.jpg";
import aboutImg2 from "../../assets/img/about-img2.jpg";
import aboutImg3 from "../../assets/img/about-img3.jpg";
import aboutUs from "../../assets/img/aboutUs.jpg";
// import WhatWork from "./WhatWork";
import JoinUs from "./JoinUs";
import Vision from "./Vision";

export default function AboutUs() {
  return (
    <div className="py-9">
      <section className="container mx-auto mt-5 mb-0 stackSection ">
        <div className="grid">
          {/* <img src={aboutUs} alt="about-us" /> */}
          <div
            className="items-center justify-center py-1 mx-4"
            style={{
              backgroundImage: `url(${aboutUs})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              filter: "contrast(100%)",
              height: "20vh",
            }}
          ></div>
          <div className="md:grid md:grid-cols-2 gap-4 mx-5 mb-5">
            <div className="md:flex md:flex-col md:space-y-4 md:pr-4 stacktext text-lg">
              <p >
                One of the most meaningful ways a donation can help is by
                providing a person with the opportunity to study. They can use
                this knowledge to advance their lives, thus you will have a hand
                in making someone’s life better, if not completely different.
                Additionally, it provides a way out for people who live in
                underprivileged homes and the ability to bring much-needed
                happiness and satisfaction. In either case, you’ll be giving
                someone something far more important than money or things that
                enhance their appearance while giving books to someone who
                strengthens from the inside.
              </p>
              <p>
                It is hard for us to help everyone right away, but donating
                books to poor children is something we can do that will go a
                long way toward educating underprivileged children. After all,
                knowledge that is shared is the knowledge that is squared, and
                books are the medium for doing this successfully.
              </p>
              <p>
                While millions of children in India cannot afford the books they
                want to read, some privileged individuals have the same books on
                their shelves – books they have previously read.
              </p>
            </div>
            <div className="md:flex md:flex-col md:space-y-4">
              <div className="md:flex md:space-x-4 stack">
                <div className="md:flex-grow">
                  <img src={aboutImg1} className="w-full" alt="s" />
                </div>
                <div className="md:flex-grow">
                  <img src={aboutImg2} className="w-full" alt="s" />
                </div>
                <div className="md:flex-grow">
                  <img src={aboutImg3} className="w-full" alt="a" />
                </div>
              </div>
            </div>
          </div>
          <Vision/>
        </div>
        
        <JoinUs/>
        <br />
        <br />
      </section>
      {/* <WhatWork/> */}
    </div>
  );
}
