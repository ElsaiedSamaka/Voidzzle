import { RootState } from "core/store";
import {
  createUserThunk,
  getUsersThunk,
  updateUserThunk,
} from "core/store/users/users.thunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "shared";
import { useSelectedItems } from "shared/Table/shared/context/SelectedItemsContext";

const Users = () => {
  const usersSlice = useSelector((state: RootState) => state.users);
  // const brandsSlice = useSelector((state: RootState) => state.brands);
  const { state, dispatch: dispatchSelectedItems } = useSelectedItems();
  const { items } = state;
  const dispatch = useDispatch();
  const handleAddetionDispatch = (data: any) => {
    dispatch(createUserThunk(data));
  };
  const handleUpdateDispatch = (data) => {
    dispatch(updateUserThunk(data));
  };
  const handleDeleteAll = () => {
    const ids = items.map((item) => item.id);
    // dispatch(deleteAllProductsThunk(ids));
    dispatchSelectedItems({
      type: "reset",
    });
  };
  const handleItemsSearch = (query: string) => {
    //  dispatch(searchProductsThunk(query));
  };
  const handleGetBrandsDispatch = () => {
    //  dispatch(getBrandsThunk());
  };
  const th = [
    { label: "email", id: 1 },
    { label: "phonenumber", id: 2 },
    { label: "birthdate", id: 3 },
    { label: "address", id: 4 },
    { label: "firstname", id: 5 },
    { label: "lastname", id: 6 },
  ];
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);
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
      name: "availablity",
      label: "availablity",
      id: "availablity",
      type: "checkbox",
      // required: true,
      // validation: [],
    },
    {
      name: "product_img",
      id: "product_img",
      type: "file",
      required: false,
    },
  ];
  const defaultValues = {
    name: "product name",
    brand: "",
    price: 1,
    date: null,
    category: "",
    description: "",
    test: {
      temp1: "",
      temp2: "",
    },
    array: [{ field: null }],
  };
  return (
    <Table
      _config={{
        title: "Users",
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
        _multiSelect: false,
        _extenstions: { actionsColumns: true },
      }}
      data={usersSlice}
      filterData={true}
      defaultValues={defaultValues}
      formFields={formFields}
      handleAddetionDispatch={handleAddetionDispatch}
      handleUpdateDispatch={handleUpdateDispatch}
      handleDeleteAllDispatch={handleDeleteAll}
      handleSearchDispatch={handleItemsSearch}
      handleGetFilterationDispatch={handleGetBrandsDispatch}
    />
  );
};

export default Users;
