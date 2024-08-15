import React from 'react';
import TableToPDF from '@/Components/TableToPDF';
import TableToExcel from '@/Components/TableToExcel';

function page() {
  return (
    <div className="App">
      <TableToExcel />
    </div>
  );
}

export default page;
