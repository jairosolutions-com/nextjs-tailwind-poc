/* eslint-disable @next/next/no-img-element */
import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-8 py-4 bg-white items-center shadow-md fixed w-full top-0 z-10">
      <button aria-label="navigation toggle button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 fill-current text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="ml-4">
        <a href="/">
          <img className="h-8 w-full" src="/assets/svg/gh-logo.svg" alt="" />
        </a>
      </div>
      <div className="flex-1 ml-4">
        <div className="relative flex items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            className="px-8 pr-36 py-2.5 w-full block flex-auto border-gray-200 rounded-full focus:border-gray-400 focus:ring-0 text-sm text-gray-500 placeholder:text-gray-400"
            type="text"
            placeholder="Search by patient's first or last name"
          />
          <button className="absolute top-1/2 transform -translate-y-1/2 right-1.5 text-xs bg-slate-200 px-4 py-2 rounded-full text-gray-600">
            Advanced Search
          </button>
        </div>
      </div>

      <div className="ml-8">
        <button className="px-2 py-1 border border-amber-500 rounded-full text-amber-500 flex text-xs items-center hover:bg-amber-500 hover:text-white">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </span>
          Help
        </button>
      </div>
    </div>
  );
};

export default Navbar;
