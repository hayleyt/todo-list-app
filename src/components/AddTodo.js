import React from 'react'

function AddTodo(props) {
    return (
        <div className="todo-item">
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="checkbox" 
                    name="isCompleted"
                />
                <input 
                    type="text" 
                    placeholder="Add new task" 
                    name="newTodo" 
                    value={props.value} 
                    onChange={props.handleNewTodo}
                />
                <button>></button>
            </form>
        </div>
    )
}
export default AddTodo