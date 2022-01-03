import React, { Component } from 'react'
import { AddTodo, TodoItem } from '../components/Todos'
import { v4 as uuidv4 } from 'uuid';
import react from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: [
              {
                id: uuidv4(),
                name: 'Eking',
                completed: false
              },
              {
                id: uuidv4(),
                name: 'Brutos',
                completed: true
              }
          ],
          todo: '',
          isEdit: false,
          id: null,
          error: false
        }; 
    }

    addTodo = (e) => {
        e.preventDefault()
        const { isEdit, id, todos } = this.state

        if (this.state.todo.trim() === '') {
            this.setState({
                error: true
            })
            return
        }

        if (!isEdit) {
            const newTodo = {
                id: uuidv4(),
                name: this.state.todo,
                completed: false
            }
            const todos = [...this.state.todos, ...newTodo]
            this.setState({
                todos,
                todo: '',
                error: false
            })
        } else {
            const findTodo = todos.map(todo => {
                if (todo.id === id) {
                   return {
                       ...todo,
                       name: this.state.todo
                   }
                }
                return todo
            })

            this.setState({
                todos: findTodo,
                isEdit: false,
                todo: '',
                error: false
            })
        }
    }

    handleDelete = (id) => {
        const todos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({
            todos,
            isEdit: false,
            todo: '',
            error: false
        })
    }

    handleEdit = (id) => {
        const todo = this.state.todos.find(todo => todo.id === id)
        this.setState({
            todo: todo.name,
            isEdit: true,
            id
        })
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
   
    render() {
        const { todos, todo, isEdit, error  } = this.state
        return (
            <div className="w-1/2 m-auto">
                <form onSubmit={this.addTodo}>
                    <div className="grid grid-cols-3 mt-4">

                        <input onChange={this.handleChange} value={todo} name={todo} type="text" className="block w-full col-span-2" placeholder="" />
                        <button className="bg-blue-500 px-12 text-white col-span-1">{`${isEdit ? 'Update': 'Add Todo'}`}</button>

                        { error && 
                            <div>
                                <p className="text-red-500 text-base">Please Input Todos</p>
                            </div> 
                        }
                    </div>
                </form>
                <div className="mt-4">
                    <h1 className="text-black text-2xl font-bold text-center">All Task</h1> 

                    { todos.length > 0 ? 
                        <TodoItem todos={todos} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
                    :
                        <p className="text-red-500 text-base font-bold text-center mt-4">no records found</p>
                    }
                </div>
            </div>
        )
    }
}

export default react.memo(Todo)