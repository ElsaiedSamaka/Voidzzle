import { TabContext } from "core/context/TabContext";
import React, { useContext } from "react";
import { Table } from "shared";

const Content = () => {
  const { state } = useContext(TabContext);
  const { selectedTabIndex } = state;
  return (
    <div>
      {selectedTabIndex === 0 && <Table title="Products" _actions={false} />}
      {selectedTabIndex === 1 && <Table title="Users" _head={false} />}
      {selectedTabIndex === 2 && (
        <Table title="Tasks" _body={false} _addetion={false} />
      )}
      {selectedTabIndex === 3 && (
        <Table title="Sales" _footer={false} _search={false} />
      )}
      {selectedTabIndex === 4 && <Table title="Ads" />}
    </div>
  );
};

export default Content;
