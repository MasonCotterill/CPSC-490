import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BudgetHistoryChart = () => {
  const data = [
    { month: 'Jan', income: 4000, expenses: 3000 },
    { month: 'Feb', income: 4500, expenses: 3500 },
    { month: 'Mar', income: 5000, expenses: 4500 },
    // Additional data points can be added here
  ];

  return (
    <ResponsiveContainer width="100%" height="95%">
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="bottom" wrapperStyle={{ paddingBottom: '10px' }} />
        <Line type="monotone" dataKey="income" name="Income" stroke="#85BB85" />
        <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#ff6347" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BudgetHistoryChart;

