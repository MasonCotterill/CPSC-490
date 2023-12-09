import React from 'react';
import MyAreaChart from './MyAreaChart';
import MyPieChart from './MyPieChart'; 
const Hero = () => {
  return (
    <div className='flex flex-row justify-center items-stretch pt-10 h-[calc(100vh-10vh)]'>
      <div className='w-1/2 p-4 border border-gray-900 shadow-lg flex flex-col'>
        <p className='text-[#85BB85] font-bold p-4 text-center flex-none'>CASHFLOW SUMMARY</p>
        <div className='flex-grow'>
          <MyAreaChart />
        </div>
      </div>
      <div className='w-1/2 p-4 border border-gray-900 shadow-lg flex flex-col'> 
        <p className='text-[#85BB85] font-bold p-4 text-center flex-none'>MONTHLY EXPENSES</p>
        <div className='flex-grow'>
          <MyPieChart /> 
        </div>
      </div>
    </div>
  );
};

export default Hero;

