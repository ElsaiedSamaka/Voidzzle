import React from 'react'
import { Table } from 'shared';

const Sales = () => {
  return (
    <Table
      _config={{
        title: "Sales",
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
}

export default Sales