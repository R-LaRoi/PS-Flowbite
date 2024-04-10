import React from "react";
import Nav from "../../Nav";
import "./artwork.css";
import imgData from "../../imgData";

export default function Artwork() {
  let artImg = imgData.map((artwk, index) => {
    if (index < 10) {
      return <img className=" inline-block h-screen px-5" src={artwk?.photo} />;
    }
  });

  return (
    <>
      <Nav />
      <div className="art-img-scroll">
        <div className="hide-scroll-bar flex overflow-x-scroll pb-10">
          <div className="ml-10 flex flex-nowrap px-4 ">{artImg}</div>
        </div>{" "}
      </div>
    </>
  );
}
