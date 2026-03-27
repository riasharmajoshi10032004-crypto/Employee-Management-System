import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
    const [userdata,setuserdata]=useContext(AuthContext)

  return (
    <div className='bg-gray-900 rounded-2xl mt-6 p-6 shadow-2xl border border-gray-700 '>
        
        <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 mb-3 flex justify-between rounded-lg font-semibold text-sm uppercase tracking-wide'>
            <h2 className='text-xl font-medium  w-1/5 text-center'>Employee Name</h2>
            <h3 className='text-xl font-medium  w-1/5 text-center'>New Task</h3>
            <h5 className='text-xl font-medium  w-1/5 text-center'>Active Task</h5>
            <h5 className='text-xl font-medium w-1/5 text-center'>Completed Task</h5>
            <h5 className='text-xl font-medium w-1/5 text-center'>Failed task</h5>
        </div>

      <div className=' overflow-y-auto space-y-2 pr-1'>
          
          {userdata.map(function(elem,index){
            return (
              <div key={index} className='bg-gray-800 hover:bg-gray-700 transition-all duration-200 py-3 px-4 mb-2 flex justify-between rounded-lg shadow-md items-center'>
                
                <h2 className='text-xl  w-1/5 text-center text-white font-medium'>{elem.firstName}</h2>
                
                <h3 className=' text-xl font-medium  w-1/5 text-center text-blue-400 '>{elem.taskNumbers.newTask}</h3>
                
                <h5 className=' text-xl font-medium w-1/5 text-center text-yellow-400'>{elem.taskNumbers.active}</h5>
                
                <h5 className=' text-xl  w-1/5 text-center text-green-400 font-medium'>{elem.taskNumbers.completed}</h5>
                
                <h5 className='text-xl font-medium w-1/5 text-center text-red-400 '>{elem.taskNumbers.failed}</h5>
              
              </div>
            )
          })}

      </div>
       
    </div>
  )
}

export default AllTask