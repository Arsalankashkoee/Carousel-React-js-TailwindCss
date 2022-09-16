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
    <section className="container flex items-center justify-center h-[500px] w-screen">
      <div className="carousel w-full h-full  bg-slate-900">
        <div
          style={{ backgroundImage: `url(${images[currentImg].img})` }}
          className="carouselInner relative h-full w-full bg-cover bg-center bg-no-repeat flex"
        >
          {/* bg-gradient */}
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/80"></div>

          {/* title-subtitle */}
          <div className="text-white absolute bottom-11 left-1/2 opacity-60 flex flex-col items-center gap-3">
            <span className="">{images[currentImg].title}</span>
            <span className="">{images[currentImg].subtitle}</span>
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
