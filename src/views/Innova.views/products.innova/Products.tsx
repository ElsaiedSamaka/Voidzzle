import { RootState } from "core/store";
import {
  createProductThunk,
  getProductsThunk,
} from "core/store/products/products.thunk";
import { getTodosThunk } from "core/store/todos/todos.thunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "shared";

const Products = () => {
  const productsSlice = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const handleDispatch = (data: any) => {
    dispatch(createProductThunk(data));
  };
  const th = [
    { label: "name", id: 1 },
    { label: "category", id: 2 },
    { label: "stock", id: 3 },
    { label: "salesPerDay", id: 4 },
    { label: "Sales/Month", id: 5 },
    { label: "rating", id: 6 },
    { label: "Sales", id: 7 },
    { label: "Revenue", id: 8 },
    { label: "Last update", id: 9 },
  ];
  // get todos from api just when component is mounted
  useEffect(() => {
    dispatch(getProductsThunk([]));
  }, [dispatch]);
  const formFields = [
    {
      name: "name",
      label: "name",
      id: "name",
      type: "text",
      // required: true,
      // maxLength: 20,
      // minLength: 10,
      // validation: [
      //   {
      //     isName: (val) => {
      //       if (val === "name") {
      //         return "Enter a different product name";
      //       }
      //     },
      //   },
      // ],
    },
    {
      name: "category",
      label: "category",
      id: "category",
      type: "select",
      // required: true,
      // maxLength: 20,
      // minLength: 10,
      // validation: [],
    },
    {
      name: "price",
      label: "price",
      id: "price",
      type: "number",
      // required: true,
      // maxLength: 20,
      // minLength: 10,
      // validation: [],
    },

    {
      name: "stock",
      label: "stock",
      id: "stock",
      type: "number",
      // required: true,
      // maxLength: 20,
      // minLength: 10,
      // validation: [],
    },
    {
      name: "description",
      label: "description",
      id: "description",
      type: "text-area",
      // required: true,
      // maxLength: 20,
      // minLength: 10,
      // validation: [],
    },
    {
      name: "product_img",
      label: "product imgs",
      id: "product_img",
      type: "file",
      required: false,
    },
    {
      name: "availablity",
      label: "availablity",
      id: "availablity",
      type: "checkbox",
      // required: true,
      // validation: [],
    },
  ];
  const defaultValues = {
    name: "",
    brand: "",
    price: 0,
    category: "",
    description: "",
  };
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
        _body: {
          isTrue: true,
          perPage: 7,
          _th: th,
        },
        _footer: { isTrue: true },
        _multiSelect: true,
        _extenstions: { actionsColumns: true },
      }}
      data={productsSlice}
      defaultValues={defaultValues}
      formFields={formFields}
      handleDispatch={handleDispatch}
    />
  );
};

export default Products;
