import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import {  useState } from "react"

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentIMG, setIMG] = useState(0);

  const imagesSize = images.length;
  /* You will need to hanle the click on left and right button */
  function leftClick() {
    setIMG((currentIMG) => (currentIMG === 0? imagesSize - 1 : currentIMG - 1));
  }
  function rightClick() {
     setIMG((currentIMG) => (currentIMG === imagesSize - 1? 0 : currentIMG + 1));
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={leftClick}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentIMG].src} alt={images[currentIMG].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={rightClick}/>
    </div>
  );
};
