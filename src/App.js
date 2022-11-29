import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget'
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";

const App = ()=> {
    return (
        <div className="container">
          <h1 className="mt-3">My Budget Planner</h1>
          <div className="row mt-3">
            <div className="col-sm">
                 <Budget />
            </div>
            <div className="col-sm">
               <Remaining />
            </div>
            <div className="col-sm">
                <ExpenseTotal />
            </div>

          </div>
            <h3 className="mt-3">Expenses</h3>
            <div className="row mt">
                <div className="col-sm">
                    <ExpenseList />
                </div>
            </div>
            <h3 className="mt-3">Add Expense</h3>
            <div className="mt-3">
                <div className="col-sm">
                    <AddExpense />
                </div>
            </div>
        </div>
    )
}

export default App;