import { TabContext } from "core/context/TabContext";
import React, { useContext } from "react";
import { Table } from "shared";

const Content = () => {
  const { state } = useContext(TabContext);
  const { selectedTabIndex } = state;
  return (
    <div>
      {selectedTabIndex === 0 && <Table title="Products" />}
      {selectedTabIndex === 1 && <div>users</div>}
      {selectedTabIndex === 2 && <div>tasks</div>}
      {selectedTabIndex === 3 && <div>sales</div>}
      {selectedTabIndex === 4 && <div>ads</div>}
    </div>
  );
};

export default Content;
