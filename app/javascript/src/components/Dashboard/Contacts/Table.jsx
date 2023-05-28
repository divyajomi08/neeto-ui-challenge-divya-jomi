import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS, TABLE_COLUMNS } from "./constants";

const Table = () => (
  <NeetoUITable
    columnData={TABLE_COLUMNS}
    currentPageNumber={1}
    defaultPageSize={10}
    handlePageChange={function noRefCheck() {}}
    rowData={CONTACTS}
  />
);

export default Table;
