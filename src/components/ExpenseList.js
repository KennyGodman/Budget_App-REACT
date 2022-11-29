import React from 'react';
import ExpenseItems from './ExpenseItems';


const ExpenseList=()=>{
    const expenses = [
        {id: 28912, name:"Investment", cost: 100},
        {id: 34849, name:"Shopping", cost: 300},
        {id: 28912, name:"Feeding", cost: 400},
        {id: 28912, name:"Holiday", cost: 500},
        {id: 28912, name:"Child Care", cost: 600},
        {id: 28912, name:"Transportation", cost: 700},
    ]

        return(
            <ul className='list-group'>
                {expenses.map(((expense)=>
                  <ExpenseItems
                  id={expense.id}
                  name={expense.name}
                  cost={expense.cost}
                   />
                ))}
            </ul>
        )


}
export default ExpenseList