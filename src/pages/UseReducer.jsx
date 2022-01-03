import React, {useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const UseReducer = () => {

    const initialState = {
        todos: [
            {
                id: uuidv4(),
                text: 'Eking'
            },
            {
                id: uuidv4(),
                text: 'Amang'
            },
        ]
    } 

    const [state, dispatch] = useReducer(reducer, initialState);

    const [text, setText] = useState('')
    const [currentId, setCurrentId] = useState(null)
    const [error, setError] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleDelete = (id) => {
        dispatch({
            type: REMOVE_TODO,
            id
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            setError(true)
            return
        }

        if (edit) {
            dispatch({
                type: UPDATE_TODO,
                text,
                id: currentId
            })
            setEdit(false)
            setCurrentId(null)
            setText('')
        } else {
            dispatch({
                type: ADD_TODO,
                text
            })
            setEdit(false)
            setCurrentId(null)
            setText('')
            setError(false)
        }
        
    }

    const handleUpdate = (todo) => {
        const { id, text } = todo
        setEdit(true)
        setCurrentId(id)
        setText(text)
    }

    return (
        <div className="w-1/2 m-auto">
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 mt-4">
                <input value={text} onChange={(e) => setText(e.target.value)} name="text" type="text" className="block w-full col-span-2" placeholder="" />
                <button className="bg-blue-500 px-12 text-white col-span-1">{`${edit? 'Update': 'Add'}`}</button>

                {error && 
                    <div>
                        <p className="text-red-500 text-base">Please Input Todos</p>
                    </div> 
                }
                
            </div>
        </form>
        <div className="mt-4">
            <h1 className="text-black text-2xl font-bold text-center">All Task</h1> 

            <div class="mt-4">
                <div>
                    <ul>
                        {state.todos.map(todo => 
                             <li key={todo.id} class="flex space-x-4 justify-between py-2 border-b items-center">
                                <span>{todo.text}</span>
                                <span class="space-x-4">
                                <button onClick={() => handleUpdate(todo)} class="bg-green-500 py-1 px-4">Edit</button>
                                <button onClick={() => handleDelete(todo.id)} class="bg-red-500 py-1 px-4">Delete</button>
                                </span>
                            </li>
                        )}
                       
                    </ul>
                    {state.todos.length < 1  && <p className="text-red-500 text-base font-bold text-center mt-4">no records found</p> }
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default UseReducer

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO'
const UPDATE_TODO = 'UPDATE_TODO'

const reducer = (state, action) => {

    const { type, id, text } = action

    if (type === ADD_TODO) {

        const newTodo = {
            id: uuidv4(),
            text
        }
        return {
            ...state,
            todos: [ ...state.todos, newTodo  ]
        }
    }

    if (type === REMOVE_TODO) {
        const newTodo = state.todos.filter(todo => todo.id !== id)
        return {
            ...state,
            todos: newTodo
        }
    }

    if (type === UPDATE_TODO) {
        const newTodo = state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text
                }
            }
            return todo
        })

        console.log(newTodo);
        return {
            ...state,
            todos: newTodo
        }
    }

    return state.todos
}
