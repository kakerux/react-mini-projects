import React, { useState } from 'react'

const ExpenseBox = () => {
    const [title,setTitle]=useState("")
    const [amount , setAmount] = useState("")
    

    const [task, setTask] = useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        if(title&&amount){
            setTask([...task, {text:title , prize:Number(amount), completed:false}])
            setTitle("")
            setAmount("")
            localStorage.setItem('TASK',JSON.stringify(task))
        }



        

    }
   const totalPrize = task.reduce((acc, t) => acc + t.prize, 0)
    

    const handleDelete=(index)=>{
        const newTask = [...task]
        newTask[index].completed=!newTask[index].completed
        
        setTask(newTask)
        
        
        
    }
   

  return (
    <div>
        <h1>Expense Tracker:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='expense title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <input type="number" placeholder='expense amount' onChange={(e)=>setAmount(e.target.value)} value={amount}/>
        <button type="submit">Add</button>
      </form>

<h1>Total Expense: {totalPrize}</h1>

        <ul>{task.map((value,index)=>(
            <li key={index}><span style={{textDecoration: value.completed?'line-through': 'none'}}>{value.text}  --  {value.prize}</span>
             <button onClick={()=>handleDelete(index)}>❌</button></li>
        ))}</ul>

    </div>
  )
}

export default ExpenseBox
