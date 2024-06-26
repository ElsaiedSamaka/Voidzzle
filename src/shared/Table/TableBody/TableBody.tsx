/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import classNames from 'classnames';
// Components
import Form from 'shared/Forms/Form';
import Dailog from 'shared/Modals/Dailog/Dailog';
import Popover from 'shared/Modals/Popover/Popover';
// Hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelectedItems } from '../shared/context/SelectedItemsContext';
import { useTranslation } from 'core/context/TranslationContext';
// Thunks
import { deleteProductThunk } from 'core/store/products/products.thunk';

const TableBody = ({
  _config,
  data,
  defaultValues,
  formFields,
  handleUpdateDispatch,
}: any) => {
  const [showActionsPopover, setShowActionsPopover] = useState(false);
  const [rowIndex, setRowIndex] = useState(null);
  const [showEditModal, toggleEditModal] = useState(false);
  const [showPreviewModal, togglePreviewModal] = useState(false);
  const {
    state: { items },
    dispatch: dispatchSelectedItems,
  } = useSelectedItems();
  const { t } = useTranslation();
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
  /**
   * Handles the selection of an item.
   *
   * @param {Object} item - The item to be selected.
   * @returns {Array} - The updated list of selected items.
   */
  function handleItemSelect(item: any) {
    const itemIndex = items.findIndex((selectedItem) => {
      return selectedItem.id === item.id;
    });
    if (itemIndex !== -1) {
      dispatchSelectedItems({
        type: 'remove',
        payload: item.id,
      });
    } else {
      dispatchSelectedItems({
        type: 'add',
        payload: [item],
      });
    }
  }
  /**
   * Handles the select all functionality.
   */
  function handleSelectAll() {
    // If there are items in the list
    if (items.length > 0) {
      // Reset the selected items
      dispatchSelectedItems({ type: 'reset' });
    } else {
      // Add all items to the selected items list
      dispatchSelectedItems({ type: 'add', payload: data.items });
    }
  }
  return (
    <>
      <div className="overflow-x-auto bg-white/5 rounded-md">
        <table className="w-full text-sm ltr:text-left rtl:text-right">
          <thead className="text-xs uppercase">
            <tr>
              {_config.multiSelect && (
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      // checked={items.length == data.items.length}
                      onChange={handleSelectAll}
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h4 roundefocus:ring-2"
                    />
                    <label htmlFor="checkbox-all" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
              )}
              {_config.th.map((col: any, i: number) => {
                return (
                  <th key={col.id} scope="col" className="px-4 py-3">
                    {t(col.label)}
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
            {data.items.map((item: any, i: number) => {
              return (
                <>
                  <tr className="border-b border-white/10" key={item.id}>
                    {_config.multiSelect && (
                      <td className="w-4 px-4 py-2 ">
                        <div className="flex items-center">
                          <input
                            value={item.id}
                            checked={items.some(
                              (selectedItem) => selectedItem.id == item.id,
                            )}
                            onChange={() => {
                              handleItemSelect(item);
                            }}
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 rounded focus:ring-2"
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
                    {_config.th.map((column: any, i: number) => (
                      <td className="px-4 py-1" key={column.id}>
                        <div className="flex items-center">
                          {column.select
                            ? item[column.key]?.name
                            : item[column.key]}
                        </div>
                      </td>
                    ))}
                    {_config._exentions && (
                      <td className="p-2">
                        <div className="relative">
                          <button
                            onClick={() => {
                              toggleActionsPopover(i);
                            }}
                            id="apple-imac-20-dropdown-button"
                            title="apple-imac-20-dropdown"
                            data-dropdown-toggle="apple-imac-20-dropdown"
                            className="inline-flex items-center p-0.5 text-sm font-medium text-center hover:text-gray-800 rounded-lg focus:outline-none"
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
                                      className="py-1 text-sm"
                                      aria-labelledby="apple-imac-20-dropdown-button"
                                    >
                                      <li>
                                        <a
                                          onClick={() =>
                                            handlePreviewModalToggle(item)
                                          }
                                          className="block py-2 px-4 hover:cursor-pointer hover:font-semibold"
                                        >
                                          Show
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          onClick={() =>
                                            handleEditModalToggle(item)
                                          }
                                          className="block py-2 px-4 hover:cursor-pointer hover:font-semibold"
                                        >
                                          Edit
                                        </a>
                                      </li>
                                    </ul>
                                    <div
                                      className="py-1"
                                      onClick={() => deleteItem(item.id)}
                                    >
                                      <a className="block py-2 px-4 text-sm hover:cursor-pointer hover:font-semibold">
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
            {data.items.length < 10 &&
              Array.from({ length: 10 - data.items.length }).map((_, i) => (
                <tr
                  className="border-b border-white/10"
                  key={`placeholder-${i}`}
                >
                  {/* Placeholder row */}
                  {_config.multiSelect && (
                    <td className="w-4 px-4 py-2">
                      <div className="flex items-center">
                        <input
                          disabled
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 rounded focus:ring-2 "
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
                  {_config.th.map((column: any, i: number) => (
                    <td className="px-4 py-2" key={column.id}>
                      <div className="flex items-center"></div>
                    </td>
                  ))}
                  {_config._exentions && (
                    <td className="p-2">
                      <div className="relative">
                        <button
                          disabled
                          id="apple-imac-20-dropdown-button"
                          title="apple-imac-20-dropdown"
                          data-dropdown-toggle="apple-imac-20-dropdown"
                          className="inline-flex items-center p-0.5 text-sm font-medium text-center  rounded-lg focus:outline-none disabled:cursor-not-allowed"
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
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
const EditDailogHeader = ({ handleModalToggle }: any) => {
  return (
    <div className="dailog-header flex justify-between items-center">
      <h3 className=" text-xl font-bold  ">Edit product</h3>
      <div
        onClick={handleModalToggle}
        className="p-1 w-fit h-fit rounded-full   hover:cursor-pointer hover:font-semibold "
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>
  );
};
// Core
import { useThemeContext } from 'core/context/ThemeContext';

const EditDailogBody = ({
  handleModalToggle,
  handleDispatch,
  defaultValues,
  formFields,
}: any) => {
  const { theme:{mode} } = useThemeContext();
  const { t } = useTranslation();


  return (
    <Form formFields={formFields} defaultValues={defaultValues}>
      <button
        onClick={handleModalToggle}
        className={classNames(
          'hover:shadow-black/40 text-white rounded-xl px-8 py-2 font-bold transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed',
          {
            'bg-black disabled:bg-dark-bgDisabled': mode === 'dark',
            'bg-black disabled:bg-light-bgDisabled': mode === 'light',
          },
        )}
        type="submit"
      >
        {t('general.cancel')}
      </button>
      <button
        onClick={() => {
          handleDispatch();
        }}
        className={classNames(
          'hover:shadow-red-800/40 text-white rounded-xl px-8 py-2 font-bold transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed',
          {
            'bg-dark-primary disabled:bg-dark-bgDisabled': mode === 'dark',
            'bg-light-primary disabled:bg-light-bgDisabled': mode === 'light',
          },
        )}
        type="submit"
      >
        {t('form.submit')}
      </button>
    </Form>
  );
};
const PreviewDailogHeader = ({ handleModalToggle }: any) => {
  return (
    <div className="dailog-header flex justify-between items-center  pb-2">
      <h3 className=" text-xl font-bold  ">product details</h3>
      <div
        onClick={handleModalToggle}
        className="p-1 w-fit h-fit rounded-full   hover:cursor-pointer hover:font-semibold "
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>
  );
};
const PreviewDailogBody = ({ item, handleModalToggle }: any) => {
  return (
    <div
      id="readProductModal"
      tabIndex={-1}
      aria-hidden="true"
      className="p-2 w-full "
    >
      <div className="relative border-t  ">
        <div className="w-full sm:my-4">
          <div className="flex items-center justify-between text-lg  md:text-xl ">
            <h4 className="font-medium ">{item.name}”</h4>
            <p className="font-medium">${item.price}</p>
          </div>
        </div>
        <dl>
          <dt className="mb-2 font-semibold leading-none  ">Details</dt>
          <dd className="mb-4 font-light sm:mb-5 :text-gray-400">
            {item.description ? item.description : 'N/A'}
          </dd>
          <dt className="mb-2 font-semibold leading-none  ">Colors</dt>
          <dd className="mb-4 font-light sm:mb-5 :text-gray-400">
            <span className="w-5 h-5 bg-red-500 rounded-full">
              <div>
                <input
                  id="red"
                  type="checkbox"
                  className="appearance-none inline-block w-5 h-5 mr-2 bg-red-700 rounded-full hover:cursor-pointer hover:font-semibold"
                />
                <label htmlFor="red" className="sr-only">
                  checkbox
                </label>
              </div>
            </span>
          </dd>
          <dt className="mb-2 font-semibold leading-none  ">Category</dt>
          <dd className="mb-4 font-light sm:mb-5 :text-gray-400">
            {item.category ? item.category : 'N/A'}
          </dd>
        </dl>
        <div>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Sold by</dt>
              Flan
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Ships from</dt>
              lorem
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Product State</dt>
              <span className="text-green-800 bg-green-200 inline-flex items-center p-0.5 rounded">
                <svg
                  className="w-4 h-4"
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
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                new
              </span>
              {/* <span className="text-zinc-800 bg-zinc-200 inline-flex items-center p-0.5 rounded">
                <svg
                  className="w-4 h-4"
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
                used
              </span> */}
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Shipping</dt>
              lorem
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Dimensions (cm)</dt>
              lorem
            </dd>
            <dd className="bg-gray-100 p-2 rounded">
              <dt className="font-semibold text-lg">Item weight</dt>
              lorem
            </dd>
          </dl>
        </div>
        <div className="flex justify-start mt-2">
          <button
            onClick={handleModalToggle}
            type="button"
            className="inline-flex items-center border bg-transparent  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default TableBody;
