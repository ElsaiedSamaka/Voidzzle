import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <section className="home-layout p-2  w-full">
      <div className="home-content w-full p-2  mt-20">{children}</div>
    </section>
  );
};

export default ProfileLayout;
