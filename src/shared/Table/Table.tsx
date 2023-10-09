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
      show: true,
      _actions: {
        show: true,
        addtions: true,
        actions: true,
        filteration: true,
      },
      _search: {
        show: true,
      },
    },
    _body: {
      perPage: 5,
      isTrue: true,
    },
    _footer: {
      isTrue: true,
    },
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
        {_config._head.show && (
          <TableHead
            _config={{
              title: _config.title,
              _actions: _config._head._actions.show,
              addtion: _config._head._actions.addtions,
              actions: _config._head._actions,
              filteration: _config._head._actions.filteration,
              _search: _config._head._search.show,
            }}
          />
        )}
        {/* table head */}
        {/* table body */}
        {_config._body.isTrue && (
          <TableBody _config={{ perPage: _config._body.perPage }} />
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

