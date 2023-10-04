const HomeLayout = ({ children }) => {
  return (
    <section className="home-layout p-2 bg-purple-500">
      <div className=" max-w-screen-2xl ">
        <h1 className=" py-2 text-4xl font-semibold">Home Layout is purble</h1>
        <div className="grid grid-cols-8 pt-3 pb-10 w-full">
          <div className="col-span-8 rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold">
                Home Container is white
              </h1>
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
