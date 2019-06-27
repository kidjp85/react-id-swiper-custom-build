import React from "react";

export default ({ color, content }) => (
  <div className="swiper-slide" style={{ backgroundColor: color }}>
    <span>{content}</span>
  </div>
);
