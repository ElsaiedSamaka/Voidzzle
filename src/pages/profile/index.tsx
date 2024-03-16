// Components
import { Card, ProfileLayout, RootLayout } from 'shared';
// Packages
import Head from 'next/head';
// Hooks & Services
import {useTranslation} from 'core/context/TranslationContext';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('profile.title')}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <div className="mx-4">
        <h1 className="border-b py-6 text-4xl font-semibold">{t('profile.name')}</h1>
        <div className="flex items-center">
          {/* Tab Navs */}
          <nav className="grid gap-4 text-zinc-500" aria-label="Tabs" role="tablist">
            {/* TODO: make a custom active class so that active tab have b-white and some shadow */}
            <button
              type="button"
              className="text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl active"
              id="tabs-with-card-item-1"
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <span className="grow ml-6">
                  <span className="block text-lg font-semibold ">
                    Wish list
                  </span>
                  <span className="block mt-1 ">
                    Use Preline thoroughly thought and automated libraries to
                    manage your businesses.
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl"
              id="tabs-with-card-item-2"
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="grow ml-6">
                  <span className="block text-lg font-semibold ">
                    Orders
                  </span>
                  <span className="block mt-1 ">
                    Quickly Preline sample components, copy-paste codes, and
                    start right off.
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl "
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
                <span className="grow ml-6">
                  <span className="block text-lg font-semibold ">
                    Buying requests
                  </span>
                  <span className="block mt-1 ">
                    Reduce time and effort on building modern look design with
                    Preline only.
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl "
              id="tabs-with-card-item-3"
              role="tab"
            >
              <span className="flex">
                <svg
                  fill="none"
                  className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 "
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                  />
                </svg>
                <span className="grow ml-6">
                  <span className="block text-lg font-semibold ">
                    Refund requests
                  </span>
                  <span className="block mt-1 ">
                    Reduce time and effort on building modern look design with
                    Preline only.
                  </span>
                </span>
              </span>
            </button>
          </nav>
          {/* End Tab Navs */}
          {/* products grid */}
          <div>
            <ul className="grid grid-cols-4 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-3 pb-10 ">
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
            <div className="flex justify-center">
              {/* Previous Button */}
              <a className="flex items-center justify-center space-x-1 px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:cursor-pointer hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Load more
              </a>
            </div>
          </div>
          {/* products grid */}
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
//
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
//
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
//
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
