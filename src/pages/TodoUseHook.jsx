import React, { useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoUseHook = () => {
   
    const todos = CustomHook()

    const addtodo = (e) => {
        e.preventDefault()
        todos.addTodo(todos.text)
    }
 
    return (
        <div className="w-1/2 m-auto">
                <form onSubmit={addtodo}>
                    <div className="grid grid-cols-3 mt-4">

                        <input onChange={todos.onChangeText} value={todos.text}  name="text" type="text" className="block w-full col-span-2" placeholder="" />
                        <button className="bg-blue-500 px-12 text-white col-span-1">{`${todos.edit ? 'UPDATE': 'ADD'}`}</button>

                        {todos.error && 
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
                                {todos.data.map(item => 
                                     <li key={item.id} class="flex space-x-4 justify-between py-2 border-b items-center">
                                        <span>{item.text}</span>
                                        <span class="space-x-4">
                                        <button onClick={() =>  todos.EditTodo(item.id)} class="bg-green-500 py-1 px-4">Edit</button>
                                        <button onClick={() =>  todos.RemoveTodo(item.id)} class="bg-red-500 py-1 px-4">Delete</button>
                                        </span>
                                    </li>
                                )}
                               
                            </ul>
                        {todos.data.length === 0 &&  <p className="text-red-500 text-base font-bold text-center mt-4">no records found</p> }
                       
                    </div>
                </div>
            </div>
            </div>
    )
}

export default TodoUseHook


const CustomHook = (initialState = []) => {
    const [data, setData] = useState(initialState)
    const [edit, setEdit] = useState(false)
    const [currentId, setCurrentId] = useState(null)
    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    const addTodo = useCallback(
        (todo) => {

            if (!todo) return 
            if (edit) {
                const updateTodo = data.map(item => {
                    if (item.id === currentId) {
                        return {
                            ...item,
                            text: todo
                        }
                    }
                    return item
                })

                setCurrentId(null)
                setEdit(false)
                setText('')
                setData(updateTodo)
            } else {
                const newTodo = {
                    id: uuidv4(),
                    text:todo
    
                }
                setData((prev) => ([...prev, newTodo]))
                setCurrentId(null)
                setEdit(false)
                setText('')
            }
            
        },
        [data, edit, currentId, error],
    )

    const RemoveTodo = useCallback(
        (id) => {
            const newTodo = data.filter(item => item.id !== id)
            setData(newTodo)
        },
        [data],
    )

    const EditTodo = useCallback(
        (id) => {
            console.log(id);
            const findTodo = data.find(item => item.id === id)
            setCurrentId(id)
            setEdit(true)
            setText(findTodo.text)
        },
        [edit, currentId, text],
    )

    const onChangeText = useCallback(
        (e) => {
            setText(e.target.value)
        },
        [text],
    )


    return {
        data,
        text,
        error,
        edit,
        addTodo,
        RemoveTodo,
        EditTodo,
        onChangeText
    }
}
