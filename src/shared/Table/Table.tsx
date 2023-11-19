import { RootState } from "core/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableFooter from "./TableFooter/TableFooter";

const Table = ({
  _config = {
    title: "",
    _head: {
      show: true,
      _actions: {
        show: true,
        addtions: true,
        actions: true,
        filteration: true,
      },
      _search: {
        show: true,
      },
    },
    _body: {
      perPage: 5,
      isTrue: true,
      _th: [],
    },
    _footer: {
      isTrue: true,
    },
    _multiSelect: true,
    _extenstions: {
      actionsColumns: true,
    },
  },
  data,
  filterData,
  defaultValues,
  formFields,
  handleAddetionDispatch,
  handleDeleteAllDispatch,
  handleUpdateDispatch,
  handleSearchDispatch,
  handleGetFilterationDispatch,
}) => {
  return (
    <div className=" mx-auto max-w-screen-2xl my-2">
      <div className="relative overflow-hidden shadow rounded-md">
        {/* table head */}
        {_config._head.show && (
          <TableHead
            _config={{
              title: _config.title,
              _actions: _config._head._actions.show,
              addtion: _config._head._actions.addtions,
              actions: _config._head._actions,
              filteration: _config._head._actions.filteration,
              _search: _config._head._search.show,
              _exentions: _config._extenstions.actionsColumns,
            }}
            data={data}
            filterData={filterData}
            defaultValues={defaultValues}
            formFields={formFields}
            handleAddetionDispatch={handleAddetionDispatch}
            handleDeleteAllDispatch={handleDeleteAllDispatch}
            handleSearchDispatch={handleSearchDispatch}
            handleGetFilterationDispatch={handleGetFilterationDispatch}
          />
        )}
        {/* table head */}
        {/* table body */}
        {_config._body.isTrue && (
          <TableBody
            _config={{
              perPage: _config._body.perPage,
              multiSelect: _config._multiSelect,
              th: _config._body._th,
              _exentions: _config._extenstions.actionsColumns,
            }}
            data={data}
            defaultValues={defaultValues}
            formFields={formFields}
            handleUpdateDispatch={handleUpdateDispatch}
          />
        )}
        {/* table body */}
        {/* table footer */}
        {_config._footer.isTrue && <TableFooter _config={{}} data={data} />}
        {/* table footer */}
      </div>
    </div>
  );
};

export default Table;
