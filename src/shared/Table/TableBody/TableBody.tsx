import { deleteProductThunk } from "core/store/products/products.thunk";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "shared/Forms/Form";
import Dailog from "shared/Modals/Dailog/Dailog";
import Popover from "shared/Modals/Popover/Popover";

const TableBody = ({
  _config,
  data,
  defaultValues,
  formFields,
  handleUpdateDispatch,
}) => {
  const [showActionsPopover, setShowActionsPopover] = useState(false);
  const [rowIndex, setRowIndex] = useState(null);
  const [showEditModal, toggleEditModal] = useState(false);
  const [showPreviewModal, togglePreviewModal] = useState(false);
  const dispatch = useDispatch();
  function toggleActionsPopover(index: any) {
    if (rowIndex == index) {
      setShowActionsPopover(!showActionsPopover);
    } else {
      setRowIndex(index);
      setShowActionsPopover(true);
    }
  }
  function deleteItem(id: any) {
    dispatch(deleteProductThunk(id));
    toggleActionsPopover(null);
  }
  function handleEditModalToggle(item: any) {
    toggleActionsPopover(null);
    toggleEditModal(!showEditModal);
  }
  function handlePreviewModalToggle(item: any) {
    toggleActionsPopover(null);
    togglePreviewModal(!showPreviewModal);
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 :text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
            <tr>
              {_config.multiSelect && (
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 :focus:ring-primary-600 :ring-offset-gray-800 focus:ring-2 :bg-gray-700 :border-gray-600"
                    />
                    <label htmlFor="checkbox-all" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
              )}
              {_config.th.map((col, i) => {
                return (
                  <th key={col.id} scope="col" className="px-4 py-3">
                    {col.label}
                  </th>
                );
              })}
              {_config._exentions && (
                <th scope="col" className="p-4">
                  actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.Loading && <tr>Loading...</tr>}
            {data.error && <tr>Error</tr>}
            {data.items.map((item, i) => {
              return (
                <>
                  <tr className="border-b" key={item.id}>
                    {_config.multiSelect && (
                      <td className="w-4 px-4 py-3">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 :focus:ring-primary-600 :ring-offset-gray-800 focus:ring-2 :bg-gray-700 :border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                    )}
                    {_config.th.map((column, i) => (
                      <td className="px-4 py-2" key={column.id}>
                        <div className="flex items-center">
                          {item[column.label]}
                        </div>
                      </td>
                    ))}
                    {_config._exentions && (
                      <td className="p-4">
                        <div className="relative">
                          <button
                            onClick={() => {
                              toggleActionsPopover(i);
                            }}
                            id="apple-imac-20-dropdown-button"
                            data-dropdown-toggle="apple-imac-20-dropdown"
                            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none :text-gray-400 :hover:text-gray-100"
                            type="button"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                          {showActionsPopover && rowIndex == i && (
                            <Popover
                              content={
                                <>
                                  <div>
                                    <ul
                                      className="py-1 text-sm text-gray-700"
                                      aria-labelledby="apple-imac-20-dropdown-button"
                                    >
                                      <li>
                                        <a
                                          onClick={() =>
                                            handlePreviewModalToggle(item)
                                          }
                                          className="block py-2 px-4 hover:bg-gray-100 hover:cursor-pointer"
                                        >
                                          Show
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          onClick={() =>
                                            handleEditModalToggle(item)
                                          }
                                          className="block py-2 px-4 hover:bg-gray-100 hover:cursor-pointer"
                                        >
                                          Edit
                                        </a>
                                      </li>
                                    </ul>
                                    <div
                                      className="py-1"
                                      onClick={() => deleteItem(item.id)}
                                    >
                                      <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </>
                              }
                            />
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                  {showEditModal && (
                    <Dailog
                      header={
                        <EditDailogHeader
                          handleModalToggle={handleEditModalToggle}
                        />
                      }
                      body={
                        <EditDailogBody
                          handleModalToggle={handleEditModalToggle}
                          defaultValues={item}
                          formFields={formFields}
                          handleDispatch={handleUpdateDispatch}
                        />
                      }
                    />
                  )}
                  {showPreviewModal && (
                    <Dailog
                      header={
                        <PreviewDailogHeader
                          handleModalToggle={handlePreviewModalToggle}
                        />
                      }
                      body={
                        <PreviewDailogBody
                          item={item}
                          handleModalToggle={handlePreviewModalToggle}
                        />
                      }
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
const EditDailogHeader = ({ handleModalToggle }) => {
  return (
    <div className="dailog-header flex justify-between items-center">
      <h3 className=" text-xl font-bold text-gray-900 ">Edit product</h3>
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
const EditDailogBody = ({
  handleModalToggle,
  handleDispatch,
  defaultValues,
  formFields,
}) => {
  return (
    <Form
      formActions={{
        handleModalToggle: handleModalToggle,
        handleDispatch: handleDispatch,
      }}
      formFields={formFields}
      defaultValues={defaultValues}
    />
  );
};
const PreviewDailogHeader = ({ handleModalToggle }) => {
  return (
    <div className="dailog-header flex justify-between items-center border-b">
      <h3 className=" text-xl font-bold text-gray-900 ">product details</h3>
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
const PreviewDailogBody = ({ item, handleModalToggle }) => {
  return (
    <div
      id="readProductModal"
      tabIndex={-1}
      aria-hidden="true"
      className="justify-center items-center w-full md:inset-0 "
    >
      <div className="relative   ">
        <div className="w-full sm:my-4">
          <div className="flex items-center justify-between text-lg text-gray-900 md:text-xl ">
            <h4 className="font-medium ">Apple iMac 27”</h4>
            <p className="font-medium">$2999</p>
          </div>
        </div>
        <dl>
          <dt className="mb-2 font-semibold leading-none text-gray-900 :text-white">
            Details
          </dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 :text-gray-400">
            Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
          <dt className="mb-2 font-semibold leading-none text-gray-900 :text-white">
            Colors
          </dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 :text-gray-400">
            <span className="w-5 h-5 bg-red-500 rounded-full">
              <div>
                <input
                  id="red"
                  type="checkbox"
                  className="appearance-none inline-block w-5 h-5 mr-2 bg-red-700 rounded-full hover:cursor-pointer"
                />
                <label htmlFor="red" className="sr-only">
                  checkbox
                </label>
              </div>
            </span>
          </dd>
          <dt className="mb-2 font-semibold leading-none text-gray-900 :text-white">
            Category
          </dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 :text-gray-400">
            Electronics/PC
          </dd>
        </dl>
        <div>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Sold by</dt>
              lorem
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Sold by</dt>
              lorem
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Sold by</dt>
              lorem
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Sold by</dt>
              lorem
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Sold by</dt>
              lorem
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Sold by</dt>
              lorem
            </dd>
          </dl>
        </div>
        <div className="flex justify-end my-2">
          <button
            type="button"
            className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-red-500 :hover:bg-red-600 :focus:ring-red-900"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-1.5 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TableBody;
