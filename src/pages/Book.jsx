import React, { Component } from 'react'
import Header from '../components/Header'
import { BookItem, NoRecords } from '../components/Book'
export default class Book extends Component {
    render() {
        const { books, handleDelete } = this.props
        return (
            <>
            <Header />
            <div className="container m-auto mt-4">
                { 
                    books.length > 0 ? 
                        <BookItem 
                            books={books} 
                            handleDelete={handleDelete}
                         />
                    :
                    <NoRecords /> 
                }
            </div>
            </>
        )
    }
}
