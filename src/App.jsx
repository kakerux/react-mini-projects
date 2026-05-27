import { useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'


function App() {

  const [expenses,setExpenses]= useState(()=>{
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  }) 

  useEffect(()=>{
    localStorage.setItem(expenses , JSON.stringify(expenses))
  },[expenses])

  const addExpense=(expense)=>{
    setExpenses((prev)=> [...prev , expense])
  }

  const deleteExpense=(id)=>{

    setExpenses((prev)=>prev.filter((item)=>item.id != id))
  }

  const totalExpense= expenses.reduce((sum , item) => sum + item.amount , 0)
  return (
    <>

    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h2>Total Expense : {totalExpense.toFixed(2)}</h2>
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
    
 
  
    </>
  )
}

export default App
