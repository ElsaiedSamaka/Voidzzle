import { useDebounce } from "core/hooks";
import { RootState } from "core/store";
import {
  createProductThunk,
  deleteAllProductsThunk,
  getProductsThunk,
  searchProductsThunk,
  updateProductThunk,
} from "core/store/products/products.thunk";
import { getTodosThunk } from "core/store/todos/todos.thunk";
import Validators from "core/validators";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "shared";
import { useSelectedItems } from "shared/Table/shared/context/SelectedItemsContext";

const Products = () => {
  const productsSlice = useSelector((state: RootState) => state.products);
  const { state, dispatch: dispatchSelectedItems } = useSelectedItems();
  const { items } = state;
  const dispatch = useDispatch();
  const handleAddetionDispatch = (data: any) => {
    dispatch(createProductThunk(data));
  };
  const handleUpdateDispatch = (data) => {
    dispatch(updateProductThunk(data));
  };
  const handleDeleteAll = ()=> {
    const ids = items.map((item) => item.id);
    dispatch(deleteAllProductsThunk(ids));
    dispatchSelectedItems({
      type: "reset",
    });
  }
  const handleItemsSearch = (query:string) => {
    dispatch(searchProductsThunk(query));
  }
  const th = [
    { label: "name", id: 1 },
    { label: "category", id: 2 },
    { label: "stock", id: 3 },
    { label: "brand", id: 4 },
    { label: "Sales/Month", id: 5 },
    { label: "rating", id: 6 },
    { label: "sales", id: 7 },
    { label: "price", id: 8 },
    { label: "updatedAt", id: 9 },
  ];
  // get products from api just when component is mounted
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
  const formFields = [
    {
      name: "name",
      label: "name",
      id: "name",
      type: "text",
      required: true,
      maxLength: 20,
      minLength: 10,
      validation: [
        {
          isName: (val) => {
            if (val === "name") {
              return "Enter a different product name";
            }
          },
        },
      ],
    },
    {
      name: "category",
      label: "category",
      id: "category",
      type: "select",
      required: true,
      validation: [],
    },
    {
      name: "brand",
      label: "brand",
      id: "brand",
      type: "text",
      required: true,
      validation: [],
    },
    {
      name: "price",
      label: "price",
      id: "price",
      type: "number",
      required: true,
      validation: [
        {
          isNotZero: (val: number) => {
            Validators.isNotZero(val, "product");
          },
          isNotNegative: (val: number) => {
            Validators.isNotNegative(val, "product");
          },
        },
      ],
    },
    {
      name: "stock",
      label: "stock",
      id: "stock",
      type: "number",
      required: true,
      validation: [
        {
          isNotZero: (val: number) => {
            Validators.isNotZero(val, "product");
          },
          isNotNegative: (val: number) => {
            Validators.isNotNegative(val, "product");
          },
        },
      ],
    },
    {
      name: "weight",
      label: "weight (Kg)",
      id: "weight",
      type: "number",
      validation: [
        {
          isNotZero: (val: number) => {
            Validators.isNotZero(val, "product");
          },
          isNotNegative: (val: number) => {
            Validators.isNotNegative(val, "product");
          },
        },
      ],
    },
    {
      name: "length",
      label: "Length (cm)",
      id: "length",
      type: "number",
      validation: [
        {
          isNotZero: (val: number) => {
            Validators.isNotZero(val, "product");
          },
          isNotNegative: (val: number) => {
            Validators.isNotNegative(val, "product");
          },
        },
      ],
    },
    {
      name: "breadth",
      label: "Breadth (cm)",
      id: "breadth",
      type: "number",
      validation: [
        {
          isNotZero: (val: number) => {
            Validators.isNotZero(val, "product");
          },
          isNotNegative: (val: number) => {
            Validators.isNotNegative(val, "product");
          },
        },
      ],
    },
    {
      name: "width",
      label: "Width (cm)",
      id: "width",
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
      required: true,
      maxLength: 2000,
      minLength: 10,
      validation: [],
    },
    {
      name: "product_imgs",
      label: "product images",
      id: "product_imgs",
      type: "file",
      required: false,
    },
  ];
  const defaultValues = {};
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
      handleAddetionDispatch={handleAddetionDispatch}
      handleUpdateDispatch={handleUpdateDispatch}
      handleDeleteAllDispatch={handleDeleteAll}
      handleSearchDispatch={handleItemsSearch}
    />
  );
};

export default Products;
