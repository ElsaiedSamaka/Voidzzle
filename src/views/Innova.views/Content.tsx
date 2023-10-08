import { TabContext, useTabContext } from "core/context/TabContext";
import React, { useContext } from "react";
import { Table } from "shared";

const Content = () => {
  const { state } = useTabContext();
  const { selectedTabIndex } = state;
  return (
    <div>
      {selectedTabIndex === 0 && (
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
            },
            _body: { isTrue: true, perPage: 7 },
            _footer: { isTrue: true },
          }}
        />
      )}
      {selectedTabIndex === 1 && (
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
            },
            _body: { isTrue: true, perPage: 7 },
            _footer: { isTrue: true },
          }}
        />
      )}
      {selectedTabIndex === 2 && (
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
            },
            _body: { isTrue: true, perPage: 7 },
            _footer: { isTrue: true },
          }}
        />
      )}
      {selectedTabIndex === 3 && (
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
            },
            _body: { isTrue: true, perPage: 7 },
            _footer: { isTrue: true },
          }}
        />
      )}
      {selectedTabIndex === 4 && (
        <Table
          _config={{
            title: "Ads",
            _head: {
              show: true,
              _actions: {
                show: true,
                addtions: true,
                actions: true,
                filteration: true,
              },
            },
            _body: { isTrue: true, perPage: 7 },
            _footer: { isTrue: true },
          }}
        />
      )}
    </div>
  );
};

export default Content;
