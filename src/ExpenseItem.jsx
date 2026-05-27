import React from 'react'

const ExpenseItem = ({item , onDeleteExpense}) => {
  return (
    <div>
      
      <div>
        <span>{item.title}</span>
        <span>${item.amount}</span>
        <span onClick={()=>onDeleteExpense(item.id)}>❌</span>
      </div>

    </div>
  )
}

export default ExpenseItem
