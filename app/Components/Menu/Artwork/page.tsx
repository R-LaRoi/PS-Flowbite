"use client";
import React from "react";
import Nav from "../../Nav";
import Footer from "../../Footer";
import "./artwork.css";
import imgData from "../../imgData";

export default function Artwork() {
  let artImg = imgData.map((artwk, index) => {
    if (index < 10) {
      return (
        <img
          key={index}
          className=" gallery-mb max-w-l mb-8 mr-5 inline-block  h-96  rounded-lg shadow-xl"
          src={artwk?.photo}
        />
      );
    }
  });

  return (
    <>
      <Nav />
      <section className=" bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2
              className="mb-4 mt-10 pt-10  text-8xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "Smooch" }}
            >
              Artwork
            </h2>
            <p className="aw-text mb-4">
              My practice encompasses a variety of art forms including drawing,
              painting and graphic arts. Weaving technology throughout her
              process has led her to design extraordinary vibrant patterns.
            </p>
            <p></p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <img
              className="w-full rounded-lg"
              src="https://github.com/R-LaRoi/PS-Flowbite/assets/114012059/30b6aaf0-7310-4ba5-ad9d-8ee296c8ba8c"
              alt=" content 1"
            />
            <img
              className="mt-4 w-full rounded-lg lg:mt-10"
              src="https://github.com/R-LaRoi/PS-Flowbite/assets/114012059/58d8aa51-ba26-47e3-b981-20b72569f462"
              alt=" content 2"
            />
          </div>
        </div>
      </section>

      <div className="art-img-scroll">
        <div className="gap-2">
          <div className=" ">{artImg}</div>
        </div>{" "}
      </div>
      <Footer />
    </>
  );
}
