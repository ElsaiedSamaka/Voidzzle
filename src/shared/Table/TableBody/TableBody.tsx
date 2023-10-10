import React from 'react'

const TableBody = ({ _config, data }) => {
  console.log("_config", _config);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 :text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
          <tr>
            {_config._multiSelect && (
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
                <th key={i} scope="col" className="px-4 py-3">
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.Loading && <tr>Loading...</tr>}
          {data.error && <tr>Error</tr>}
          {data.items.map((item, i) => {
            return (
              <>
                <tr className="border-b" key={item.id}>
                  {_config._multiSelect && (
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
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody