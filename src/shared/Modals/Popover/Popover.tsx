import React from 'react'

const Popover = ({ content }) => {
  return (
    <div
      id="dropdown"
      className="absolute -top-20 right-20 z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow :bg-gray-700 :divide-gray-600"
    >
      {content}
    </div>
  );
};

export default Popover