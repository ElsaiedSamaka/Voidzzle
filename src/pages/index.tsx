import Head from "next/head";
import { Provider } from "react-redux";
import RootLayout from "shared/Layouts/RootLayout/RootLayout";
import { store } from "../core/store";
const IndexPage = () => {
  return (
    <>
      <Head>
        <title>qTech Task | Next12</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <Provider store={store}>
        <main className="">
          <div className=" max-w-screen-xl">
            <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
            <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
              <div className="relative my-4 w-56 sm:hidden">
                <input
                  className="peer hidden"
                  type="checkbox"
                  name="select-1"
                  id="select-1"
                />
                <label
                  htmlFor="select-1"
                  className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
                >
                  Teams{" "}
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                  <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                    Teams
                  </li>
                  <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                    Accounts
                  </li>
                  <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                    Others
                  </li>
                </ul>
              </div>
              <div className="col-span-2 hidden sm:block">
                <ul>
                  <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
                    Teams
                  </li>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    Accounts
                  </li>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    Users
                  </li>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    Profile
                  </li>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    Billing
                  </li>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    Notifications
                  </li>
                  <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                    Integrations
                  </li>
                </ul>
              </div>
              <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
                <div className="pt-4">
                  <h1 className="py-2 text-2xl font-semibold">Team settings</h1>
                  {/* <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
                </div>
                <hr className="mt-4 mb-8" />
                <p className="py-2 text-xl font-semibold">Teams</p>
                <div className="space-y-2">
                  <div className="cursor-pointer rounded-md border bg-white px-6 py-2 text-2xl hover:bg-blue-50">
                    Marketing
                  </div>
                  <div className="cursor-pointer rounded-md border bg-blue-100 px-6 py-2 text-2xl">
                    UI/UX Design
                  </div>
                  <div className="cursor-pointer rounded-md border bg-white px-6 py-2 text-2xl hover:bg-blue-50">
                    Engineering
                  </div>
                </div>
                <hr className="mt-4 mb-8" />
                <p className="py-2 text-xl font-semibold">Members</p>
                <div className="space-y-1">
                  <div className="rounded-md border bg-white">
                    <div className="flex w-full items-center px-6 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span> Shakir Ali</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col space-y-3 px-4 py-6 sm:px-10">
                      <label className="block" htmlFor="name">
                        <p className="text-sm">Name</p>
                        <input
                          className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                          type="text"
                          defaultValue="Shakir Ali"
                        />
                      </label>
                      <label className="block" htmlFor="email">
                        <p className="text-sm">Email</p>
                        <input
                          className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                          type="email"
                          defaultValue="shakir.ali@company.com"
                        />
                      </label>
                      <label className="block" htmlFor="team">
                        <p className="text-sm">Team</p>
                        <select
                          className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                          name="team"
                        >
                          <option>UI/UX Design</option>
                          <option>Marketing</option>
                          <option>Engineering</option>
                        </select>
                      </label>
                      <button className="mt-4 ml-auto rounded-lg bg-blue-600 px-10 py-2 text-white">
                        Save
                      </button>
                    </div>
                  </div>
                  <div className="rounded-md border bg-white">
                    <div className="flex w-full items-center px-6 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Ebbie James</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="rounded-md border bg-white">
                    <div className="flex w-full items-center px-6 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Mica Calister</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <hr className="mt-4 mb-8" />
              </div>
            </div>
          </div>
        </main>
      </Provider>
    </>
  );
};

IndexPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default IndexPage;
