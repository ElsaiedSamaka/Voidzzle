const SettingsLayout = ({ children }) => {
  return (
    <section className="settings-layout md:ml-64">
      <div className=" max-w-screen-2xl">
        <div className="grid pt-3 pb-10 grid-cols-10">
          <div className="col-span-10 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsLayout;
