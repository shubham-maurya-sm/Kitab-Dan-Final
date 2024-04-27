import React, { useState, useEffect } from "react";
import slideImg1 from "../../assets/img/corousel1.jpg";
import slideImg2 from "../../assets/img/corousel2.jpg";
import slideImg3 from "../../assets/img/corousel3.png";
import slideImg4 from "../../assets/img/corousel4.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  const imageSources = [
    {
      image: slideImg1,
      title: "DONATE A BOOK AND LEAVE A LEGACY !",
      text: "You can’t buy love, but you can donate a book and save someone’s life.",
    },
    {
      image: slideImg2,
      title: "DONATE BOOKS, FILL HEARTS !",
      text: "Don’t donate money to charity. Instead, donate a book. A book is an investment that lasts forever. No matter your age or circumstances, everyone deserves the gift of knowledge.",
    },
    {
      image: slideImg3,
      title: "BOOKS CONNECT US ALL !",
      text: "Books are gifts that keep on giving. Give the gift of literacy today.",
    },
    {
      image: slideImg4,
      title: "EVERY BOOK DONATION COUNTS !",
      text: "The best way to spread kindness is by giving books. It’s like a one-stop shop for happiness.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      {/* Carousel indicators */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        {imageSources.map((_, index) => (
          <button
            key={index}
            type="button"
            data-twe-target="#carouselExampleCaptions"
            data-twe-slide-to={index}
            data-twe-carousel-active={currentSlide === index}
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current={currentSlide === index ? "true" : undefined}
            // aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative overflow-hidden after:clear-both after:block after:content-['']">
        {imageSources.map((item, index) => (
          <div
            key={index}
            className={`relative ${
              currentSlide === index ? "" : "hidden"
            } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
            data-twe-carousel-active={currentSlide === index}
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={item.image}
              className="block w-full"
              alt={`Slide ${index + 1}`}
              style={{ height: "500px" }}
            />
            {/* <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 py-5 text-center text-white md:hidden ">
              <h5 className="text-3xl">{item.title}</h5>
              <p>{item.text}</p>
            </div> */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-5">
              <h5 className="text-3xl text-white text-center ">{item.title}</h5>
              <p className="text-white text-center py-5">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev"
        onClick={handlePrevClick}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next"
        onClick={handleNextClick}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;
