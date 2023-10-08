import { TabContext } from "core/context/TabContext";
import React, { useContext } from "react";
import { Table } from "shared";

const Content = () => {
  const { state } = useContext(TabContext);
  const { selectedTabIndex } = state;
  return (
    <div>
      {selectedTabIndex === 0 && <Table _config={{ title: "Products" ,_head:true,_body:true,_footer:true}} />}
      {selectedTabIndex === 1 && (
        <Table _config={{ title: "Users", _head: false }} />
      )}
      {selectedTabIndex === 2 && <Table _config={{ title: "Products" }} />}
      {selectedTabIndex === 3 && <Table _config={{ title: "Sales" }} />}
      {selectedTabIndex === 4 && <Table _config={{ title: "Ads" }} />}
    </div>
  );
};

export default Content;
