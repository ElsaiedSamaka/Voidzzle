import { RootState } from "core/store";
import { getTodosThunk } from "core/store/todos/todos.thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const dispatch = useDispatch();
  const todosSlice = useSelector((state: RootState) => state.todos);
  // get todos from api just when component is mounted
  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);
  return (
    <div>
      Table
      <button onClick={() => dispatch(getTodosThunk())}>click me</button>
      <ul>
        {todosSlice.loading && <li>loading...</li>}
        {todosSlice.error && <li>error...</li>}
        {todosSlice.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
