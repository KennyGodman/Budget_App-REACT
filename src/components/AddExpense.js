import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import{v4 as uuidv4} from 'uuid'
import { type } from "@testing-library/user-event/dist/type";
const AddExpense=()=>{
    const {dispatch} = useContext(AppContext)
    const [name, setName]= useState('')
    const [cost, setCost] = useState('')
    
    const onSubmit =(event)=> {
        event.preventDefault()
        alert('name' + name +'cost'+cost)
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="row ">
                <div className="col-sm">
                    <label for='name'><button>Name</button></label>
                    <input required='required' type='text' className="form-control"
                    id="name"
                    value={name}
                    onChange={(event)=> setName(event.target.value)}>
                        
                    </input>

                </div>
                <div className="col-sm">
                    <label for="cost"><button>Cost</button></label>
                    <input required='required' type='text' className='form-control' id='cost'
                    value={cost}
                    onChange={(event)=> setCost(event.target.value)}></input>

                </div>
                <div className="col-sm">
                 <button type="submit" className="'btn btn-primary" >Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpense