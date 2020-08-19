import React from "react";

function Todo({ todo }) {
    return (
        <input type="checkbox" />
        <li>{todo.task}</li>
        <button></button>
    );
}

export default Todo;