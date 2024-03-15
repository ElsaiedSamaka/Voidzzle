import React from 'react';

const AnalyticsLayout = ({ children }) => {
  return (
    <section className="analytics-layout mt-10">
      <div className=" max-w-screen-2xl">
        <div className="grid pt-3 pb-10 grid-cols-10">
          <div className="col-span-10 overflow-hidden rounded-2xl bg-gray-100 px-8 mx-8 sm:shadow">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsLayout;
