import React from 'react';
import { FaGreaterThan } from "react-icons/fa";

const Button = ({text}) => {
  return (
    <button className='w-40 h-11 text-[#232536] font-medium bg-yellow-400 rounded-md flex justify-center items-center'>
        {text} {'>'}
    </button>
  )
}

export default Button