import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="--nav">
      <div className="nav-mb flex max-w-screen-xl flex-wrap justify-between ">
        <span className="whitespace-nowrapfont-semibold nself-center dark:text-white">
          PS DESIGNS
        </span>
        <ul className="nav-links">
          <Link href="./Artwork">
            <li>artwork</li>
          </Link>
          <Link href="./Contact">
            <li>contact</li>
          </Link>
          <Link href="/">
            <li>home</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
