import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Graphic Fine Art
            </a>
            . All Rights Reserved.
          </span>
          <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                href="/Menu/Contact"
                className="me-4 hover:underline md:me-6"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
