import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import Header from './Header'
import '../css/dark-theme.scss';

class App extends React.Component {
  	constructor() {
		super();
			this.state = {
			todos: [
            {completed: true, id: 1, text: "Add a new task"},
            {completed: false, id: 2, text: "Edit a task by tapping on the text"},
            {completed: true, id: 3, text: "Mark your task completed"},
            {completed: false, id: 4, text: "Delete a task by tapping X"},
            {completed: false, id: 5, text: "This app won't save your list if you refresh"},
         ],
			id: 0,
         newTodo: "",
         isDarkTheme: true
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
      const newTodo = {
         id: nextId,
         text: text,
         completed: false
      }
      const newTodosList = this.state.todos.concat(newTodo)
      this.setState({
         todos: newTodosList,
         id: nextId,
         newTodo: ""
      })
   }

   toggleTheme = () => {
      this.setState({
         isDarkTheme: !this.state.isDarkTheme
      })
   }

   render() {
      const todoItems = this.state.todos.map(item => {
         let todoItem
         if (!item.completed) {
            todoItem = <TodoItem 
                           key={item.id} 
                           todo={item} 
                           handleChange={this.handleChange} 
                           handleDelete={this.handleDelete}
                           handleEdit={this.handleEdit}
                        />
         }
         return todoItem
      })
      const completedItems = this.state.todos.map(item => {
         let todoItem
         if (item.completed) {
            todoItem = <TodoItem 
                           key={item.id} 
                           todo={item} 
                           handleChange={this.handleChange} 
                           handleDelete={this.handleDelete}
                           handleEdit={this.handleEdit}
                        />
         }
         return todoItem
      })

      return (
         <div className={this.state.isDarkTheme ? "page" : "page light-theme"}>
            <Header toggleTheme={this.toggleTheme}/>
            <AddTodo 
               handleSubmit={this.handleSubmit}
               value={this.state.newTodo}
               handleNewTodo={this.handleNewTodo}
            />
            <h2 className="todo-header">TO DO</h2>
            <div className="todo-list">
               {todoItems}
            </div>
            <h2 className="completed-header">COMPLETED</h2>
            <div className="completed-list">
               {completedItems}
            </div>
         </div>
      )
   }
}

export default App;