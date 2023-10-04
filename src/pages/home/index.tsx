import { CarouselControlsInside, HomeLayout, RootLayout } from "shared";

const Home = () => {
  return (
    <section className="bg-yellow-300 p-2">
      {/* filteration card */}
      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 mb-2">
          <form className="">
            <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
              <svg
                className="absolute left-2 block h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} className="" />
                <line x1={21} y1={21} x2="16.65" y2="16.65" className="" />
              </svg>
              <input
                type="name"
                name="search"
                className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search by name, type, manufacturer, etc"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-stone-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Raspberry juice"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Manufacturer
                </label>
                <select
                  id="manufacturer"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>Cadberry</option>
                  <option>Starbucks</option>
                  <option>Hilti</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-stone-600"
                >
                  Date of Entry
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="status"
                  className="text-sm font-medium text-stone-600"
                >
                  Status
                </label>
                <select
                  id="status"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>Dispached Out</option>
                  <option>In Warehouse</option>
                  <option>Being Brought In</option>
                </select>
              </div>
            </div>
            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                Reset
              </button>
              <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* filteration card */}
      {/* products grid */}
      <div className="bg-white rounded-xl border">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </a>
            <a className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>
            <a className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </a>
            <a className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>
            {/* More products... */}
          </div>
        </div>
      </div>
      {/* products grid */}
      {/* infinite carousel */}
      {/* <InfiniteCarousel /> */}
      {/* infinite carousel */}
      {/* controls */}
      <CarouselControlsInside />
      {/* controls */}
    </section>
  );
};
Home.getLayout = (page) => {
  console.log("Home.getLayout");
  return (
    <RootLayout>
      <HomeLayout>{page}</HomeLayout>
    </RootLayout>
  );
};

export default Home;
