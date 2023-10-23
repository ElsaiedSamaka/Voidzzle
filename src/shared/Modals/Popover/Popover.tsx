import React from 'react'

const Popover = ({ content }) => {
  return (
    <div
      id="dropdown"
      className="absolute top-10 right-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow :bg-gray-700 :divide-gray-600"
    >
    {content}
    </div>
  );
};

export default Popover