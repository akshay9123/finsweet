import React from 'react'
import Button from './Button'

const JoinTeam = () => {
  return (
    <div className='w-full h-80  flex justify-center items-center mt-8 p-8'>
                    <div className='flex flex-col w-80  items-center text-center' >
                        <p className='text-3xl font-semibold'>Join our team to be a part of our story</p>
                        
                        <p className='text-lg mt-6 '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, delectus porro odio quod dolores sunt dicta repudiandae? Eos iure nulla nemo iste libero quod sed, accusantium sapiente unde natus. Quis magni eveniet animi.</p>
    
                        <div className='mt-6'>
                        
                            <Button text="Join Now" />
                        </div>
                    </div>
                </div>
  )
}

export default JoinTeam