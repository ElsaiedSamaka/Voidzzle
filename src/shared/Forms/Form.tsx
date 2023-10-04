import { createTodoThunk } from "core/store/todos/todos.thunk";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  function submit(formData: any) {
    console.log("formData", formData);
    // dispatch(createTodoThunk({ data: { ...formData, userId: 0, id: 0 } }));
    dispatch(createTodoThunk(formData));
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register("title", { required: true })} />
        {errors.title && <p>title is required.</p>}
        <input type="checkbox" {...register("completed")} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Form;
