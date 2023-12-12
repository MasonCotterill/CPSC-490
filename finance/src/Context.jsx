import React, { createContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const updateTransactions = (newTransactions) => {
    setTransactions(newTransactions);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, updateTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
