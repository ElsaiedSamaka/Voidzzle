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
            _head: { isTrue: true },
            _body: { isTrue: true },
            _perPage: 7,
            _footer: { isTrue: true },
          }}
        />
      )}
      {selectedTabIndex === 1 && (
        <Table
          _config={{
            title: "Users",
            _head: { isTrue: true },
            _body: { isTrue: true },
            _perPage: 7,
            _footer: { isTrue: true },
          }}
        />
      )}
      {selectedTabIndex === 2 && (
        <Table
          _config={{
            title: "Products",
            _head: { isTrue: true },
            _body: { isTrue: true },
            _perPage: 7,
            _footer: { isTrue: true },
          }}
        />
      )}
      {selectedTabIndex === 3 && (
        <Table
          _config={{
            title: "Sales",
            _head: { isTrue: true },
            _body: { isTrue: true },
            _perPage: 7,
            _footer: { isTrue: true },
          }}
        />
      )}
      {selectedTabIndex === 4 && (
        <Table
          _config={{
            title: "Ads",
            _head: { isTrue: true },
            _body: { isTrue: true },
            _perPage: 7,
            _footer: { isTrue: true },
          }}
        />
      )}
    </div>
  );
};

export default Content;
