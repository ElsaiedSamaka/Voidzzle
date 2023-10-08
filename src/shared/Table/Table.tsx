import { RootState } from "core/store";
import { getTodosThunk } from "core/store/todos/todos.thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableFooter from "./TableFooter/TableFooter";
import { title } from "process";

const Table = ({
  _config = {
    title: "",
    _head: {
      isTrue:true
    },
    _body: {
      isTrue:true
    },
    _footer: {
      isTrue:true
    },
    _perPage: 5,
  },
}) => {
  // const dispatch = useDispatch();
  // const todosSlice = useSelector((state: RootState) => state.todos);
  // get todos from api just when component is mounted
  // useEffect(() => {
  //   dispatch(getTodosThunk());
  // }, [dispatch]);
  return (
    // <div>
    //   Table
    //   {/* <button onClick={() => dispatch(getTodosThunk())}>click me</button>
    //   <ul>
    //     {todosSlice.loading && <li>loading...</li>}
    //     {todosSlice.error && <li>error...</li>}
    //     {todosSlice.todos.map((todo) => (
    //       <li key={todo.id}>{todo.title}</li>
    //     ))}
    //   </ul> */}
    // </div>
    <div className=" mx-auto max-w-screen-2xl my-2">
      <div className="relative overflow-hidden bg-white shadow rounded-md">
        {/* table head */}
        {_config._head.isTrue && <TableHead _config={{ title: _config.title }} />}
        {/* table head */}
        {/* table body */}
        {_config._body.isTrue && (
          <TableBody _config={{ _perPage: _config._perPage }} />
        )}
        {/* table body */}
        {/* table footer */}
        {_config._footer.isTrue && <TableFooter _config={{}} />}
        {/* table footer */}
      </div>
    </div>
  );
};

export default Table;

