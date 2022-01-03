import React from 'react'
import { useNavigate } from "react-router-dom";

const BookList = ({name, author, price, quantity, id, handleDelete }) => {
    let navigate = useNavigate();
    console.log(id);
    const handleDeleteBook = (id) => {
        console.log(id);
        handleDelete(id)
    }

    const handleEditBook = (id) => {
        navigate(`/books/${id}`);
    }


    return (
        <div className="bg-purple-500 text-white p-3 rounded-sm">
            <div className="flex justify-between mb-2">
                <div className="font-bold">Name:</div>
                <div>{name}</div>
            </div>
            <div className="flex justify-between mb-2">
                <div className="font-bold">Author:</div>
                <div>{author}</div>
            </div>
            <div className="flex justify-between mb-2">
                <div className="font-bold">Price:</div>
                <div>{price}</div>
            </div>
            <div className="flex justify-between mb-2">
                <div className="font-bold">Quantity:</div>
                <div>{quantity}</div>
            </div>
            <div className="space-x-2 mt-4">
                <button className="bg-green-500 px-4 text-white rounded-sm py-1" onClick={() => handleEditBook(id)} >Edit</button>
                <button className="bg-red-500 px-4 text-white rounded-sm py-1" onClick={() => handleDeleteBook(id)}>Delete</button>
            </div>
        </div>
    )
}

export default BookList
