import React from "react";
import carosel from "./samsung.jpg";
const Carousel = () => {
  return (
    <div className="latest">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={carosel}  />
  <div class="carousel-caption d-none d-md-block">
    <h5>Latest smarphone</h5>
    <p>buy this before its to late</p>
  </div>
    </div>
  </div>
</div>
  </div>
     
  );
};

export default Carousel;
