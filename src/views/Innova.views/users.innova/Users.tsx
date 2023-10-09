import React from 'react'
import { Table } from 'shared';

const Users = () => {
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
        _body: { isTrue: true, perPage: 7, _th: [] },
        _footer: { isTrue: true },
        _multiSelect: false,
      }}
      data={[]}
    />
  );
}

export default Users