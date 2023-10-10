import React, { useState } from "react";
import Dailog from "shared/Modals/Dailog/Dailog";

const TableHead = ({ _config, data }) => {
  const [showAddModal, toggleAddetionModal] = useState(false);
  function handleAddtionModalToggle() {
    toggleAddetionModal(!showAddModal);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-1/2">
          {_config._search && (
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                {`Search over ${_config.title}`}
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
                  placeholder={"Search over " + _config.title}
                />
              </div>
            </form>
          )}
        </div>
        {_config._actions && (
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            {_config.addtion && (
              <button
                onClick={handleAddtionModalToggle}
                type="button"
                className="flex items-center justify-center text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 focus:outline-none "
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add {_config.title}
              </button>
            )}

            <div className="flex items-center space-x-3 w-full md:w-auto">
              {_config.actions && (
                <>
                  <button
                    id="actionsDropdownButton"
                    data-dropdown-toggle="actionsDropdown"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700"
                    type="button"
                  >
                    <svg
                      className="-ml-1 mr-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                    Actions
                  </button>
                  <div
                    id="actionsDropdown"
                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow :bg-gray-700 :divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 :text-gray-200"
                      aria-labelledby="actionsDropdownButton"
                    >
                      <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 :hover:bg-gray-600 :hover:text-white">
                          Mass Edit
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 :hover:bg-gray-600 :text-gray-200 :hover:text-white">
                        Delete all
                      </a>
                    </div>
                  </div>
                </>
              )}
              {_config.filteration && (
                <>
                  <button
                    id="filterDropdownButton"
                    data-dropdown-toggle="filterDropdown"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-700 :bg-gray-800 :text-gray-400 :border-gray-600 :hover:text-white :hover:bg-gray-700"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-4 w-4 mr-2 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Filter
                    <svg
                      className="-mr-1 ml-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </button>
                  <div
                    id="filterDropdown"
                    className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow :bg-gray-700"
                  >
                    <h6 className="mb-3 text-sm font-medium text-gray-900 :text-white">
                      Choose brand
                    </h6>
                    <ul
                      className="space-y-2 text-sm"
                      aria-labelledby="filterDropdownButton"
                    >
                      <li className="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 :focus:ring-primary-600 :ring-offset-gray-700 focus:ring-2 :bg-gray-600 :border-gray-500"
                        />
                        <label
                          htmlFor="apple"
                          className="ml-2 text-sm font-medium text-gray-900 :text-gray-100"
                        >
                          Apple (56)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="fitbit"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 :focus:ring-primary-600 :ring-offset-gray-700 focus:ring-2 :bg-gray-600 :border-gray-500"
                        />
                        <label
                          htmlFor="fitbit"
                          className="ml-2 text-sm font-medium text-gray-900 :text-gray-100"
                        >
                          Microsoft (16)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="razor"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 :focus:ring-primary-600 :ring-offset-gray-700 focus:ring-2 :bg-gray-600 :border-gray-500"
                        />
                        <label
                          htmlFor="razor"
                          className="ml-2 text-sm font-medium text-gray-900 :text-gray-100"
                        >
                          Razor (49)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="nikon"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 :focus:ring-primary-600 :ring-offset-gray-700 focus:ring-2 :bg-gray-600 :border-gray-500"
                        />
                        <label
                          htmlFor="nikon"
                          className="ml-2 text-sm font-medium text-gray-900 :text-gray-100"
                        >
                          Nikon (12)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="benq"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 :focus:ring-primary-600 :ring-offset-gray-700 focus:ring-2 :bg-gray-600 :border-gray-500"
                        />
                        <label
                          htmlFor="benq"
                          className="ml-2 text-sm font-medium text-gray-900 :text-gray-100"
                        >
                          BenQ (74)
                        </label>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {showAddModal && (
        <Dailog
          header={
            <DailogHeader handleAddtionModalToggle={handleAddtionModalToggle} />
          }
          body={
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          }
          footer={<div>Footer</div>}
        />
      )}
    </>
  );
};
const DailogHeader = ({ handleAddtionModalToggle }) => {
  return (
    <div className="flex justify-between">
      <h3 className="mb-4 text-xl font-medium text-gray-900 ">
        Sign in to our platform
      </h3>
      <div
        onClick={handleAddtionModalToggle}
        className="p-1 w-fit h-fit rounded-full text-gray-700 bg-gray-50 hover:bg-gray-100 hover:cursor-pointer hover:text-gray-900"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default TableHead;
