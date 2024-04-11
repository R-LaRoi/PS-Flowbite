import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <nav class="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="nav-text">Graphic Fine Art</span>
          </a>

          <div
            class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="nav-links">
              <Link
                href="./Components/Menu/Artwork"
                className="font-extrabold hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                <strong className="">artwork</strong>
              </Link>
              <Link
                href=""
                className="hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                <strong>contact</strong>
              </Link>
              <Link href="/">
                <li>home</li>
              </Link>
            </ul>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}

{
  /* <ul className="nav-links">
          <Link
            href="./Components/Menu/Artwork"
            className="font-extrabold hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            <strong className="">artwork</strong>
          </Link>
          <Link
            href="./Components/Menu/Contact"
            className="hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            <strong>contact</strong>
          </Link>
          <Link href="/">
            <li>home</li>
          </Link>
        </ul> */
}
