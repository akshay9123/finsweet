import React from 'react';


const Posts = ({img,cmp,dtl,dtl1}) => {
  return (
    <div className='flex justify-center gap-6 items-center mt-8 '>
        <img src={img} alt="" className='h-64'/>
        <div className='hover:bg-[#FBF6EA] cursor-pointer hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer '>
            <p className='text-[#592EA9] text-lg font-semibold'>{cmp}</p>
            <p className='text-[#232536] text-2xl font-semibold mt-4'>{dtl}</p>
            <p className='text-[#232536] text-2xl font-semibold '>{dtl1}</p>
            <p className='text-[#232536] text-lg  mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus, aperiam iure velit ullam architecto accusantium ducimus laboriosam in officia sit. Sequi exercitationem commodi ex aspernatur incidunt a perspiciatis provident, voluptates, veritatis eaque asperiores molestias voluptate, accusamus tenetur totam excepturi omnis repellat.</p>
        </div>
    </div>

  )
}

export default Posts