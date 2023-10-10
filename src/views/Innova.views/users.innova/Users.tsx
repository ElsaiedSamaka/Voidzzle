import { RootState } from "core/store";
import { getUsersThunk } from "core/store/users/users.thunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "shared";

const Users = () => {
  const dispatch = useDispatch();
  const usersSlice = useSelector((state: RootState) => state.users);
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
          _th: [
            { label: "Email" },
            { label: "phonenumber" },
            { label: "birthdate" },
            { label: "address" },
            { label: "firstname" },
            { label: "lastname" },
          ],
        },
        _footer: { isTrue: true },
        _multiSelect: false,
      }}
      data={usersSlice}
    />
  );
};

export default Users;
