import React, { useState } from 'react'

const Todo = () => {

    const [task , setTask] = useState("")
    const [tasks , setTasks] = useState([])

    const handleAdd=(e)=>{
        // console.log(task);
        e.preventDefault()

       if(task){

         setTasks([...tasks , {text:task , completed:false}])
         setTask("")
       } 
       
    }

    const handleDelete=(index)=>{
        const newTasks = [...tasks]
newTasks[index].completed=!newTasks[index].completed
setTasks(newTasks)
    }

  return (
    <div>
      

      <h1>Todo List: </h1>

      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>{tasks.map((value,index)=>(
        <li key={index}><span style={{textDecoration: value.completed? "line-through":"none" , color: value.completed? "red":"white"}}>{value.text}</span>
         <button onClick={()=>handleDelete(index)}>Done</button></li>
      ))}</ul>
    </div>
  )
}

export default Todo
