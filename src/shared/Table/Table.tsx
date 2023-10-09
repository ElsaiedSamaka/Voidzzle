import { RootState } from "core/store";
import { getTodosThunk } from "core/store/todos/todos.thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableFooter from "./TableFooter/TableFooter";

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
      _th: [],
    },
    _footer: {
      isTrue: true,
    },
    _multiSelect: false,
  },
  data,
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
            data={data}
          />
        )}
        {/* table head */}
        {/* table body */}
        {_config._body.isTrue && (
          <TableBody
            _config={{
              perPage: _config._body.perPage,
              multiSelect: _config._multiSelect,
              th: _config._body._th,
            }}
            data={data}
          />
        )}
        {/* table body */}
        {/* table footer */}
        {_config._footer.isTrue && <TableFooter _config={{}} data={data} />}
        {/* table footer */}
      </div>
    </div>
  );
};

export default Table;

