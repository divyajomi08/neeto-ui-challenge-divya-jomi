import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { getColumnData } from "./utils";

import { DEFAULT_PAGE_SIZE } from "../constants";

const Table = ({ contacts = [], handleDelete }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <div className="h-full w-full">
      <NeetoUITable
        fixedHeight
        rowSelection
        columnData={getColumnData(handleDelete)}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        rowData={contacts}
        selectedRowKeys={selectedRows}
        shouldDynamicallyRenderRowSize={false}
        totalCount={contacts.length}
        onRowSelect={selectedRowKeys => setSelectedRows(selectedRowKeys)}
      />
    </div>
  );
};

export default Table;
