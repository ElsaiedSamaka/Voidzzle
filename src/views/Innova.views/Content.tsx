import { TabContext } from "core/context/TabContext";
import React, { useContext } from "react";
import { Table } from "shared";

const Content = () => {
  const { state } = useContext(TabContext);
  const { selectedTabIndex } = state;
  return (
    <div>
      {selectedTabIndex === 0 && (
        <Table
          _config={{
            title: "Products",
            _head: true,
            _body: true,
            _perPage: 10,
            _footer: true,
          }}
        />
      )}
      {selectedTabIndex === 1 && (
        <Table
          _config={{
            title: "Users",
            _head: true,
            _body: true,
            _perPage: 10,
            _footer: true,
          }}
        />
      )}
      {selectedTabIndex === 2 && (
        <Table
          _config={{
            title: "Products",
            _head: true,
            _body: true,
            _perPage: 10,
            _footer: true,
          }}
        />
      )}
      {selectedTabIndex === 3 && (
        <Table
          _config={{
            title: "Sales",
            _head: true,
            _body: true,
            _perPage: 10,
            _footer: true,
          }}
        />
      )}
      {selectedTabIndex === 4 && (
        <Table
          _config={{
            title: "Ads",
            _head: true,
            _body: true,
            _perPage: 10,
            _footer: true,
          }}
        />
      )}
    </div>
  );
};

export default Content;
