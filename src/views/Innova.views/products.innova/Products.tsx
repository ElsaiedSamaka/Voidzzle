import { RootState } from "core/store";
import { getProductsThunk } from "core/store/products/products.thunk";
import { getTodosThunk } from "core/store/todos/todos.thunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "shared";

const Products = () => {
  const dispatch = useDispatch();
  const productsSlice = useSelector((state: RootState) => state.products);
  // get todos from api just when component is mounted
  useEffect(() => {
    dispatch(getProductsThunk());
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
      data={productsSlice}
    />
  );
};

export default Products;
