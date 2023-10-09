import { TabContext, useTabContext } from "core/context/TabContext";
import React, { useContext } from "react";
import { Table } from "shared";
import Ads from "../ads.innova/Ads";
import Sales from "../sales.innova/Sales";
import Products from "../products.innova/Products";
import Users from "../users.innova/Users";
import Tasks from "../tasks.innova/Tasks";

const Content = () => {
  const { state } = useTabContext();
  const { selectedTabIndex } = state;
  return (
    <div>
      {selectedTabIndex === 0 && <Products />}
      {selectedTabIndex === 1 && <Users />}
      {selectedTabIndex === 2 && <Tasks />}
      {selectedTabIndex === 3 && <Sales />}
      {selectedTabIndex === 4 && <Ads />}
    </div>
  );
};

export default Content;
