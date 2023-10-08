import { TabContext } from "core/context/TabContext";
import React, { useContext } from "react";
import { Table } from "shared";

const Content = () => {
  const { state } = useContext(TabContext);
  const { selectedTabIndex } = state;
  return (
    <div>
      {selectedTabIndex === 0 && <Table _config={{ _title: "Products" }} />}
      {selectedTabIndex === 1 && (
        <Table _config={{ _title: "Users" }} _head={false} />
      )}
      {selectedTabIndex === 2 && (
        <Table _config={{ _title: "Products" }}  _body={false} />
      )}
      {selectedTabIndex === 3 && (
        <Table _config={{ _title: "Sales" }} _footer={false} />
      )}
      {selectedTabIndex === 4 && <Table _config={{ _title: "Ads" }} />}
    </div>
  );
};

export default Content;
