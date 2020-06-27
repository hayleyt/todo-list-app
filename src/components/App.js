import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

class App extends React.Component {
  	constructor() {
		super();
			this.state = {
			todos: [],
			id: 0,
			newTodo: ""
		};
  	}

   handleChange = (id) => {
      this.setState(prevState => {
         const newTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
               return {
                  ...todo,
                  completed: !todo.completed
               }
            }
            return todo
         })
         return {
            todos: newTodos
         }
      })
   }

   handleDelete = (id) => {
      this.setState(prevState => {
         const newTodos = prevState.todos.filter(todo => {
            return todo.id !== id
         })
         return {
            todos: newTodos
         }
      })
   }

   handleEdit = (id, text) => {
      this.setState(prevState => {
         const newTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
               return {
                  ...todo,
                  text: text
               }
            }
            return todo
         })
         return {
               todos: newTodos
            }
      })
   }

   handleNewTodo = (e) => {
      this.setState({
         newTodo: e.target.value
      })
   }

   handleSubmit = (e) => {
      e.preventDefault();
      const nextId = this.state.id + 1
      const text = e.target.newTodo.value
      const completed = e.target.isCompleted.checked
      const newTodo = {
         id: nextId,
         text: text,
         completed: completed
      }
      const newTodosList = this.state.todos.concat(newTodo)

      this.setState({
         todos: newTodosList,
         id: nextId,
         newTodo: ""
      })
   }

   render() {
      const todoItems = this.state.todos.map(item => 
         <TodoItem 
            key={item.id} 
            todo={item} 
            handleChange={this.handleChange} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
         />)

      return (
         <div className="page">
            <div className="header">
               <h1>Todo List App built with Reactjs</h1>
            </div>
            <div className="todo-list">
               {todoItems}
            </div>
            <AddTodo 
               handleSubmit={this.handleSubmit}
               value={this.state.newTodo}
               handleNewTodo={this.handleNewTodo}
            />
         </div>
      )
   }
   }

export default App;