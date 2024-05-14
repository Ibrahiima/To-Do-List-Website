import "./list.css";

function List(props) {

    // Functions Block
    const { tasks, removeTask, markTaskDone} = props;

    return (
        <div class="input-group" style={{borderRadius:"0px 0px 15px 15px"}}>
            {
                tasks.map( task => {
                    return(
                        <div style={{display:"contents"}}>
                            <li href="#" style={{borderRadius:"0px", width:"980px", backgroundColor:"#891A2B85", textDecoration: (task.done===true) ?"line-through":"none" }} class="form-control">{task.task}</li>
                            <button class="btn btn-success" style={{borderRadius:"0px", borderBottom:"2px solid"}} type="button" onClick={() => markTaskDone(task.id)} >Done</button>
                            <button class="btn btn-danger" style={{borderRadius:"0px", borderBottom:"2px solid"}} type="button" onClick={() => removeTask(task.id)}>Delete</button>
                        </div>

                    )
                })
            }
            
        </div>
    )
}

export default List