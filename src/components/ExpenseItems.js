import React , {useContext, useState}from "react";
import { IconName } from "react-icons/bs";
//import {TiDelete} from 'react-icons/ti'
import { AppContext } from "../context/AppContext";

const ExpenseItems=(props)=>{
    const {dispatch} = useContext(AppContext)

    const handleDeleteExpense = ()=> {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload:props.id,
        })
    }
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="BsFillBagXFill">
                ${props.cost}
                
                </span>
                {/* <IconName></IconName> */}

                {/* <TiDelete></TiDelete>                */}
            </div>

        </li>
    )
}

export default ExpenseItems