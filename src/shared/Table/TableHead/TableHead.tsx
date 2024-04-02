/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import classNames from 'classnames';
// Components
import Dailog from 'shared/Modals/Dailog/Dailog';
import Form from 'shared/Forms/Form';
// Hooks
import { useSelectedItems } from '../shared/context/SelectedItemsContext';
import { useDispatch,useSelector } from 'react-redux';
import { useDebounce } from 'core/hooks';
import { useState } from 'react';
// Thunks
import { RootState } from 'core/store';
import { deleteAllProductsThunk } from 'core/store/products/products.thunk';

const TableHead = ({
  _config,
  data,
  filterData,
  defaultValues,
  formFields,
  handleAddetionDispatch,
  handleDeleteAllDispatch,
  handleSearchDispatch,
  handleGetFilterationDispatch,
}: any) => {
  // Hooks
  const [searchInput, setSearchInput] = useState('');
  const [showAddModal, toggleAddetionModal] = useState(false);
  const [showActionsPopover, setShowActionsPopover] = useState(false);
  const [showFilterPopOver, setShowFilterPopOver] = useState(false);
  const { state:{items}, dispatch: dispatchSelectedItems } = useSelectedItems();
  const { theme:{mode} } = useThemeContext();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  // Methods
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
    !showFilterPopOver && handleGetFilterationDispatch();
  }
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
                    className="w-5 h-5 text-blue-500 "
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
                  className="bg-gray-50/10 border border-zinc-300/40  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                  placeholder={'Search over ' + _config.title}
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
                className="flex items-center justify-center capitalize text-white  bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 focus:outline-none "
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
                {t('general.add')} {_config.title}
              </button>
            )}

            <div className="flex items-center space-x-3 w-full md:w-auto">
              {_config.actions && (
                <>
                  <div className="relative">
                    <button
                      onClick={handleActionToggle}
                      id="actionsDropdownButton"
                      data-dropdown-toggle="actionsDropdown"
                      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium  focus:outline-none bg-white/20 rounded-lg border border-gray-200/30 hover:bg-gray-100/30 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
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
                        'absolute opacity-0 transition-opacity duration-300 top-10 z-10 w-44 bg-black rounded divide-y divide-gray-100/20 shadow',
                        { 'opacity-100': showActionsPopover },
                      )}
                      id="actionsDropdown"
                    >
                      <div className="py-1">
                        <a
                          onClick={handleDeleteAll}
                          className="block py-2 px-4 text-sm  hover:text-red-600 hover:cursor-pointer"
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
                      className="w-full mx-1 md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium  focus:outline-none bg-white/20 rounded-lg border border-gray-200/30 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
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
                        'absolute opacity-0 translate-y-0 transition-all duration-300 top-10 z-10 w-44 h-36 mx-1 overflow-clip rounded divide-y divide-gray-100/10 p-1 shadow-md',
                        { 'opacity-100 translate-y-1': showFilterPopOver },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                    >
                      <h6 className="mb-3 text-sm font-medium  ">
                        Choose one or more
                      </h6>
                      <ul
                        className="space-y-2 text-sm bg-white/10 h-full overflow-scroll"
                        aria-labelledby="filterDropdownButton"
                      >
                        {filterData.items.map((item: any) => (
                          <li key={item.id} className="flex items-center">
                            <input
                              id="apple"
                              type="checkbox"
                              defaultValue=""
                              className="w-4 h-4 bg-red-100/5 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                            />
                            <label
                              htmlFor="apple"
                              className="ml-2 text-sm font-medium "
                            >
                              {item.name} ({item.brands.length})
                            </label>
                          </li>
                        ))}
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
// Core
import useTranslation from 'core/hooks/useTranslation';

const DailogHeader = ({ handleModalToggle }: any) => {
  const { t } = useTranslation();
  return (
    <div className="dailog-header flex justify-between items-center border-b border-zinc-500/10 py-2">
      <h3 className="text-xl font-bold ">{t('products.add_new_product')}</h3>
      <div
        onClick={handleModalToggle}
        className="p-1 w-fit h-fit rounded-full text-white/50 bg-gray-50/10 hover:bg-gray-100/10 hover:cursor-pointer hover:/10"
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
import { useFormStateContext } from 'shared/Forms/shared/FormContext';

const DailogBody = ({
  handleModalToggle,
  handleAddetionDispatch,
  defaultValues,
  formFields,
}: any) => {
  // Hooks
  const {
    theme: { mode },
  } = useThemeContext();
  const { t } = useTranslation();
  const { state } = useFormStateContext();

  const {
    formState: { errors, isValid, isDirty, isSubmitting },
    formValue,
  } = state;
  return (
    <Form
      formActions={{
        handleModalToggle: handleModalToggle,
        handleDispatch: handleAddetionDispatch,
      }}
      formFields={formFields}
      defaultValues={defaultValues}
    >
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
          handleAddetionDispatch(formValue);
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
        {t('products.add_new_product')}
      </button>
    </Form>
  );
};
export default TableHead;
