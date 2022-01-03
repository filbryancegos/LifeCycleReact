import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Item = () => {
    const [text, setText] = useState('')
    const [error, setError] = useState(false)
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(null)
    const [item, setItem] = useState([
        {
            id: 1,
            text: 'Eking'
        },
        {
            id: 2,
            text: 'Amang'
        },
    ])

    const handleText = (e) => {
        const { value } = e.target;
        setText(value)
    }

    const handleAddUser = (e) => {
        e.preventDefault()

        if (text.trim() === '') {
            setError(true)
            return
        }

        if (edit) {
           const newItems = item.map(el => {
               if (el.id === id) {
                   return {
                       ...el,
                       text
                   }
               }
               return el
           })
            setText('')
            setError(false)
            setEdit(false)
            setId(null)
            setItem(newItems)      

        } else {
            const newText = {
                id: uuidv4(),
                text
            }
    
            const newItem = [...item,newText ]
            setItem(newItem)
            setText('')
            setError(false)
            setEdit(false)
            setId(null)
        }
    }

    const handleDelete = (id) => {
        const newItems = item.filter(el => el.id !== id)
        setItem(newItems)
    }
    
    const handleEdit = (id) => {
        setEdit(true)
        setId(id)
        const findId = item.find(el => el.id === id)
        const { text } = findId
        setText(text)
    }

    return (
        <div className="container m-auto">
            <form onSubmit={handleAddUser}>
                <div className="flex justify-between">
                    <input type="text" value={text}  onChange={handleText} className="w-full" />
                    <button type="submit" className="bg-blue-500 py-1 px-4">{`${edit ? 'Update':'Submit'}`}</button>
                </div>
                {error && <p className="text-base text-red-500 pt-1">Please input field</p>}
            </form>
            <div className="mt-4">
                <List list={item} handleDelete={handleDelete} handleEdit={handleEdit} />
            </div>
        </div>
    )
}

const List = React.memo(({list, handleDelete, handleEdit}) => {
    return (
        <div>
            <ul>
                {list.map(eking =>
                    <ListItem key={eking.id} {...eking} handleDelete={handleDelete} handleEdit={handleEdit}  />
                )} 
            </ul>
        </div>
    )
})

const ListItem = React.memo(({text,id, handleDelete, handleEdit}) => {
    return (
        <>
            <li className="flex space-x-4 justify-between py-2 border-b items-center">
                <span>{text}</span>
                <span className="space-x-4">
                    <button onClick={() => handleEdit(id)} className="bg-green-500 py-1 px-4">Edit</button>
                    <button onClick={() => handleDelete(id)} className="bg-red-500 py-1 px-4">Delete</button>
                </span>
            </li>
        </>
    )
})


export default Item