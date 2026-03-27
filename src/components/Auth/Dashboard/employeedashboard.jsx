import React from 'react'
import Header from '../../other/Header'
import TaskListnumber from '../../other/TaskListnumber'
import TaskList from '../../Tasklist/TaskList'

const Employeedashboard = (props) => {
 
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
        <Header  changeUser={props.changeUser} data={props.data}/>
        <TaskListnumber data={props.data}/>
        <TaskList data={props.data}/>
      
    </div>
  )
}

export default Employeedashboard
