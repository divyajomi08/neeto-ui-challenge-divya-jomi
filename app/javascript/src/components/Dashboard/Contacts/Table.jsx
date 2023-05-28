import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS, TABLE_COLUMNS } from "../constants";

const Table = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <NeetoUITable
      fixedHeight
      rowSelection
      columnData={TABLE_COLUMNS}
      currentPageNumber={1}
      defaultPageSize={10}
      handlePageChange={function noRefCheck() {}}
      rowData={CONTACTS}
      selectedRowKeys={selectedRows}
      shouldDynamicallyRenderRowSize={false}
      totalCount={20}
      onRowSelect={selectedRowKeys => setSelectedRows(selectedRowKeys)}
    />
  );
};

export default Table;
