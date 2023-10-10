import { createTodoThunk } from "core/store/todos/todos.thunk";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";
const Form = () => {
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  function submit(formData: any) {
    console.log("formData", formData);
    // dispatch(createTodoThunk(formData));
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 :text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
              placeholder="Type product name"
              {...register("name")}
            />
          </div>
          <div>
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 :text-white"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
              placeholder="Product brand"
              {...register("brand")}
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 :text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
              placeholder="$2999"
              {...register("price")}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 :text-white"
            >
              Category
            </label>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
              {...register("category")}
            >
              <option value="select">Select category</option>
              <option value="TV">TV/Monitors</option>
              <option value="PC">PC</option>
              <option value="GA">Gaming/Console</option>
              <option value="PH">Phones</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 :text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
              placeholder="Write product description here"
              defaultValue={""}
              {...register("description")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <svg
            className="mr-1 -ml-1 w-6 h-6"
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
