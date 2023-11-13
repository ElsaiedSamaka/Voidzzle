import { useForm, useFieldArray } from "react-hook-form";
import PropTypes from "prop-types";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";

import styles from "./Form.module.css";
import { useFormStateContext } from "./shared/FormContext";
import { useThemeContext } from "core/context/ThemeContext";
import classNames from "classnames";

interface IFromProps {
  defaultValues: Object;
  formFields: any[];
  children: React.ReactNode;
}
const Form = ({ defaultValues, formFields, children }: IFromProps) => {
  const { register, handleSubmit, formState, reset, watch } = useForm({
    defaultValues,
    mode: "onBlur",
  });
  const { errors, isValid, isDirty, isSubmitting } = formState;
  const formValue = watch();
  const { state, dispatch } = useFormStateContext();
  const { theme } = useThemeContext();
  const { mode } = theme;
  const submit = (formData) => {
    // handleDispatch(formData);
    // handleModalToggle();
  };
  const handleReset = () => {
    reset(defaultValues);
  };
  function handleChange() {
    dispatch({
      type: "CHANGE",
      formState: {
        errors,
        isValid,
        isDirty,
        isSubmitting,
      },
      formValue: {
        ...formValue,
      },
    });
  }
  return (
    <>
      <form
        onChange={() => {
          handleChange();
        }}
        onSubmit={handleSubmit(submit)}
        className={classNames("mt-2 flex flex-col w-full h-fit", {
          "text-dark-textSecondary": mode === "dark",
          "text-light-textSecondary": mode === "light",
        })}
      >
        {/* Form fields */}
        <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-4">
          {formFields.map((field, i) => {
            return (
              <>
                {field.type == "text" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize  " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <input
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      type={field.type}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    />
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "date" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <input
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      type={field.type}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    />
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "checkbox" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    <label className={styles.checkboxbtn}>
                      <label htmlFor={field.label}>{field.label}</label>
                      <input id={field.id} type={field.type} />
                      <span className={styles.checkmark}></span>
                    </label>
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "select" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <select
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    >
                      <option selected>Select</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "text-area" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}

                    <textarea
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                    ></textarea>
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "password" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <input
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      type={field.type}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    />
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "file" && (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-center w-full col-span-2"
                  >
                    <label className="capitalize  font-semibold">
                      {field.label}
                    </label>
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 :text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 :text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 :text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
                {field.type == "radio" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <input
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      type={field.type}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    />
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "tel" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <input
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      type={field.type}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    />
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "range" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <input
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      type={field.type}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    />
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "email" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group col-span-full"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <input
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      type={field.type}
                      placeholder={field.placholder}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    />
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == "number" && (
                  <div
                    key={i}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    <input
                      className={classNames(
                        "p-2 rounded-md border font-normal",
                        { "border-red-500": errors[field.name] },
                        {
                          "bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800":
                            mode === "dark",
                          "bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100":
                            mode === "light",
                        }
                      )}
                      name={field.name}
                      id={field.id}
                      type={field.type}
                      placeholder={field.placholder}
                      {...register(field.name, {
                        required: {
                          value: field.required,
                          message: "this is a required field",
                        },
                        pattern: field.pattern,
                        maxLength: field.maxLength,
                        minLength: field.minLength,
                        validate: field.validation?.reduce((acc, validator) => {
                          return {
                            ...acc,
                            ...validator,
                          };
                        }, {}),
                      })}
                    />
                    {errors[field.name] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                )}
              </>
            );
          })}
        </div>
        {/* Form fields */}

        {/* Buttons */}
        <div className="flex mr-auto gap-x-2">
          {children}
          {/* <button
            className="inline-flex items-center text-white border bg-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            disabled={!isValid || !isDirty || !isSubmitting}
            type="submit"
          >
            Save
          </button>
          {handleModalToggle && (
            <button
              onClick={handleModalToggle}
              type="button"
              className="inline-flex items-center text-gray-500 border bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
          )} */}
        </div>
        {/* Buttons */}
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};
// Form.propTypes = {
//   formActions: {
//     handleModalToggle: PropTypes.func,
//     handleDispatch: PropTypes.func.isRequired,
//   },
//   formFields: PropTypes.array.isRequired,
//   defaultValues: PropTypes.object.isRequired,
// };

export default Form;

// const handleSetName = () => {
//   setValue("name", "test", {
//     shouldValidate: true,
//     shouldDirty: true,
//   });
// };

//  <button type="button" onClick={handleReset}>
//    reset
//  </button>;

// const { fields, append, remove } = useFieldArray({
//   name: "array",
//   control,
// });

//  {
//    /* Dynamic fields */
//  }
//  {
//    fields.map((field, i) => (
//      <div key={field.id}>
//        <input
//          type="number"
//          id={`price_${i}`}
//          placeholder="$2999"
//          {...register(`array.${i}.field`, {
//            valueAsNumber: true,
//            required: {
//              value: true,
//              message: "price is required",
//            },
//            validate: {
//              notZero: (val) => {
//                if (val === 0) {
//                  return "price cannot be zero";
//                }
//              },
//            },
//          })}
//        />
//        {i > 0 && (
//          <button type="button" onClick={() => remove(i)}>
//            remove
//          </button>
//        )}
//      </div>
//    ));
//  }
//  <button type="button" onClick={() => append({ field: null })}>
//    add
//  </button>;
//  {
//    /* Dynamic fields */
//  }

// Form.propTypes = {
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
