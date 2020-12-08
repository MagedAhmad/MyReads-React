import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger'

class SearchBooks extends Component {
    state = {
        query: '',
        books: [],
        error: false
    }

    search = (event) => {
        if(event.target.value) {
            BooksAPI.search(event.target.value.trim()).then((resp) => {
                if(resp.length > 0) { 
                    this.setState({error : false})
                    this.setState({books: resp})
                }else {
                    this.setState({error : true})
                    this.setState({books : []})
                }
            })
        }else {
            this.setState({error : true})
            this.setState({books : []})
        }
    }
    
    render() {
        const { books, changeShelf} = this.props

        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search" >Close</button>
                </Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={this.query} onChange={this.search} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map( book => {
                    let defaultShelf = 'none'
                    books.forEach(matchedBook  => {
                        if (book.id === matchedBook.id) {
                            defaultShelf = matchedBook.shelf
                        } else {
                            book.shelf = "none"
                        }
                    })

                    return (
                        <li key={book.id}>
                            <h1>{defaultShelf} </h1>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks ? book.imageLinks.thumbnail : ''}')` }}></div>
                                    <ShelfChanger book={book} changeShelf={changeShelf} defaultShelf={defaultShelf} />
                                </div>
                                <div className="book-title">{ book.title }</div>
                                <div className="book-authors">{ (book.authors) ? book.authors.map(author => author) : '' }</div>
                            </div>
                        </li>
                )})}
                {(this.state.error) ? (
                    <p>No search results</p>
                ) : ''}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks