import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import {
  COLUMN_DATA,
  CURRENT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
} from "./constants";

const Table = ({ contacts = [], handleDelete }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <div className="h-full w-full">
      <NeetoUITable
        fixedHeight
        rowSelection
        columnData={COLUMN_DATA(handleDelete)}
        currentPageNumber={CURRENT_PAGE_NUMBER}
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
