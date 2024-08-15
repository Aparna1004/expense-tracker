"use client";  // Ensure it's treated as a client component if using a framework like Next.js

import moment from 'moment/moment';
import React from 'react';
import * as XLSX from 'xlsx';

const TableToExcel = ({expensesList}) => {
  const generateExcel = () => {
    const table = document.getElementById('table-to-excel');
    const workbook = XLSX.utils.table_to_book(table);
    XLSX.writeFile(workbook, 'Monthly_Expenses.xlsx');
  };

  const currentDate = new Date();
  const currentMonth = (currentDate.getMonth()+1).toString() ;
  console.log(currentMonth);
  const filteredData = expensesList.filter(item => moment(item.createdBy, ['DD-MM-YYYY']).format('MM') == "0"+currentMonth);
  console.log(filteredData);

  return (
    <div className="container mx-auto p-4">
        <div className='flex justify-between'>
            <h1 className='font-bold text-lg'>Monthy Expenses</h1>
        <button
            className="bg-blue-800 px-4 py-2 text-sm mb-4 rounded-xl text-white hover:bg-blue-700 transition duration-300"
            onClick={generateExcel}
        >
            Download
        </button>
      </div>
      <div className="overflow-x-auto">
        <table id="table-to-excel" className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left p-2 border-b">Name</th>
              <th className="text-left p-2 border-b">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((expense, index) => (<tr>
              <td className="p-2 border-b">{expense?.name}</td>
              <td className="p-2 border-b">{expense?.amount}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableToExcel;
