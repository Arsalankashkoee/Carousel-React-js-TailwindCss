import React from "react";
import { useState } from "react";
import { images } from "../Components/CarouselData.js";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useEffect } from "react";

const Carousel = () => {
  const [currentImg, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      currentImg < images.length - 1
        ? setCurrentImage(currentImg + 1)
        : setCurrentImage(0);
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentImg]);

  return (
    <section className="container flex items-center justify-center h-[500px] w-screen ">
      <div className="w-full h-full">
        <div
          style={{ backgroundImage: `url(${images[currentImg].img})` }}
          className="relative h-full w-full bg-cover bg-center bg-no-repeat transition-all ease-in-out duration-1000 rounded-md overflow-hidden"
        >
          {/* bg-gradient */}
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/80"></div>

          {/* title-subtitle */}
          <div className="text-white opacity-60 flex flex-col gap-3 mb-3 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <span className="">{images[currentImg].title}</span>
            <span className="">{images[currentImg].subtitle}</span>
          </div>

          {/* circles */}
          <div className="flex absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div
              onClick={() => setCurrentImage(0)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentImg === 0 ? "opacity-100" : "opacity-40"
              }`}
            ></div>

            <div
              onClick={() => setCurrentImage(1)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentImg === 1 ? "opacity-100" : "opacity-40"
              }`}
            ></div>

            <div
              onClick={() => setCurrentImage(2)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentImg === 2 ? "opacity-100" : "opacity-40"
              }`}
            ></div>
          </div>

          {/* button-group */}
          <button
            onClick={() =>
              currentImg > 0
                ? setCurrentImage(currentImg - 1)
                : setCurrentImage(2)
            }
            className="absolute text-white left-7 top-1/2"
          >
            <BsArrowLeftCircle className="w-6 h-6 opacity-30 hover:opacity-100 transition-all ease-in-out duration-300" />
          </button>

          <button
            onClick={() =>
              currentImg < images.length - 1
                ? setCurrentImage(currentImg + 1)
                : setCurrentImage(0)
            }
            className="absolute text-white right-7  top-1/2"
          >
            <BsArrowRightCircle className="w-6 h-6 opacity-30 hover:opacity-100 transition-all ease-in-out duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
