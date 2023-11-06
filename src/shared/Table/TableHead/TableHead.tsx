import React, { useState } from "react";
import Form from "shared/Forms/Form";
import Dailog from "shared/Modals/Dailog/Dailog";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteAllProductsThunk } from "core/store/products/products.thunk";
import { useSelectedItems } from "../shared/context/SelectedItemsContext";
import { useDebounce } from "core/hooks";
const TableHead = ({
  _config,
  data,
  defaultValues,
  formFields,
  handleAddetionDispatch,
  handleDeleteAllDispatch,
  handleSearchDispatch,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [showAddModal, toggleAddetionModal] = useState(false);
  const [showActionsPopover, setShowActionsPopover] = useState(false);
  const [showFilterPopOver, setShowFilterPopOver] = useState(false);
  const { state, dispatch: dispatchSelectedItems } = useSelectedItems();
  const { items } = state;
  const dispatch = useDispatch();
  function handleModalToggle() {
    toggleAddetionModal(!showAddModal);
  }
  function handleActionToggle() {
    setShowActionsPopover(!showActionsPopover);
  }
  function handleDeleteAll() {
    handleDeleteAllDispatch();
  }
  function handleFilterToggle() {
    setShowFilterPopOver(!showFilterPopOver);
  }
  // const value = useDebounce(searchInput, 3000);
  function handleItemsSearch(query: string) {
    setSearchInput(query);
    handleSearchDispatch(query);
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
                  value={searchInput}
                  onChange={(e) => {
                    handleItemsSearch(e.target.value);
                  }}
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
                onClick={handleModalToggle}
                type="button"
                className="flex items-center justify-center text-white  bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 focus:outline-none "
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

            <div className="flex items-center space-x-3 w-full md:w-auto ">
              {_config.actions && (
                <>
                  <div className="relative">
                    <button
                      onClick={handleActionToggle}
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
                      className={classNames(
                        "absolute opacity-0 transition-opacity duration-300 top-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow",
                        { "opacity-100": showActionsPopover }
                      )}
                      id="actionsDropdown"
                    >
                      <div className="py-1">
                        <a
                          onClick={handleDeleteAll}
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 hover:cursor-pointer"
                        >
                          Delete all
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {_config.filteration && (
                <>
                  <div className="relative">
                    <button
                      onClick={handleFilterToggle}
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
                      className={classNames(
                        "absolute opacity-0 translate-y-0 transition-all duration-300 top-10 z-10 w-44 h-36 overflow-clip  bg-white rounded divide-y divide-gray-100 p-1 shadow-md",
                        { "opacity-100 translate-y-1": showFilterPopOver }
                      )}
                    >
                      <h6 className="mb-3 text-sm font-medium text-gray-900 :text-white">
                        Choose brand
                      </h6>
                      <ul
                        className="space-y-2 text-sm bg-white h-full overflow-scroll"
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
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {showAddModal && (
        <Dailog
          header={<DailogHeader handleModalToggle={handleModalToggle} />}
          body={
            <DailogBody
              handleModalToggle={handleModalToggle}
              defaultValues={defaultValues}
              formFields={formFields}
              handleAddetionDispatch={handleAddetionDispatch}
            />
          }
        />
      )}
    </>
  );
};
const DailogHeader = ({ handleModalToggle }) => {
  return (
    <div className="dailog-header flex justify-between items-center border-b py-2">
      <h3 className=" text-xl font-bold text-gray-900 ">Add new product</h3>
      <div
        onClick={handleModalToggle}
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

const DailogBody = ({
  handleModalToggle,
  handleAddetionDispatch,
  defaultValues,
  formFields,
}) => {
  return (
    <Form
      formActions={{
        handleModalToggle: handleModalToggle,
        handleDispatch: handleAddetionDispatch,
      }}
      formFields={formFields}
      defaultValues={defaultValues}
    />
  );
};
export default TableHead;
