import React from 'react'

const TableBody = ({_config}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 :text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
          <tr>
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
            <th scope="col" className="px-4 py-3">
              Product
            </th>
            <th scope="col" className="px-4 py-3">
              Category
            </th>
            <th scope="col" className="px-4 py-3">
              Stock
            </th>
            <th scope="col" className="px-4 py-3">
              Sales/Day
            </th>
            <th scope="col" className="px-4 py-3">
              Sales/Month
            </th>
            <th scope="col" className="px-4 py-3">
              Rating
            </th>
            <th scope="col" className="px-4 py-3">
              Sales
            </th>
            <th scope="col" className="px-4 py-3">
              Revenue
            </th>
            <th scope="col" className="px-4 py-3">
              Last Update
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(_config.perPage)].map((item, i) => {
            return (
              <tr
                key={i}
                className="border-b :border-gray-600 hover:bg-gray-100 :hover:bg-gray-700"
              >
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
                <th
                  scope="row"
                  className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap :text-white"
                >
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                    alt="iMac Front Image"
                    className="w-auto h-8 mr-3"
                  />
                  Apple iMac 27"
                </th>
                <td className="px-4 py-2">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded :bg-primary-900 :text-primary-300">
                    Desktop PC
                  </span>
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap :text-white">
                  <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full" />
                    95
                  </div>
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap :text-white">
                  1.47
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap :text-white">
                  0.47
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap :text-white">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-500 :text-gray-400">
                      5.0
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap :text-white">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 text-gray-400"
                      aria-hidden="true"
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    1.6M
                  </div>
                </td>
                <td className="px-4 py-2">$3.2M</td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap :text-white">
                  Just now
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableBody