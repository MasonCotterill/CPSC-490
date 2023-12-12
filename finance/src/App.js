import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'; // Import your page components
import Budgets from './components/Budgets';
import Transactions from './components/Transactions';
import Recommendations from './components/Recommendations';
import Profile from './components/Profile';
import { TransactionsProvider } from './Context'; // Import the TransactionsProvider

function App() {
  return (
    <Router>
      <TransactionsProvider> {/* Wrap your components with TransactionsProvider */}
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          {/* Add other routes here */}
        </Routes>
      </TransactionsProvider>
    </Router>
  );
}

export default App;
