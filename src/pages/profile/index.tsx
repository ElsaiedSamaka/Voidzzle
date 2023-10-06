import { Card, ProfileLayout, RootLayout } from "shared";

const Profile = () => {
  return (
    <>
      <div className="mx-4  sm:mx-8 xl:mx-auto">
        <h1 className="border-b py-6 text-4xl font-semibold">Profile</h1>
        <div className="flex items-center">
          {/* Tab Navs */}
          <nav
            className="grid gap-4 mt-5 md:mt-10"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl :hs-tab-active:bg-slate-900 :hover:bg-gray-700 active"
              id="tabs-with-card-item-1"
              data-hs-tab="#tabs-with-card-1"
              aria-controls="tabs-with-card-1"
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 :hs-tab-active:text-blue-500 :text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <span className="grow ml-6">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 :hs-tab-active:text-blue-500 :text-gray-200">
                    Advanced tools
                  </span>
                  <span className="block mt-1 text-gray-800 :hs-tab-active:text-gray-200 :text-gray-200">
                    Use Preline thoroughly thought and automated libraries to
                    manage your businesses.
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl :hs-tab-active:bg-slate-900 :hover:bg-gray-700"
              id="tabs-with-card-item-2"
              data-hs-tab="#tabs-with-card-2"
              aria-controls="tabs-with-card-2"
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 :hs-tab-active:text-blue-500 :text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                  />
                </svg>
                <span className="grow ml-6">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 :hs-tab-active:text-blue-500 :text-gray-200">
                    Smart dashboards
                  </span>
                  <span className="block mt-1 text-gray-800 :hs-tab-active:text-gray-200 :text-gray-200">
                    Quickly Preline sample components, copy-paste codes, and
                    start right off.
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl :hs-tab-active:bg-slate-900 :hover:bg-gray-700"
              id="tabs-with-card-item-3"
              data-hs-tab="#tabs-with-card-3"
              aria-controls="tabs-with-card-3"
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 :hs-tab-active:text-blue-500 :text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                </svg>
                <span className="grow ml-6">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 :hs-tab-active:text-blue-500 :text-gray-200">
                    Powerful features
                  </span>
                  <span className="block mt-1 text-gray-800 :hs-tab-active:text-gray-200 :text-gray-200">
                    Reduce time and effort on building modern look design with
                    Preline only.
                  </span>
                </span>
              </span>
            </button>
          </nav>
          {/* End Tab Navs */}

          <ul className="grid grid-cols-4 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-3 pb-10 ">
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </div>
    </>
  );
};
Profile.getLayout = (page) => {
  return (
    <RootLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </RootLayout>
  );
};
export default Profile;
//  <div className="col-span-10 rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
//    <div className="pt-4">
//      <h1 className="py-2 text-2xl font-semibold">Billing settings</h1>
//      {/* <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
//    </div>
//    <hr className="mt-4 mb-8" />
//    <div className="mb-10 grid gap-y-8 lg:grid-cols-2 lg:gap-y-0">
//      <div className="space-y-8">
//        <div>
//          <div className="flex">
//            <p className="font-medium mb-1">Billing Period</p>
//            <button className="ml-auto inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
//              Change
//            </button>
//          </div>
//          <div className="flex items-center rounded-md border border-gray-100 bg-white py-3 shadow">
//            <p className="ml-4 w-56">
//              <strong className="block text-lg font-medium">MONTHLY</strong>
//              <span className="text-xs text-gray-400">
//                {" "}
//                Next Renewal: 4 Jan 2022{" "}
//              </span>
//            </p>
//          </div>
//        </div>
//        <div>
//          <div className="flex">
//            <p className="font-medium mb-1">Payment Method</p>
//            <button className="ml-auto inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
//              Change
//            </button>
//          </div>
//          <div className="flex items-center rounded-md border border-gray-100 bg-white py-3 shadow">
//            <img
//              className="h-10 object-contain pl-4"
//              src="/images/kt10d0A1TgzZpAoNM_YPX.png"
//            />
//            <p className="ml-4 w-56">
//              <strong className="block text-lg font-medium">
//                **** **** **** 453{" "}
//              </strong>
//              <strong className="block text-lg font-medium">
//                ALBERT K. DANIEL{" "}
//              </strong>
//              <span className="text-xs text-gray-400">
//                {" "}
//                Expires on: Dec 2024{" "}
//              </span>
//            </p>
//          </div>
//        </div>
//      </div>
//      <div className="grid gap-y-6 gap-x-3 sm:grid-cols-2 lg:px-8">
//        <label className="block" htmlFor="name">
//          <p className="text-sm">Name</p>
//          <input
//            className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
//            type="text"
//            defaultValue="Shakir Ali"
//          />
//        </label>
//        <label className="block" htmlFor="name">
//          <p className="text-sm">Email Address</p>
//          <input
//            className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
//            type="text"
//            defaultValue="shakir.ali@corpora.de"
//          />
//        </label>
//        <label className="block sm:col-span-2" htmlFor="name">
//          <p className="text-sm">Billing Address</p>
//          <input
//            className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
//            type="text"
//            defaultValue="82844 Boyle Extension Suite 541 - Covington, HI / 28013"
//          />
//        </label>
//        <label className="block" htmlFor="name">
//          <p className="text-sm">VAT #</p>
//          <input
//            className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
//            type="text"
//            defaultValue={6346322}
//          />
//        </label>
//        <label className="block" htmlFor="name">
//          <p className="text-sm">Country</p>
//          <input
//            className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
//            type="text"
//            defaultValue="Germany"
//          />
//        </label>
//      </div>
//    </div>
//    <hr />

//    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg my-2">
//      <p className="mb-6 bg-gray-100 py-1 text-center text-lg font-medium">
//        My wishlist
//      </p>
//      <table className="w-full text-sm text-left text-gray-500 :text-gray-400">
//        <thead className="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
//          <tr>
//            <th scope="col" className="px-6 py-3">
//              <span className="sr-only">Image</span>
//            </th>
//            <th scope="col" className="px-6 py-3">
//              Product
//            </th>
//            <th scope="col" className="px-6 py-3">
//              Qty
//            </th>
//            <th scope="col" className="px-6 py-3">
//              Price
//            </th>
//            <th scope="col" className="px-6 py-3">
//              Action
//            </th>
//          </tr>
//        </thead>
//        <tbody>
//          <tr className="bg-white border-b :bg-gray-800 :border-gray-700 hover:bg-gray-50 :hover:bg-gray-600">
//            <td className="w-32 p-4">
//              <img
//                src="/docs/images/products/apple-watch.png"
//                alt="Apple Watch"
//              />
//            </td>
//            <td className="px-6 py-4 font-semibold text-gray-900 :text-white">
//              Apple Watch
//            </td>
//            <td className="px-6 py-4">
//              <div className="flex items-center space-x-3">
//                <button
//                  className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:bg-gray-700 :hover:border-gray-600 :focus:ring-gray-700"
//                  type="button"
//                >
//                  <span className="sr-only">Quantity button</span>
//                  <svg
//                    className="w-3 h-3"
//                    aria-hidden="true"
//                    xmlns="http://www.w3.org/2000/svg"
//                    fill="none"
//                    viewBox="0 0 18 2"
//                  >
//                    <path
//                      stroke="currentColor"
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      strokeWidth={2}
//                      d="M1 1h16"
//                    />
//                  </svg>
//                </button>
//                <div>
//                  <input
//                    type="number"
//                    id="first_product"
//                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
//                    required
//                  />
//                </div>
//                <button
//                  className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:bg-gray-700 :hover:border-gray-600 :focus:ring-gray-700"
//                  type="button"
//                >
//                  <span className="sr-only">Quantity button</span>
//                  <svg
//                    className="w-3 h-3"
//                    aria-hidden="true"
//                    xmlns="http://www.w3.org/2000/svg"
//                    fill="none"
//                    viewBox="0 0 18 18"
//                  >
//                    <path
//                      stroke="currentColor"
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      strokeWidth={2}
//                      d="M9 1v16M1 9h16"
//                    />
//                  </svg>
//                </button>
//              </div>
//            </td>
//            <td className="px-6 py-4 font-semibold text-gray-900 :text-white">
//              $599
//            </td>
//            <td className="px-6 py-4">
//              <a
//                href="#"
//                className="font-medium text-red-600 :text-red-500 hover:underline"
//              >
//                Remove
//              </a>
//            </td>
//          </tr>
//          <tr className="bg-white border-b :bg-gray-800 :border-gray-700 hover:bg-gray-50 :hover:bg-gray-600">
//            <td className="w-32 p-4">
//              <img src="/docs/images/products/imac.png" alt="Apple Imac" />
//            </td>
//            <td className="px-6 py-4 font-semibold text-gray-900 :text-white">
//              Imac 27"
//            </td>
//            <td className="px-6 py-4">
//              <div className="flex items-center space-x-3">
//                <button
//                  className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:bg-gray-700 :hover:border-gray-600 :focus:ring-gray-700"
//                  type="button"
//                >
//                  <span className="sr-only">Quantity button</span>
//                  <svg
//                    className="w-3 h-3"
//                    aria-hidden="true"
//                    xmlns="http://www.w3.org/2000/svg"
//                    fill="none"
//                    viewBox="0 0 18 2"
//                  >
//                    <path
//                      stroke="currentColor"
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      strokeWidth={2}
//                      d="M1 1h16"
//                    />
//                  </svg>
//                </button>
//                <div>
//                  <input
//                    type="number"
//                    id="first_product"
//                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
//                    required
//                  />
//                </div>
//                <button
//                  className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:bg-gray-700 :hover:border-gray-600 :focus:ring-gray-700"
//                  type="button"
//                >
//                  <span className="sr-only">Quantity button</span>
//                  <svg
//                    className="w-3 h-3"
//                    aria-hidden="true"
//                    xmlns="http://www.w3.org/2000/svg"
//                    fill="none"
//                    viewBox="0 0 18 18"
//                  >
//                    <path
//                      stroke="currentColor"
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      strokeWidth={2}
//                      d="M9 1v16M1 9h16"
//                    />
//                  </svg>
//                </button>
//              </div>
//            </td>
//            <td className="px-6 py-4 font-semibold text-gray-900 :text-white">
//              $2499
//            </td>
//            <td className="px-6 py-4">
//              <a
//                href="#"
//                className="font-medium text-red-600 :text-red-500 hover:underline"
//              >
//                Remove
//              </a>
//            </td>
//          </tr>
//          <tr className="bg-white border-b :bg-gray-800 :border-gray-700 hover:bg-gray-50 :hover:bg-gray-600">
//            <td className="w-32 p-4">
//              <img src="/docs/images/products/iphone-12.png" alt="Iphone 12" />
//            </td>
//            <td className="px-6 py-4 font-semibold text-gray-900 :text-white">
//              Iphone 12
//            </td>
//            <td className="px-6 py-4">
//              <div className="flex items-center space-x-3">
//                <button
//                  className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:bg-gray-700 :hover:border-gray-600 :focus:ring-gray-700"
//                  type="button"
//                >
//                  <span className="sr-only">Quantity button</span>
//                  <svg
//                    className="w-3 h-3"
//                    aria-hidden="true"
//                    xmlns="http://www.w3.org/2000/svg"
//                    fill="none"
//                    viewBox="0 0 18 2"
//                  >
//                    <path
//                      stroke="currentColor"
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      strokeWidth={2}
//                      d="M1 1h16"
//                    />
//                  </svg>
//                </button>
//                <div>
//                  <input
//                    type="number"
//                    id="first_product"
//                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
//                    required
//                  />
//                </div>
//                <button
//                  className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:bg-gray-700 :hover:border-gray-600 :focus:ring-gray-700"
//                  type="button"
//                >
//                  <span className="sr-only">Quantity button</span>
//                  <svg
//                    className="w-3 h-3"
//                    aria-hidden="true"
//                    xmlns="http://www.w3.org/2000/svg"
//                    fill="none"
//                    viewBox="0 0 18 18"
//                  >
//                    <path
//                      stroke="currentColor"
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      strokeWidth={2}
//                      d="M9 1v16M1 9h16"
//                    />
//                  </svg>
//                </button>
//              </div>
//            </td>
//            <td className="px-6 py-4 font-semibold text-gray-900 :text-white">
//              $999
//            </td>
//            <td className="px-6 py-4">
//              <a
//                href="#"
//                className="font-medium text-red-600 :text-red-500 hover:underline"
//              >
//                Remove
//              </a>
//            </td>
//          </tr>
//        </tbody>
//      </table>
//    </div>

//    <div className="amx-auto mb-10 overflow-hidden rounded-lg border bg-white">
//      <p className="mb-6 bg-gray-100 py-1 text-center text-lg font-medium">
//        Billing History
//      </p>
//      <table className="w-full">
//        <thead>
//          <tr>
//            <td className="text-center font-semibold">Date</td>
//            <td className="text-center font-semibold">Invoice #</td>
//            <td className="text-center font-semibold">Amount</td>
//            <td className="text-center font-semibold" />
//          </tr>
//        </thead>
//        <tbody>
//          <tr>
//            <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
//            <td className="border-b py-2 text-center text-sm">X-543242</td>
//            <td className="border-b py-2 text-center text-sm">$99.00</td>
//            <td className="border-b py-2 text-center text-sm">
//              <button className="text-sm text-blue-600 underline">PDF</button>
//            </td>
//          </tr>
//          <tr>
//            <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
//            <td className="border-b py-2 text-center text-sm">X-543242</td>
//            <td className="border-b py-2 text-center text-sm">$99.00</td>
//            <td className="border-b py-2 text-center text-sm">
//              <button className="text-sm text-blue-600 underline">PDF</button>
//            </td>
//          </tr>
//          <tr>
//            <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
//            <td className="border-b py-2 text-center text-sm">X-543242</td>
//            <td className="border-b py-2 text-center text-sm">$99.00</td>
//            <td className="border-b py-2 text-center text-sm">
//              <button className="text-sm text-blue-600 underline">PDF</button>
//            </td>
//          </tr>
//          <tr>
//            <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
//            <td className="border-b py-2 text-center text-sm">X-543242</td>
//            <td className="border-b py-2 text-center text-sm">$99.00</td>
//            <td className="border-b py-2 text-center text-sm">
//              <button className="text-sm text-blue-600 underline">PDF</button>
//            </td>
//          </tr>
//        </tbody>
//      </table>
//    </div>
//  </div>;
