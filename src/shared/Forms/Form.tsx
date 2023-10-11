import { createTodoThunk } from "core/store/todos/todos.thunk";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";
const Form = () => {
  const { register, handleSubmit, formState, control, watch, setValue, reset } =
    useForm({
      defaultValues: {
        name: "product name",
        brand: "",
        price: 1,
        date: null,
        category: "",
        description: "",
        test: {
          temp1: "",
          temp2: "",
        },
        array: [{ field: null }],
      },
      mode: "onBlur",
    });
  const { errors, isValid, isLoading, isDirty, isSubmitted, isSubmitting } =
    formState;
  const { fields, append, remove } = useFieldArray({
    name: "array",
    control,
  });
  const dispatch = useDispatch();
  const watchBrand = watch("brand");
  const handleSetName = () => {
    setValue("name", "test", {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const handleReset = () => {
    reset({
      name: "product name",
      brand: "",
      price: 1,
      date: null,
      category: "",
      description: "",
      test: {
        temp1: "",
        temp2: "",
      },
      array: [{ field: null }],
    });
  };
  function submit(formData: any) {
    console.log("formData", formData);
    // dispatch(createTodoThunk(formData));
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>watchBrand:{watchBrand}</div>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Type product name"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
                validate: (val) => {
                  if (val == "name") {
                    return "Enter different product name";
                  }
                },
              })}
            />
            {errors.name && (
              <p className="text-red-900">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              id="brand"
              placeholder="Product brand"
              {...register("brand", {
                required: {
                  value: true,
                  message: "brand is required",
                },
                disabled: true,
                validate: {
                  asyncValidate: (val) => {
                    if (val == "brand") {
                      return "Enter different product brand";
                    }
                  },
                },
              })}
            />
            {errors.brand && (
              <p className="text-red-900">{errors.brand.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="temp1">Temp1</label>
            <input
              type="text"
              id="temp1"
              placeholder="Type product name"
              {...register("test.temp1", {
                required: {
                  value: true,
                  message: "temp1 is required",
                },
                validate: (val) => {
                  if (val == "name") {
                    return "Enter different product name";
                  }
                },
              })}
            />
            {errors.test && (
              <p className="text-red-900">{errors.test["temp1"]?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="temp2">Temp2</label>
            <input
              type="text"
              id="temp2"
              placeholder="Type product name"
              {...register("test.temp2", {
                required: {
                  value: true,
                  message: "temp2 is required",
                },
                validate: (val) => {
                  if (val == "name") {
                    return "Enter different product name";
                  }
                },
              })}
            />
            {errors.test && (
              <p className="text-red-900">{errors.test["temp2"]?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              placeholder="$2999"
              {...register("price", {
                required: {
                  value: true,
                  message: "price is required",
                },
                validate: {
                  notZero: (val) => {
                    if (val == 0) {
                      return "price cannot be zero";
                    }
                  },
                },
              })}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              {...register("date", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "data is required",
                },
                // validate: {
                //   notZero: (val) => {
                //     if (val == 0) {
                //       return "price cannot be zero";
                //     }
                //   },
                // },
              })}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
              {...register("category", {
                required: {
                  value: true,
                  message: "category is required",
                },
              })}
            >
              <option value="">Select category</option>
              <option value="TV">TV/Monitors</option>
              <option value="PC">PC</option>
              <option value="GA">Gaming/Console</option>
              <option value="PH">Phones</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows={4}
              placeholder="Write product description here"
              {...register("description", {
                minLength: {
                  value: 12,
                  message: "min length is 12",
                },
                maxLength: {
                  value: 20,
                  message: "max length is 20",
                },
              })}
            />
          </div>
          {/* dynamic fields */}
          {fields.map((field, i) => {
            return (
              <div key={field.id}>
                {" "}
                <input
                  type="number"
                  id="price"
                  placeholder="$2999"
                  {...register(`array.${i}.field`, {
                    valueAsNumber: true,
                    required: {
                      value: true,
                      message: "price is required",
                    },
                    validate: {
                      notZero: (val) => {
                        if (val == 0) {
                          return "price cannot be zero";
                        }
                      },
                    },
                  })}
                />
                {i > 0 && (
                  <button type="button" onClick={() => remove(i)}>
                    remove
                  </button>
                )}
              </div>
            );
          })}
          <button type="button" onClick={() => append({ field: null })}>
            add
          </button>
          {/* dynamic fields */}
        </div>
        <button type="button" onClick={handleReset}>
          reset
        </button>
        <br />
        <button type="button" onClick={handleSetName}>
          setName
        </button>
        <button disabled={!isValid || !isDirty || !isSubmitting} type="submit">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add new product
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
