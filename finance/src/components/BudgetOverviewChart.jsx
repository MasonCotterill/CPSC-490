import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BudgetOverviewChart = () => {
  const data = [
    { month: 'Jan', budget: 4000, expenses: 3000 },
    { month: 'Feb', budget: 4500, expenses: 3500 },
    { month: 'Mar', budget: 5000, expenses: 4500 },
    
  ];

  return (
    <ResponsiveContainer width="100%" height="95%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorBudget" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#85BB85" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#85BB85" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff6347" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#ff6347" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36}/>
        <Area type="monotone" dataKey="budget" name="Budget" stroke="#85BB85" fillOpacity={1} fill="url(#colorBudget)" />
        <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#ff6347" fillOpacity={1} fill="url(#colorExpenses)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BudgetOverviewChart;
