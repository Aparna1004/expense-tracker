import React from 'react';

const Expenses = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
      <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4'>
        My Expenses
      </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {/* Add your expense items here */}
      </div>
    </div>
  );
};

export default Expenses;
