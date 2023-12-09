import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

// Example data for the last month's expenses breakdown
const data = [
  { name: 'Groceries', value: 400 },
  { name: 'Rent', value: 1200 },
  { name: 'Utilities', value: 300 },
  { name: 'Entertainment', value: 150 },
  
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MyPieChart = () => (
  <ResponsiveContainer width="100%" height="90%">
    <PieChart>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export default MyPieChart;

