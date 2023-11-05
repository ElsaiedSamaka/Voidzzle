import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "core/store";
import { createProductThunk } from "core/store/products/products.thunk";
import styles from "./Form.module.css";
const Form = ({
  formActions: { handleModalToggle, handleDispatch },
  defaultValues,
  formFields,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    control,
    reset,
    watch,
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const submit = (formData) => {
    handleDispatch(formData);
    handleModalToggle();
  };
  const handleReset = () => {
    reset(defaultValues);
  };
  const watchForm = watch();
  console.log("errors", errors);
  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="mt-2 flex flex-col w-full h-fit"
      >
        {/* Form fields */}
        <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-4">
          {formFields.map((field, i) => {
            return (
              <>
                {field.type == "text" && (
                  <div className="input flex flex-col w-full font-semibold group col-span-2">
                    {field.label && (
                      <label
                        className="capitalize  text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <input
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal bg-gray-50 hover:bg-gray-100`}
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
                  <div className="input flex flex-col w-full font-semibold group col-span-2">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <input
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal bg-gray-50 hover:bg-gray-100`}
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
                  <div className="input flex flex-col w-full font-semibold group">
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
                  <div className="input flex flex-col w-full font-semibold group col-span-2">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <select
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal bg-gray-50 hover:bg-gray-100`}
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
                  <div className="input flex flex-col w-full font-semibold group col-span-2">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}

                    <textarea
                      className={`p-2 w-full rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal bg-gray-50 hover:bg-gray-100 h-32`}
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
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <input
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal bg-gray-50 hover:bg-gray-100`}
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
                  <div className="flex flex-col items-start justify-center w-full col-span-2">
                    <label className="capitalize text-gray-900 font-semibold">
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
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <input
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal`}
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
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <input
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal bg-gray-50 hover:bg-gray-100`}
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
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <input
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal`}
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
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <input
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal bg-gray-50 hover:bg-gray-100`}
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
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label
                        className="capitalize text-gray-900"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    )}
                    <input
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal bg-gray-50 hover:bg-gray-100`}
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
          <button
            className="inline-flex items-center text-white border bg-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            // disabled={!isValid || !isDirty || !isSubmitting}
            type="submit"
          >
            Save
          </button>
          <button
            onClick={handleModalToggle}
            type="button"
            className="inline-flex items-center text-gray-500 border bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Cancel
          </button>
        </div>
        {/* Buttons */}
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

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
