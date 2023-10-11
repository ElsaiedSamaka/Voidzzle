import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";

const ReusableForm = ({ defaultValues, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    control,
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

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
    reset(defaultValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>watchBrand: {watchBrand}</div>
        {/* Form fields */}
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
                  if (val === "name") {
                    return "Enter a different product name";
                  }
                },
              })}
            />
            {errors.name && (
              <p className="text-red-900">{errors.name.message}</p>
            )}
          </div>
          {/* Add other form fields here */}
        </div>
        {/* Form fields */}

        {/* Dynamic fields */}
        {fields.map((field, i) => (
          <div key={field.id}>
            <input
              type="number"
              id={`price_${i}`}
              placeholder="$2999"
              {...register(`array.${i}.field`, {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "price is required",
                },
                validate: {
                  notZero: (val) => {
                    if (val === 0) {
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
        ))}
        <button type="button" onClick={() => append({ field: null })}>
          add
        </button>
        {/* Dynamic fields */}

        {/* Buttons */}
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
        {/* Buttons */}
      </form>
      <DevTool control={control} />
    </>
  );
};

export default ReusableForm;
