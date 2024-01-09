import React, { useState } from "react";
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddTask({addTask}){
    const [value,Setvalue] = useState("")
    const additem=()=>{
        addTask(value)
        Setvalue("")
    }
    return(
    <>
    <div className="input-container">
        <input type="text" className="input" placeholder="Add a new Task"
        value={value}
        onChange={(e)=>{Setvalue(e.target.value);}}
        />
        <button onClick={additem} className="btn">Add</button>
    </div>
    </>
    )
}

export default AddTask;