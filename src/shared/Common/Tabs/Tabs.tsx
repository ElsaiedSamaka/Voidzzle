import { TabContext, useTabContext } from "core/context/TabContext";
import React, { useContext } from "react";

const Tabs = ({ items }) => {
  const { state, selectTab } = useTabContext();
  const { selectedTabIndex } = state;
  const handleTabClick = (id) => {
    selectTab(id);
  };
  return (
    <div className="w-fit my-2 shadow rounded-md">
      <div className="rounded-md bg-white p-2">
        <nav className="flex flex-wrap gap-2  font-semibold">
          {items.map((item, i) => {
            return (
              <a
                key={i}
                onClick={() => handleTabClick(item.id)}
                className={`whitespace-nowrap inline-flex rounded-md py-2 px-4 items-center text-sm ${
                  item.id === selectedTabIndex
                    ? "text-gray-700 bg-white shadow"
                    : "text-gray-400 bg-gray-100"
                } transition-all duration-200 hover:cursor-pointer ease-in-out hover:text-gray-700 hover:shadow`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
