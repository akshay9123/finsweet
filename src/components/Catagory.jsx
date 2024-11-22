import React from 'react';

const Catagory = ({ text, logo }) => {
  return (
    <div className='w-full min-h-[80px] p-6 border-2 border-gray-300 cursor-pointer hover:bg-[#FFA500] hover:translate-y-[-10px] transition-transform duration-700'>

      <img src={logo} alt="Category Logo" className='w-12 h-12 mb-4' />
        <p className='font-bold text-2xl'>{text}</p>

        <p className='text-sm text-[#232536]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate voluptatem amet autem, a ut consectetur placeat, error est accusantium, officiis iusto.
      </p>
    </div>
  );
};

export default Catagory;
