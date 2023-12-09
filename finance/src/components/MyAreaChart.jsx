import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Example data for the last four months
const data = [
  { month: 'Dec', income: 3800, expenses: 2000 },
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 2000, expenses: 980 },
  
];

const MyAreaChart = () => (
  <ResponsiveContainer width="100%" height="90%">
    <AreaChart
      data={data}
      margin={{
        top: 10, right: 30, left: 0, bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
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
      <Legend verticalAlign="bottom" align="center" wrapperStyle={{ lineHeight: '40px' }}/>
      <Area type="monotone" dataKey="income" name="Income" stroke="#85BB85" fillOpacity={1} fill="url(#colorIncome)" />
      <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#ff6347" fillOpacity={1} fill="url(#colorExpenses)" />
    </AreaChart>
  </ResponsiveContainer>
);

export default MyAreaChart;
