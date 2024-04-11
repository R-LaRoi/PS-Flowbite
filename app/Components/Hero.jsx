import React from "react";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex max-w-screen-xl flex-wrap  justify-between">
        <span className="whitespace-nowrapfont-semibold header-text  self-center dark:text-white">
          PS DESIGNS
        </span>
      </div>

      <section className="hero h-screen ">
        <div className="mb-hero">
          <div className="background-radial-gradient mb-32 text-center lg:text-left">
            <div className="relative h-screen overflow-hidden bg-[url('https://i.postimg.cc/JhSTVqyr/2.png')] bg-cover bg-[50%] bg-no-repeat">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.50)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                  <div className="max-w-[800px] px-6 py-6 text-center text-white md:px-12 md:py-0">
                    <h2 className="mb-header mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                      PS DESIGNS
                    </h2>
                    <span className="name">PATRICIA STROY</span>
                    <ul className="sidebar-links ">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-with-sidebars ">
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
