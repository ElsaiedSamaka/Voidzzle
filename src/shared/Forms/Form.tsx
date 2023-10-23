import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "core/store";
import { createProductThunk } from "core/store/products/products.thunk";
import styles from "./Form.module.css"
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
    // mode: "onBlur",
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
        className="mt-2 flex flex-col w-fit h-fit"
      >
        {/* Form fields */}
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          {formFields.map((field, i) => {
            return (
              <>
                {field.type == "text" && (
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label className="capitalize" htmlFor={field.name}>
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
                {field.type == "date" && (
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label className="capitalize" htmlFor={field.name}>
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
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label className="capitalize" htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}
                    {/* className=
                    {`p-2 rounded-md border ${
                      errors[field.name] ? "border-red-500" : ""
                    } font-normal`} */}
                    <select
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal`}
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
                      <option value="volvo">Volvo</option>
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
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label className="capitalize" htmlFor={field.name}>
                        {field.label}
                      </label>
                    )}

                    <textarea
                      className={`p-2 rounded-md border ${
                        errors[field.name] ? "border-red-500" : ""
                      } font-normal`}
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
                      <label className="capitalize" htmlFor={field.name}>
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
                {field.type == "file" && (
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label className="capitalize" htmlFor={field.name}>
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
                {field.type == "radio" && (
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label className="capitalize" htmlFor={field.name}>
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
                      <label className="capitalize" htmlFor={field.name}>
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
                {field.type == "range" && (
                  <div className="input flex flex-col w-full font-semibold group">
                    {field.label && (
                      <label className="capitalize" htmlFor={field.name}>
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
                      <label className="capitalize" htmlFor={field.name}>
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
                      <label className="capitalize" htmlFor={field.name}>
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
        <div className="flex ml-auto gap-x-2">
          <button
            onClick={handleModalToggle}
            className="bg-red-300 w-fit ml-auto p-2 rounded-md"
          >
            cancel
          </button>
          <button
            className="bg-blue-300 w-fit ml-auto p-2 rounded-md disabled:bg-gray-400"
            // disabled={!isValid || !isDirty || !isSubmitting}
            type="submit"
          >
            Add new product
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