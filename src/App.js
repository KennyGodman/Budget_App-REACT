import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget'
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";
import './App.css';

const App = ()=> {
    return (
        <AppProvider>
            <div className="container">
                <h1 className="mt-3"><button>My Budget Planner</button></h1>
                <div className="row mt-3">
                    <div className="col-sm">
                        <Budget />
                    </div>
                    <div className="col-sm">
                    <Remaining />
                    </div>
                    
                    <div className="col-sm">
                        <ExpenseTotal />
                        <div className="godman">
                            <form>
                            <input  placeholder="Search" required >
                                </input>
                            </form>
                        </div>
                    </div>

                </div>
                    <h3 className="mt-3"><button>Expenses</button></h3>
                    <div className="row mt">
                        <div className="col-sm">
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className="mt-3"><button>Add Expenses</button></h3>
                    <div className="mt-3">
                        <div className="col-sm">
                            <AddExpense />
                        </div>
                    </div>
        </div>
        </AppProvider>
       
    )
}

export default App