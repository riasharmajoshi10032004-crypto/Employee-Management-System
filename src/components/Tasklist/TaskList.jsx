import React from "react"
import Accepttask from "./Accepttask"
import Newtask from "./Newtask"
import Completetask from "./Completetask"
import Failedtask from "./Failedtask"

const TaskList = ({ data }) => {

  if (!data || !data.tasks) return <p>No tasks</p>

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((task, index) => {

        if (task.failed)
          return <Failedtask key={index} data={task} />

        if (task.completed)
          return <Completetask key={index} data={task} />

        if (task.newTask)
          return <Newtask key={index} data={task} />

        if (task.active)
          return <Accepttask key={index} data={task} />

        return null
      })}
    </div>
  )
}

export default TaskList