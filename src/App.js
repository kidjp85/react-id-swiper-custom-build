import React from "react";
import Slider from "./slider";
import "react-id-swiper/lib/styles/scss/swiper.scss";
import "./styles.scss";

export default () => (
  <div className="App">
    <section className="section">
      <div className="container header">
        <h1 className="title">React Id Swiper DEMO</h1>
        <h3 className="subtitle">Please reproduce your issues here!!!!</h3>
      </div>
      <div className="container">
        <Slider />
      </div>
    </section>
  </div>
);
