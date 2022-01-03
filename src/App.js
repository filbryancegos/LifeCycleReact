import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav'
import AddBook from './components/Book/AddBook'
import EditBook from './components/Book/EditBook'

import { Todo, Book, Weather, Item, Customhook, FetchClass, FetchFunctional, Infinite, TodoUseHook, UseReducer } from './pages'


export default class App extends Component {

  constructor(props) {
    super(props);
    const initialBook = JSON.parse(localStorage.getItem('books2')) || []
    console.log(initialBook);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    const initialBook = JSON.parse(localStorage.getItem('books2')) || []
    console.log('initialBook');
    // localStorage.setItem('books2', JSON.stringify(this.state.books))
    this.setState({
      books: initialBook
    })
  }

  handleDelete = (id) => {
    console.log(id);
    const newBook = this.state.books.filter(book => book.id !== id)
    this.setState({books: newBook})
  }

  handleUpdate = (book) => {
    const { id } = book
    const updatedBook = this.state.books.map(item => {
      if (item.id == id) {
         return {
           ...item,
           ...book
         }
      }
      return item
    })
    localStorage.setItem('books2', JSON.stringify(updatedBook))
  }

  handleAddBook = (book) => {
    const newBook = [...this.state.books, book]
    localStorage.setItem('books2', JSON.stringify(newBook))
  }

 

  render() {
    const { books } = this.state
    return (
      <div className="App">
        <Nav />
        <div className="mt-8">
          <Routes>
            <Route path="/" element={
              <Book
                books={books}
                handleDelete={this.handleDelete}
               />
            } />
            <Route path="/create" element={
            <AddBook handleAddBook={this.handleAddBook} />} />
            <Route path="/books/:id" element={
            <EditBook 
              books={books}
              handleUpdate={this.handleUpdate}
             />} />

            <Route path="/todo" element={<Todo />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/item" element={<Item />} />
            <Route path="/customhook" element={<Customhook />} />
            <Route path="/fetch" element={<FetchClass />} />
            <Route path="/fetch2" element={<FetchFunctional />} />
            <Route path="/infinite" element={<Infinite />} />
            <Route path="/todousehook" element={<TodoUseHook />} />
            <Route path="/usereducer" element={<UseReducer />} />

          </Routes>
        </div>
    </div>
    );
  }
}
