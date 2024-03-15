// packages
import classNames from 'classnames';
// components
import Icon from 'shared/Common/Icon/Icon';
import Dailog from 'shared/Modals/Dailog/Dailog';
// hooks
import { useState } from 'react';
import { useThemeContext } from 'core/context/ThemeContext';

const SearchForm = () => {
  const { theme } = useThemeContext();
  const { mode } = theme;
  const [showFilterationDailog, toggleFilterationDailog] =
    useState<boolean>(false);
  function handleFilterDailgoToggle(): void {
    toggleFilterationDailog(!showFilterationDailog);
  }
  return (
    <>
      <form className="hidden md:block md:pl-2">
        <label htmlFor="topbar-search" className="sr-only">
          Search
        </label>
        <div className="relative md:w-96">
          <div className="flex absolute inset-y-0 ltr:left-0 rtl:right-0 items-center ltr:pl-3 rtl:pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="topbar-search"
            className={classNames(
              'border rounded-full block w-full ltr:pl-10 rtl:pr-10 p-2',
              {
                'bg-dark-bgSecondary border-dark-border text-dark-textSecondary ':
                  mode === 'dark',
                'bg-light-bgSecondary border-light-border text-light-textPrimary':
                  mode === 'light',
              },
            )}
            placeholder="Search"
          />
          <div
            onClick={handleFilterDailgoToggle}
            className="absolute inset-y-0 ltr:right-0 rtl:left-0"
          >
            <Icon>
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                />
              </svg>
            </Icon>
          </div>
        </div>
      </form>
      {showFilterationDailog && (
        <Dailog
          header={
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xl ">
                reach your wanted products flash fast ⚡
              </span>
              <Icon>
                <svg
                  onClick={handleFilterDailgoToggle}
                  className="w-5 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </Icon>
            </div>
          }
          body={
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
            </form>
          }
          footer={
            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                Reset
              </button>
              <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                Search
              </button>
            </div>
          }
        />
      )}
    </>
  );
};

export default SearchForm;
