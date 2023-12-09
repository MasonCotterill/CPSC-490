import React from 'react';

const ExpenseTable = () => {
  // Example data
  const expenses = [
    { category: 'Groceries', amount: 400 },
    { category: 'Rent', amount: 1200 },
    { category: 'Utilities', amount: 300 },
    { category: 'Entertainment', amount: 150 },
    // Add more expenses here
  ];

  // Calculate the total
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className='flex flex-col items-center w-full'>
      <table className='min-w-full leading-normal'>
        <thead>
          <tr>
            <th className='px-5 py-3 border-b border-gray-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
              Category
            </th>
            <th className='px-5 py-3 border-b border-gray-600 text-right text-xs font-semibold text-white uppercase tracking-wider'>
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td className='px-5 py-5 border-b border-gray-600 text-white'>
                {expense.category}
              </td>
              <td className='px-5 py-5 border-b border-gray-600 text-right text-white'>
                ${expense.amount.toFixed(2)}
              </td>
            </tr>
          ))}
          {/* Total row with solid gray background */}
          <tr>
            <td className='px-5 py-5 border-t border-gray-600 text-white font-bold'>Total</td>
            <td className='px-5 py-5 border-t border-gray-600 text-right text-white font-bold'>
              ${total.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;



