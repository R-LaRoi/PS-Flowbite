"use client";
import React from "react";
import Nav from "../Nav";
import { Carousel } from "flowbite-react";

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
                    <div className="name">PAT STROY</div>
                    <div className="sub-text">
                      Visual Artist | Graphic Designer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="grid grid-cols-3 gap-8 p-8 ">
          <div>
            <img class="" src="https://i.postimg.cc/JhSTVqyr/2.png" alt="" />
          </div>
          <div>
            <img class="" src="https://i.postimg.cc/d3Y4DVmg/9.png" alt="" />
          </div>
          <div>
            <img class="" src="https://i.postimg.cc/d3Y4DVmg/9.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
