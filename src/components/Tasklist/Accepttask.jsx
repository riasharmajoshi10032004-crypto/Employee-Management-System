import React from 'react'

const Accepttask = ({data}) => {
  return (
   <div className='flex-shrink-0  h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className='text-sm h-20 mt-2'>{data.taskDescription} </p>
            <div className='flex justify-between mt-4 '>
                <button
          className='flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800
          text-white font-semibold py-2 mr-4 rounded-lg
          transition-all duration-200 shadow-md'
        >
          Completed
        </button>

        <button
          className='flex-1 bg-rose-600 hover:bg-rose-700 active:bg-rose-800
          text-white font-semibold py-2 rounded-lg
          transition-all duration-200 shadow-md'
        >
          Failed
        </button>

            </div>
        

        </div>
  )
}

export default Accepttask
