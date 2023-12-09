import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#85BB85]'>CASH CLARITY</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Dashboard</li>
          <li className='p-4'>Budgets</li>
          <li className='p-4'>Transactions</li>
          <li className='p-4'>Recommendations</li>
          <li className='p-4'>Profile</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-white' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#85BB85] m-4'>REACT.</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Dashboard</li>
          <li className='p-4 border-b border-gray-600'>Budgets</li>
          <li className='p-4 border-b border-gray-600'>Transactions</li>
          <li className='p-4 border-b border-gray-600'>Recommendations</li>
          <li className='p-4'>Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

