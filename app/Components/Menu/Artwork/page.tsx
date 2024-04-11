import React from "react";
import Nav from "../../../Nav";
import "./artwork.css";
import imgData from "../../imgData";
import { Carousel } from "flowbite-react";

export default function Artwork() {
  let artImg = imgData.map((artwk, index) => {
    if (index < 10) {
      return (
        <img
          key={index}
          className=" gallery-mb inline-block h-screen px-5"
          src={artwk?.photo}
        />
      );
    }
  });

  return (
    <>
      <Nav />
      <div className="h-96 sm:h-96 xl:h-96 2xl:h-96 ">
        <Carousel pauseOnHover>
          <img
            src="https://github.com/R-LaRoi/PS-Flowbite/assets/114012059/784b1957-0271-46a3-9a74-ab628ef08295"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="art-img-scroll">
        <div className="hide-scroll-bar flex overflow-x-scroll pb-10">
          <div className="ml-10 flex flex-nowrap px-4 ">{artImg}</div>
        </div>{" "}
      </div>
    </>
  );
}
