import "./App.css";

export const Task = (props) => {
    return (
        <div className="task" style ={{backgroundColor : props.completed ? "#FFDAB9" : "white"}}>
            <h2>{props.taskName} &nbsp; &nbsp; </h2>
            <button class="button-4" onClick={() => props.completeTask(props.id)}>Complete</button>
            <button class="button-4" onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    );
};