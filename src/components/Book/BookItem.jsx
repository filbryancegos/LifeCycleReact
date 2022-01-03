import React from 'react'
import BookList from './BookList'

const BookItem = ({ books, handleDelete }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {books && books.map((book, index) => 
                <BookList 
                key={index} 
                {...book} 
                handleDelete={handleDelete} 
                 />
            )}
        </div> 
    )
}

export default BookItem
