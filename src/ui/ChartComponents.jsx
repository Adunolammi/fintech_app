import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartComponent = ({ data }) => {
  const chartData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
        <XAxis 
          dataKey="name" 
          stroke="#ffffff60"
          tick={{ fill: '#ffffff60' }}
        />
        <YAxis 
          stroke="#ffffff60"
          tick={{ fill: '#ffffff60' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#034057',
            border: 'none',
            borderRadius: '8px',
            color: '#fff'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#05b993" 
          strokeWidth={2}
          dot={{ fill: '#05b993', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;