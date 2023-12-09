import React from 'react';
import BudgetOverviewChart from './BudgetOverviewChart';
import BudgetHistoryChart from './BudgetHistoryChart';
import ExpenseTable from './ExpenseTable';

const Budgets = () => {
  return (
    <div className='flex flex-col items-stretch min-h-screen bg-[#000300] text-white'>
      {/* Charts container */}
      <div className='flex flex-row justify-between gap-4 p-4'>
        {/* Budget Overview Chart with a specific height */}
        <div className='w-1/2 flex flex-col border border-gray-900 shadow-lg'>
          <p className='text-[#85BB85] font-bold p-4 text-center'>BUDGET OVERVIEW</p>
          <div className='flex-grow p-4' style={{ height: '300px' }}> {/* Inline style for height */}
            <BudgetOverviewChart />
          </div>
        </div>

        {/* Budget History & Forecast with a specific height */}
        <div className='w-1/2 flex flex-col border border-gray-900 shadow-lg'>
          <p className='text-[#85BB85] font-bold p-4 text-center'>BUDGET HISTORY & FORECAST</p>
          <div className='flex-grow p-4' style={{ height: '300px' }}> {/* Inline style for height */}
            <BudgetHistoryChart />
          </div>
        </div>
      </div>

      {/* Expense Tracking Table with scrolling */}
      <div className='w-full overflow-auto p-4 border border-gray-900 shadow-lg'>
        <p className='text-[#85BB85] font-bold p-4 text-center'>EXPENSE TRACKING</p>
        <ExpenseTable />
      </div>
    </div>
  );
};

export default Budgets;
