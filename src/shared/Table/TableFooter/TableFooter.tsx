/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
const TableFooter = ({ _config, data }) => {
  
  return (
    <nav
      className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 :text-gray-400">
        Showing
        <span className="font-semibold text-gray-900 :text-white">1-10</span>
        of
        <span className="font-semibold text-gray-900 :text-white">
          {data.items.length}
        </span>
      </span>
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <a className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white">
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white">
            1
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white">
            2
          </a>
        </li>
        <li>
          <a
            aria-current="page"
            className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 :border-gray-700 :bg-gray-700 :text-white"
          >
            3
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white">
            ...
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white">
            100
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white">
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TableFooter;
// TableFooter.propTypes = {
//   // You can declare that a prop is a specific JS primitive. By default, these
//   // are all optional.
//   optionalArray: PropTypes.array,
//   optionalBigInt: PropTypes.bigint,
//   optionalBool: PropTypes.bool,
//   optionalFunc: PropTypes.func,
//   optionalNumber: PropTypes.number,
//   optionalObject: PropTypes.object,
//   optionalString: PropTypes.string,
//   optionalSymbol: PropTypes.symbol,

//   // Anything that can be rendered: numbers, strings, elements or an array
//   // (or fragment) containing these types.
//   // see https://reactjs.org/docs/rendering-elements.html for more info
//   optionalNode: PropTypes.node,

//   // A React element (ie. <MyComponent />).
//   optionalElement: PropTypes.element,

//   // A React element type (eg. MyComponent).
//   // a function, string, or "element-like" object (eg. React.Fragment, Suspense, etc.)
//   // see https://github.com/facebook/react/blob/HEAD/packages/shared/isValidElementType.js
//   optionalElementType: PropTypes.elementType,

//   // You can also declare that a prop is an instance of a class. This uses
//   // JS's instanceof operator.
//   // optionalMessage: PropTypes.instanceOf(Message),

//   // You can ensure that your prop is limited to specific values by treating
//   // it as an enum.
//   optionalEnum: PropTypes.oneOf(["News", "Photos"]),

//   // An object that could be one of many types
//   optionalUnion: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     // PropTypes.instanceOf(Message),
//   ]),

//   // An array of a certain type
//   optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

//   // An object with property values of a certain type
//   optionalObjectOf: PropTypes.objectOf(PropTypes.number),

//   // You can chain any of the above with `isRequired` to make sure a warning
//   // is shown if the prop isn't provided.

//   // An object taking on a particular shape
//   optionalObjectWithShape: PropTypes.shape({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired,
//   }),

//   // An object with warnings on extra properties
//   optionalObjectWithStrictShape: PropTypes.exact({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired,
//   }),

//   requiredFunc: PropTypes.func.isRequired,

//   // A value of any data type
//   requiredAny: PropTypes.any.isRequired,

//   // You can also specify a custom validator. It should return an Error
//   // object if the validation fails. Don't `console.warn` or throw, as this
//   // won't work inside `oneOfType`.
//   customProp: function (props, propName, componentName) {
//     if (!/matchme/.test(props[propName])) {
//       return new Error(
//         "Invalid prop `" +
//           propName +
//           "` supplied to" +
//           " `" +
//           componentName +
//           "`. Validation failed."
//       );
//     }
//   },
// };
