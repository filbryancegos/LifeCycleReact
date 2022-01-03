import React, { useState } from 'react'
import Header from '../Header'
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
const  AddBook = ({handleAddBook}) => {
    let navigate = useNavigate()
    const [book, setBook] = useState({
        name: '',
        author: '',
        price: '',
        quantity: ''
    })

    const handleInput = (e) => {
        const { value, name } = e.target;
        setBook((setPrevious) => ({
            ...setPrevious,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = { id: uuidv4(), ...book }
        console.log(newBook);
        handleAddBook(newBook)
        navigate(`/`);
    }


    return (
        <>
        <Header />
        <div className="container m-auto mt-4">
        <div className="w-1/2 m-auto" >
            <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                    <span className="text-gray-700">Name</span>
                    <input type="text"
                    value={book.name}
                    name="name"
                    onChange={handleInput} 
                    className="mt-1 block w-full" placeholder="" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Author</span>
                    <input
                    value={book.author}
                    name="author"
                    onChange={handleInput} 
                    type="text" className="mt-1 block w-full" placeholder="" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Price</span>
                    <input
                    value={book.price} 
                    name="price"
                    onChange={handleInput} 
                    type="text" className="mt-1 block w-full" placeholder="" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Quantity</span>
                    <input
                    value={book.quantity}
                    name="quantity"
                    onChange={handleInput}
                    type="text" className="mt-1 block w-full" placeholder="" />
                </label>

                <button type="submit" className="bg-purple-500 py-2 px-12 text-white">Submit</button>
            </form>
        </div>
        
    </div>
        </>
    )
    
}

export default AddBook
