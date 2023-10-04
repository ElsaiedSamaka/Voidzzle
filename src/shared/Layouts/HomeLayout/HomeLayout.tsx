const HomeLayout = ({ children }) => {
  return (
    <section className="home-layout">
      <div className=" max-w-screen-xl">
        <h1 className="border-b py-6 text-4xl font-semibold">Home</h1>
        <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold">Home settings</h1>
              {/* <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLayout;
