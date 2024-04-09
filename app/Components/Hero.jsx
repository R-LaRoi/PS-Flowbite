import React from "react";
import Nav from "./Nav";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Nav />
      <section className="hero">
        <div className="content-with-sidebars">
          <div className="hero-col-1">
            <ul className="sidebar-links">
              <li>
                Visual Artist + <br /> Graphic Designer
              </li>
              <br />
              <li>
                <Link
                  href="./Components/Menu/Artwork"
                  className=" hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Artwork
                </Link>
              </li>
              <li>
                <Link
                  href="./Components/Menu/Contact"
                  className="hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Contact
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
