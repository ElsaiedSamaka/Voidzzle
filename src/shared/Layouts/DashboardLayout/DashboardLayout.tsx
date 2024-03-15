import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <section className="innova-layout mt-5 h-full">
      <div className=" max-w-screen-2xl">
        <div className="grid pt-3 pb-10 grid-cols-10">
          <div className="col-span-10 overflow-hidden mx-8  ">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
