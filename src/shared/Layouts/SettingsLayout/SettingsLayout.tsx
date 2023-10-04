const SettingsLayout = ({ children }) => {
  return (
    <section className="settings-layout md:ml-64">
      <div className=" max-w-screen-xl">
        <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
        <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold">Settings</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsLayout;
