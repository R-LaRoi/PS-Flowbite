import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-white p-2 shadow-lg ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <span className="nav-text">Graphic Fine Art</span>

        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="nav-text mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li>
              <Link href="/Components/Menu/Artwork" className="">
                <strong className="">artwork</strong>
              </Link>
            </li>

            <li>
              <Link
                href="/Components/Menu/Contact"
                className="hover:text-rose-700"
              >
                <strong>contact</strong>
              </Link>
            </li>
            <li>
              <Link href="/">home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// <ul className="nav-links">
//             <Link href="/Components/Menu/Artwork" className="">
//               <strong className="">artwork</strong>
//             </Link>
//             <Link
//               href="/Components/Menu/Contact"
//               className="hover:text-rose-700"
//             >
//               <strong>contact</strong>
//             </Link>
//             <Link href="/">
//               <li>home</li>
//             </Link>
//           </ul>{" "}
