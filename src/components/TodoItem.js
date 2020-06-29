import React from 'react';

function TodoItem(props) {
    return (
        <div className={props.todo.completed ? "no-focus-outline todo-item completed" : "no-focus-outline todo-item"}>
            <input 
                type="checkbox" 
                checked={props.todo.completed}
                onChange={() => props.handleChange(props.todo.id)}
                className="no-focus-outline"
            />
            <input
                type="text"
                name="textInput"
                onChange={(event) => props.handleEdit(props.todo.id, event.target.value)}
                value={props.todo.text}
            />
            <button onClick={() => props.handleDelete(props.todo.id)}>
                X
            </button>
        </div>
    )
}

export default TodoItem;