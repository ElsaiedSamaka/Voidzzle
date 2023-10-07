const HomeLayout = ({ children }) => {
  return (
    <section className="home-layout p-2  w-full">
      {/* <nav className="backdrop-blur-xl border-gray-200 :border-gray-600 :bg-gray-900 w-full sticky top-14 right-0 md:left-64 z-10">
        <div className="flex flex-wrap justify-between items-center  p-4 ml-4">
          <a href="https://flowbite.com" className="flex items-center ">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Hello Saied
            </span>
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium  w-full md:flex "
          >
            <ul className="flex flex-col w-full p-4 md:p-0 mt-4 border-b border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <a
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 :text-white md::hover:text-blue-500 :hover:bg-gray-700 :hover:text-blue-500 md::hover:bg-transparent :border-gray-700"
                  aria-current="page"
                >
                  All
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 :text-white md::hover:text-blue-500 :hover:bg-gray-700 :hover:text-blue-500 md::hover:bg-transparent :border-gray-700"
                >
                  Vehicles
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 :text-white md::hover:text-blue-500 :hover:bg-gray-700 :hover:text-blue-500 md::hover:bg-transparent :border-gray-700">
                  Properties
                </a>
              </li>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 :text-white md::hover:text-blue-500 :hover:bg-gray-700 :hover:text-blue-500 md::hover:bg-transparent :border-gray-700">
                  Mobiles & Tablets
                </a>
              </li>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 :text-white md::hover:text-blue-500 :hover:bg-gray-700 :hover:text-blue-500 md::hover:bg-transparent :border-gray-700">
                  Jobs
                </a>
              </li>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 :text-white md::hover:text-blue-500 :hover:bg-gray-700 :hover:text-blue-500 md::hover:bg-transparent :border-gray-700">
                  Electronics & Appliances
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      {/* Announcement Banner */}
      {/* <div className="bg-blue-900 backdrop-blur-lg m-2">
          <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 mx-auto">
            <div className="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
              <div className="flex items-center gap-x-3 md:gap-x-5">
                <svg
                  className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width={40}
                    height={40}
                    rx={6}
                    fill="currentColor"
                    className="fill-blue-600"
                  />
                  <path
                    d="M8 32.5V19.5C8 12.8726 13.3726 7.5 20 7.5C26.6274 7.5 32 12.8726 32 19.5C32 26.1274 26.6274 31.5 20 31.5H19"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <path
                    d="M12 32.5V19.66C12 15.1534 15.5817 11.5 20 11.5C24.4183 11.5 28 15.1534 28 19.66C28 24.1666 24.4183 27.82 20 27.82H19"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <circle cx={20} cy="19.5214" r={5} fill="white" />
                </svg>
                <div className="grow">
                  <p className="md:text-xl text-gray-800 font-semibold :text-gray-200">
                    Get started today.
                  </p>
                  <p className="text-sm md:text-base text-gray-800 :text-gray-200">
                    Sign up to get unlimited updates.
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-left flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
                <a
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md sm:rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm md:py-3 md:px-4"
                  href="#"
                >
                  Free trial
                </a>
                <a
                  className="py-[.4125rem] px-3 inline-flex justify-center items-center gap-2 rounded-md sm:rounded-full border-2 border-gray-900 font-semibold text-gray-800 hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm md:py-[.688rem] md:px-4 :hover:bg-white :border-gray-200 :hover:border-white :text-white :hover:text-gray-800 :focus:ring-white :focus:ring-offset-gray-800"
                  href="#"
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div> */}
      {/* End Announcement Banner */}
      {/* Home Navbar */}
      {/* </nav> */}
      <div className="home-content w-full p-2 ">{children}</div>
    </section>
  );
};

export default HomeLayout;
