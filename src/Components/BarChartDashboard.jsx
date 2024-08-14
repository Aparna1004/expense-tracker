import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function BarChartDashboard({ budgetList }) {
  {console.log(budgetList);}
  return (
    <div className='border rounded-lg p-4 sm:p-6 lg:p-8'>
      <h2 className='font-bold text-lg sm:text-xl mb-4'>Activity</h2>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={300} className="p-2">
          <BarChart
            data={budgetList}
            margin={{ top: 7 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='totalSpend' stackId="a" fill='#4845d2' />
            <Bar dataKey='amount' stackId="a" fill='#C3C2FF' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartDashboard;
