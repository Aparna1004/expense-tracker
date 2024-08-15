"use client";  // Add this line to ensure the component is treated as a client component

import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TableToPDF = () => {
  const generatePDF = () => {
    const input = document.getElementById('table-to-pdf');
    
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save('download.pdf');
    });
  };

  return (
    <div>
      <table id="table-to-pdf" border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
            <td>Row 1, Column 3</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
            <td>Row 2, Column 3</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <button onClick={generatePDF}>Download as PDF</button>
    </div>
  );
};

export default TableToPDF;
