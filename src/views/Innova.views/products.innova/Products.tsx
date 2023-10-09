import { RootState } from "core/store";
import { getTodosThunk } from "core/store/todos/todos.thunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "shared";

const Products = () => {
  const dispatch = useDispatch();
  const todosSlice = useSelector((state: RootState) => state.todos);
  console.log("todoSlice", todosSlice);
  // get todos from api just when component is mounted
  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);
  return (
    <Table
      _config={{
        title: "Products",
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
        _body: { isTrue: true, perPage: 7 },
        _footer: { isTrue: true },
      }}
      data={[]}
    />
  );
};

export default Products;
