import React from 'react'
import Navbar from './Navbar'
import Button from './Button'

const Footer = () => {
  return (
    <div className='bg-[#232536]'>
        <div>
          <Navbar />
        </div>

        <div className='mx-16 flex justify-between p-16 items-center bg-[#6D6E76]'>
          <div>
              <p className='text-4xl'>Subscribe to our news letter to get</p>
              <p className='text-4xl'>latest updates and news</p>
          </div>

          <div className='flex justify-center items-center'>
              <input type="text" />
              <Button text="Subscribe"/>
          </div>

        </div>

        <div className='mx-16 mt-8 text-[#F4F4F4]'>
          <p>Finstreet 11B 2561 Fintown</p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        
    </div>
  )
}

export default Footer