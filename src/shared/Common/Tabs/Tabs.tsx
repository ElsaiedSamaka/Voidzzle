import React from "react";

const Tabs = ({ items }) => {
  return (
    <div className="w-fit my-2 shadow rounded-md">
      <div className="rounded-md bg-white p-2">
        <nav className="flex flex-wrap gap-2  font-semibold">
          {items.map((item, i) => { 
            return (
               <a key={i} onClick={() => console.log(item)} className="whitespace-nowrap inline-flex rounded-md py-2 px-4 items-center  text-sm  text-gray-400 bg-gray-100  transition-all duration-200 hover:cursor-pointer ease-in-out  hover:text-gray-700 hover:shadow">{item}</a> )
          })}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;

// not active
//  <a className="whitespace-nowrap inline-flex rounded-md py-2 px-4 items-center  text-sm  text-gray-400 bg-gray-100  transition-all duration-200 hover:cursor-pointer ease-in-out  hover:text-gray-700 hover:shadow">
//    {" "}
//    Products{" "}
//  </a>;

// active
  //  <a className="whitespace-nowrap inline-flex rounded-md items-center py-2 px-4 text-sm  text-black bg-white shadow font-semibold transition-all duration-200 hover:cursor-pointer ease-in-out">
  //    {" "}
  //    Tasks{" "}
  //  </a>;