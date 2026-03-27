import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {

  const[userdata,setuserdata]=useContext(AuthContext)

  const[taskTitle,settaskTitle]=useState('')
  const[taskDescription,settaskDescription]=useState('')
  const[taskDate,settaskDate]=useState('')
  const[AssignTo,setAssignTo]=useState('')
  const[category,setcategory]=useState('')
  const[newtask,setnewTask]=useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
    setnewTask({taskTitle,taskDescription,taskDate,AssignTo,category,active:false,newTask:true,failed:true,completed:false})

    const data=userdata
    console.log(data)




    data.forEach(function(elem){
      if(AssignTo==elem.firstName){
        elem.tasks.push(newtask)
        elem.taskNumbers.newTask=elem.taskNumbers.newTask+1

        
        
      }
    })
    setuserdata(data)

     
    settaskTitle('')
    setcategory('')
    setAssignTo('')
    settaskDate('')
    settaskDescription('')
   
   

  }
  return (
    <div className="mt-6 w-full">
      
      <form  onSubmit={(e)=>{submitHandler(e)}}
      className="w-full bg-gray-800 p-5 rounded-xl shadow-lg flex flex-wrap gap-4">
        
    
        <div className="w-full md:w-[48%] space-y-3">
          
          <div>
            <h3 className="text-gray-300 text-sm mb-1">Task Title</h3>
            <input  value={taskTitle}
            onChange={(e)=>{settaskTitle(e.target.value)}}
              type="text"
              placeholder="Make UI"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-1">Date</h3>
            <input value={taskDate} onChange={(e)=>{settaskDate(e.target.value)}}
              type="date"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-1">Assign To</h3>
            <input value={AssignTo} onChange={(e)=>{setAssignTo(e.target.value)}}
              type="text"
              placeholder="Employee name"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-1">Category</h3>
            <input value={category} onChange={(e)=>{setcategory(e.target.value)}}
              type="text"
              placeholder="Design, Dev, etc"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

        </div>

    
        <div className="w-full md:w-[48%]">
          <h3 className="text-gray-300 text-sm mb-1">Description</h3>
          <textarea value={taskDescription} onChange={(e)=>{settaskDescription(e.target.value)}} 
            rows="6"
            placeholder="Enter task description..."
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 resize-none text-sm"
          ></textarea>
        </div>

        
        <div className="w-full flex justify-end mt-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md font-semibold shadow text-sm"
          >
            Create Task 🚀
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateTask;