import React, { useRef, useState } from 'react'

const ExpenseForm = ({onAddExpense}) => {
  const [title , setTitle] = useState("")
  const [amount , setAmount] = useState("")
  const titleRef=useRef()

  const handleSubmit=(e)=>{

    e.preventDefault()

    if(!title || !amount) return "Please fill all the fields!"

    const newExpense={
      id: Date.now(),
      title,
      amount:parseFloat(amount)

    }

    onAddExpense(newExpense)
    setTitle("")
    setAmount("")
    titleRef.current.focus()
  }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Task' value={title} onChange={(e)=>setTitle(e.target.value)} ref={titleRef}/>
        <input type="number" placeholder='Enter The Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button type="submit">Add</button>
      </form>

    </div>
  )
}

export default ExpenseForm
