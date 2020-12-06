import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf' 
import SearchBooks from './SearchBooks'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  changeShelf = (book, newShelf) => {
    if(newShelf !== book.shelf) {
      BooksAPI.update(book, newShelf).then((resp) => {
        this.getAll()
      })
    }
  }

  getAll = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  componentDidMount() {
    this.getAll()
  }

  render() {
    return (
      <div className="app">
        <Route path="/search"> 
          <SearchBooks books={this.state.books} changeShelf={this.changeShelf}/>
        </Route>
        <Route exact path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf books={this.state.books} changeShelf={this.changeShelf}/>                
            </div>
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        </Route>
      </div>
    )
  }
}

export default BooksApp
