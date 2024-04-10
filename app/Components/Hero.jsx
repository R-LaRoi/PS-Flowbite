import React from "react";
import Nav from "./Nav";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex max-w-screen-xl flex-wrap  justify-between">
        <span className="whitespace-nowrapfont-semibold header-text self-center dark:text-white">
          PS DESIGNS
        </span>
      </div>
      <section className="hero h-screen">
        <div className="content-with-sidebars">
          <div className="hero-col-1">
            <ul className="sidebar-links">
              <li>
                Visual Artist + <br /> Graphic Designer
              </li>
              <br />
              <br />
              <li>
                <Link
                  href="./Components/Menu/Artwork"
                  className="font-extrabold hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  <strong className="">artwork</strong>
                </Link>
              </li>
              <br />
              <li>
                <Link
                  href="./Components/Menu/Contact"
                  className="hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  <strong>contact</strong>
                </Link>
              </li>
            </ul>{" "}
          </div>
          <div className="hero-left-sidebar">
            {" "}
            <img src="https://i.postimg.cc/JhSTVqyr/2.png"></img>
          </div>
          <div className="hero-col-3">
            <img src="https://i.postimg.cc/d3Y4DVmg/9.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
