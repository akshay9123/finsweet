import React from 'react';
import fb from '../assets/Negative.svg';
import insta from '../assets/Negative (2).svg';
import twitter from '../assets/Negative (4).svg';
import ldn from '../assets/Negative (3).svg'

const Authors = ({logo,name}) => {
  return (
    <div className=' min-h-[80px] p-6 border-2 cursor-pointer hover:bg-[#FFA500] flex flex-col justify-center text-center hover:translate-y-[-10px] transition-transform duration-300'>
        <img src={logo} alt="" />
        <p>{name}</p>
        <p>Lorem, ipsum dolor.</p>
        <div className='flex justify-center gap-2 mt-2'>
            <img src={fb} alt="" />
            <img src={ldn} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
        </div>
    </div>
  )
}

export default Authors;