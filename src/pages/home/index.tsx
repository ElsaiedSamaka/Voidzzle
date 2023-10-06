import { useState } from "react";
import { CarouselControlsInside,CarouselTestimonial, Footer, HomeLayout, RootLayout } from "shared";
import classnames from "classnames";
const Home = () => {
  const [showSellOptions, toggleSellOptions] = useState(false);
  return (
    <section className=" p-2">
      {/* <CarouselTestimonial /> */}
      {/* filteration card */}
      <div className="flex flex-col mb-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 mb-2">
          <span className="font-semibold text-xl mb-2">
            reach your wanted products flash fast ⚡
          </span>
          <form className="mt-2">
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
      {/* infinite carousel */}
      {/* <InfiniteCarousel /> */}
      {/* infinite carousel */}
      {/* controls */}
      <CarouselControlsInside title="Deals of the day" />
      {/* controls */}
      {/* sell */}
      <div>
        <div data-dial-init className="fixed bottom-6 right-6 group">
          <div
            id="speed-dial-menu-text-outside-button-square"
            className={classnames(
              "flex flex-col items-center  mb-4 space-y-2 transition-all duration-300",
              { hidden: !showSellOptions }
            )}
          >
            <button
              type="button"
              className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 :border-gray-600 shadow-sm :hover:text-white :text-gray-400 hover:bg-gray-50 :bg-gray-700 :hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none :focus:ring-gray-400"
            >
              <svg
                className="w-5 h-5 mx-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
              </svg>
            </button>
            <button
              type="button"
              className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 :border-gray-600 hover:text-gray-900 shadow-sm :hover:text-white :text-gray-400 hover:bg-gray-50 :bg-gray-700 :hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none :focus:ring-gray-400"
            >
              <svg
                className="w-5 h-5 mx-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z" />
                <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z" />
              </svg>
            </button>
            <button
              type="button"
              className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 :border-gray-600 hover:text-gray-900 shadow-sm :hover:text-white :text-gray-400 hover:bg-gray-50 :bg-gray-700 :hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none :focus:ring-gray-400"
            >
              <svg
                className="w-5 h-5 mx-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
            </button>
            <button
              type="button"
              className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 :border-gray-600 hover:text-gray-900 shadow-sm :hover:text-white :text-gray-400 hover:bg-gray-50 :bg-gray-700 :hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none :focus:ring-gray-400"
            >
              <svg
                className="w-5 h-5 mx-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z" />
                <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z" />
              </svg>
            </button>
          </div>
          <button
            onMouseEnter={() => {
              toggleSellOptions(true);
            }}
            onMouseLeave={() => {
              toggleSellOptions(false);
            }}
            type="button"
            data-dial-toggle="speed-dial-menu-text-outside-button-square"
            aria-controls="speed-dial-menu-text-outside-button-square"
            aria-expanded="false"
            className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 :bg-blue-600 :hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none :focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">Open actions menu</span>
          </button>
        </div>
      </div>

      {/* footer */}
      <Footer />
      {/* footer */}
    </section>
  );
};
Home.getLayout = (page) => {
  return (
    <RootLayout>
      <HomeLayout>{page}</HomeLayout>
    </RootLayout>
  );
};

export default Home;
