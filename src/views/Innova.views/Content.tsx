import { TabContext } from "core/context/TabContext";
import React, { useContext } from "react";

const Content = () => {
  const { state } = useContext(TabContext);
  const { selectedTabIndex } = state;
  return (
    <div>
      {selectedTabIndex === 0 && <div>products</div>}
      {selectedTabIndex === 1 && <div>users</div>}
      {selectedTabIndex === 2 && <div>tasks</div>}
      {selectedTabIndex === 3 && <div>sales</div>}
      {selectedTabIndex === 4 && <div>ads</div>}
    </div>
  );
};

export default Content;
