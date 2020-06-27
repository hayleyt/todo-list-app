import React from 'react';

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.todo.completed}
                onChange={() => props.handleChange(props.todo.id)}
            />
            <input
                className={props.todo.completed ? "completed" : null}
                name="textInput"
                onChange={(event) => props.handleEdit(props.todo.id, event.target.value)}
                value={props.todo.text}
            />
            <button onClick={() => props.handleDelete(props.todo.id)}>Delete</button>
        </div>
    )

}

export default TodoItem;