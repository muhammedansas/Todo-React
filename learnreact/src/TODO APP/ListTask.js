import React from "react";

function ListTask({task ,index,RemoveTask}){
    return(
        <>
        <div className="list-task">
            {task.title}
            <button onClick={()=>{RemoveTask(index)}} className="dlt-btn">delete</button>
        </div>
        </>
    )
}

export default ListTask;