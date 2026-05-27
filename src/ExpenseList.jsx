import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses, onDeleteExpense}) => {
  if(expenses.length===0)
    return <p>There's no expense</p>
  return (
    <div>
      
      {expenses.map((item)=>(

        <ExpenseItem key={item.id} item={item} onDeleteExpense={onDeleteExpense}/>

      ))}
    </div>
  )
}

export default ExpenseList
