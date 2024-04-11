"use client";
import React from "react";
import Nav from "./Nav";
import { Carousel } from "flowbite-react";
import Footer from "./Footer";
import Link from "next/link";

{
  /* <img src="https://i.postimg.cc/JhSTVqyr/2.png"></img>;
<img src="https://i.postimg.cc/d3Y4DVmg/9.png" alt="" />; */
}

export default function Hero() {
  return (
    <>
      <Nav />
      <section className="hero h-screen ">
        <div className="">
          <div className="background-radial-gradient mb-32 text-center lg:text-left">
            <div className="relative h-screen overflow-hidden bg-[url('https://github.com/R-LaRoi/PS-Flowbite/assets/114012059/d11f341c-f0cd-456e-94df-10c6b1152106')] bg-cover bg-[50%] bg-no-repeat">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.45)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                  <div className="header-text text-center">
                    Graphic Fine Art
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2
              className="mb-4 text-8xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "Smooch" }}
            >
              Pat Stroy
            </h2>

            <div className="sub-text"> Artist | Graphic Designer</div>
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

      <section>
        <div className="grid grid-cols-3 gap-8 p-8 ">
          <div>
            <img
              className=""
              src="https://i.postimg.cc/JhSTVqyr/2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className=""
              src="https://i.postimg.cc/d3Y4DVmg/9.png"
              alt=""
            />
          </div>
          <div>
            <img
              className=""
              src="https://i.postimg.cc/d3Y4DVmg/9.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
