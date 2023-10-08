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
          _config={{ _title: "Products" }}
          title="Products"
          _actions={false}
        />
      )}
      {selectedTabIndex === 1 && (
        <Table _config={{ _title: "Products" }} title="Users" _head={false} />
      )}
      {selectedTabIndex === 2 && (
        <Table
          _config={{ _title: "Products" }}
          title="Tasks"
          _body={false}
          _addetion={false}
        />
      )}
      {selectedTabIndex === 3 && (
        <Table
          _config={{ _title: "Products" }}
          title="Sales"
          _footer={false}
          _search={false}
        />
      )}
      {selectedTabIndex === 4 && (
        <Table _config={{ _title: "Products" }} title="Ads" />
      )}
    </div>
  );
};

export default Content;
