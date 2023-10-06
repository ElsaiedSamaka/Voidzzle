import React from "react";
import { Card } from "shared";

const Grid = () => {
  return (
    <div>
      <ul className="grid grid-cols-4 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-3 pb-10 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <div className="flex justify-center">
        {/* Previous Button */}
        <a className="flex items-center justify-center space-x-1 px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:cursor-pointer hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Load more
        </a>
      </div>
    </div>
  );
};

export default Grid;
