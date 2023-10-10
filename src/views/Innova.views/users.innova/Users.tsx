import { RootState } from "core/store";
import { getUsersThunk } from "core/store/users/users.thunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "shared";

const Users = () => {
  const dispatch = useDispatch();
  const usersSlice = useSelector((state: RootState) => state.users);
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
  }, [dispatch]);

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
      }}
      data={usersSlice}
    />
  );
};

export default Users;
