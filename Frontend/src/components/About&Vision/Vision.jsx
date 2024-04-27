import React from "react";
import img from "../../assets/img/vision-background.png";
import visionImage from "../../assets/img/vision-img.png";
import visionImage1 from "../../assets/img/visions-img.jpg";
import visionImage2 from "../../assets/img/visions-img2.jpg";
import visionImage3 from "../../assets/img/visions-img3.jpg";

export default function Vision() {
  return (
    <div
      className="bg-cover bg-center px-9"
      style={{
        backgroundImage: `url(${img})`,
        filter: "contrast(100%)",
        backgroundColor: "rgba(255, 255, 255, 0)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "120%",
        backgroundPosition: "center",
      }}
    >
      <section className="container mt-5 mb-0 stackSection">
        <div
          className="items-center justify-center py-1"
          style={{
            backgroundImage: `url(${visionImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            filter: "contrast(100%)",
            height: "12vh",
          }}
        ></div>
        <div className="grid py-2">
          <div className="md:grid md:grid-cols-2 gap-4">
            <div className="stack md:col-span-1">
              <div className="col grow">
                <img src={visionImage1} className="w-full" alt="s" />
              </div>
              <div className="col shadow">
                <img src={visionImage2} className="w-full" alt="s" />
              </div>
              <div className="col dim">
                <img src={visionImage3} className="w-full" alt="a" />
              </div>
            </div>
            <div className="col-span-1 stacktext ">
              <ol className="list-decimal mx-9 text-wrap text-bold">
                <li>To be accessible to every individual who needs books.</li>
                <li>
                  To provide books to underprivileged persons who cannot afford
                  them.
                </li>
                <li>
                  To collect books from as many people as possible and give them
                  a chance to be a part of this initiative.
                </li>
                <li>
                  To make people aware of how important and valuable their
                  contribution is towards society.
                </li>
                <li>
                  Since it is a donation program that aims to encourage people
                  to lend a helping hand to the needy.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
