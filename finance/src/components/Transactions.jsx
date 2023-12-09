import React from 'react';

const Transactions = () => {
  // Hard-coded sample transactions data with merchant names
  const transactions = [
    { date: '2023-12-01', category: 'Groceries', amount: 400, merchantName: 'Local Market' },
    { date: '2023-12-02', category: 'Rent', amount: 1200, merchantName: 'City Apartments' },
    { date: '2023-12-05', category: 'Utilities', amount: 300, merchantName: 'Utility Company' },
    { date: '2023-12-15', category: 'Entertainment', amount: 150, merchantName: 'Cinema Town' }
    // ... more transactions up to 10-15 entries
  ];

  return (
    <div className='flex flex-col items-center w-full p-4 bg-black'>
      {/* Title in green color with increased bottom margin */}
      <h1 className='text-2xl font-bold text-[#85BB85] mb-8'>Transaction Data</h1>

      <div className='w-full overflow-auto'>
        <table className='min-w-full leading-normal'>
          <thead>
            <tr>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Date
              </th>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Category
              </th>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Merchant
              </th>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold text-white uppercase tracking-wider'>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-white'>
                  {transaction.date}
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-white'>
                  {transaction.category}
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-white'>
                  {transaction.merchantName}
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-right text-white'>
                  ${transaction.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
