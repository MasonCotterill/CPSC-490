import React, { useContext, useEffect } from 'react';
import { TransactionsContext } from '../Context';

const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  useEffect(() => {
    // This is a good place to put any setup or operations that depend on transactions data
    console.log(transactions);
  }, [transactions]); // This will run whenever the transactions data changes

  return (
    <div className='flex flex-col items-center w-full p-4 bg-black'>
      <h1 className='text-2xl font-bold text-[#85BB85] mb-8'>Transaction Data</h1>

      <div className='w-full overflow-auto'>
        <table className='min-w-full leading-normal'>
          <thead>
            <tr>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Date
              </th>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Merchant
              </th>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Category
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
                  {transaction.Date}
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-white'>
                  {transaction.Merchant}
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-white'>
                  {transaction.Category}
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-right text-white'>
                  ${transaction.Amount ? Number(transaction.Amount).toFixed(2) : '0.00'}
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
