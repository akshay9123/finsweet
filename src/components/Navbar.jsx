import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='px-16 py-1 bg-[#232536] flex justify-between  items-center' >


        <div>
            <img src={logo} alt="" />
        </div>


        <div>

            <ul className='text-[#F4F4F4] flex justify-center items-center gap-8'>
                <li className=' cursor-pointer'>
                    <Link to='/'>Home</Link>
                </li>
                <li className=' cursor-pointer'>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li className=' cursor-pointer'>
                    <Link to='/aboutus'>About Us</Link>
                </li>
                <li className='cursor-pointer'>Contact Us</li>
                <li className=' flex justify-center items-center w-28 h-12 '>
                    <span className='text-[#232536] bg-[#F4F4F4] w-28  block text-center rounded-md'>
                        Subscribe
                    </span>
                </li>
            </ul>

        </div>


    </nav>
  )
}

export default Navbar