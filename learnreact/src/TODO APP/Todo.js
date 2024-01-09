import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'
import "./Todo.css"

const Todo = () => {

  const [tasks,SetTask] = useState([])
  useEffect(()=>{
    document.title = `${tasks.length} pending task's`
  })

   const addTask=(title)=>{
    const NewTask = [...tasks,{title}]
    SetTask(NewTask);
   }

   const RemoveTask=(index)=>{
    const NewTask = [...tasks,]
    NewTask.splice(index,1)
    SetTask(NewTask)
   }
  return (
    <>
        <div className='Todo-container'>
            <div className='Header'>TODO App</div>
            <div className='Add-task'>
              <AddTask addTask={addTask}/>
              </div>
            <div className='Tasks'>
              {tasks.map((task,index)=>(
                <ListTask task={task} RemoveTask={RemoveTask} index={index} key={index}/>
              ))}
              
              </div>
        </div>
    </>
  )
}

export default Todo