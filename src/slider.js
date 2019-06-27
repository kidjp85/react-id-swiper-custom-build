import React, { useState, useEffect } from "react";
import ReactIdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
import {
  Swiper,
  Navigation,
  Pagination
} from "swiper/dist/js/swiper.esm";
import generateData from "./data";
import SlideItem from "./slideItem";

export default () => {
  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Slides current index
  const [currentIndex, updateCurrentIndex] = useState(0);
  // Params definition
  const params = {
    Swiper,
    modules: [Navigation, Pagination],
    initialSlide: 3,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    getSwiper: updateSwiper // Get swiper instance callback
  };

  // Manipulate swiper from outside
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const renderItem = ({ idx, color, content }) => (
    <SlideItem color={color} content={content} key={`slide_${idx}`} />
  );

  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    if (swiper !== null) {
      swiper.on("slideChange", () => updateCurrentIndex(swiper.realIndex));
    }

    return () => {
      if (swiper !== null) {
        swiper.off("slideChange", () => updateCurrentIndex(swiper.realIndex));
      }
    };
  }, [swiper]);

  return (
    <div>
      <ReactIdSwiper {...params}>
        {generateData().map(renderItem)}
      </ReactIdSwiper>
      <div className="buttons buttons-list">
        <button className="button is-primary" onClick={goPrev}>
          Prev
        </button>
        <button className="button is-primary" onClick={goNext}>
          Next
        </button>
      </div>
      <h3 className="subtitle">
        Current slide index is <strong>{currentIndex}</strong>
      </h3>
    </div>
  );
};
