import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <div style={{ display:"flex", marginBottom: "5px", marginTop: "5px"  }} id="todolistsection">
            <input type="checkbox" onClick={handleCheckboxClick}/>
            <li style={{
                color: "black",
                paddingRight: "10px",
                textDecoration: todo.completed ? "line-through" : null
                }}
            >{todo.task}</li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Todo;