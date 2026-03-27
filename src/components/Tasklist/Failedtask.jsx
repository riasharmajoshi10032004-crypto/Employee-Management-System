import React from 'react'

const Failedtask = ({data}) => {
  return (
     <div className='flex-shrink-0  h-full w-[300px] p-5 bg-pink-500 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className='text-sm h-20 mt-2'>{data.taskDescription}</p>
        
  <div className='mt-6'>
        
      <button
  className="w-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800
  text-white font-semibold py-2 rounded-lg
  transition-all duration-200 shadow-md"
>
  Accept Task
</button>

      </div>
        </div>
  )
}

export default Failedtask
