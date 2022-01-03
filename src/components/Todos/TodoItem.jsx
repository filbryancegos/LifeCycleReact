import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        console.log("render");
        const { todos, handleDelete, handleEdit, onChecked } = this.props
        return (
            <div className="mt-4">
                <ul>
                    {todos && todos.map(todo => 
                        <li key={todo.id} className="flex items-center py-3 justify-between border-b">
                            <div className="text-black font-bold flex items-center space-x-4">
                                <span>{todo.name}</span>
                            </div>
                            <div className="flex items-center ">
                                <button onClick={() => handleEdit(todo.id)} className="bg-green-500 px-4 text-sm text-white py-1">Edit</button>
                                <button onClick={() => handleDelete(todo.id)} className="bg-red-500 px-4 text-sm text-white py-1">delete</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default React.memo(TodoItem)