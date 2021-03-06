import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

    render() {
        const { book, changeShelf } = this.props
        const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : ''
        
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${thumbnail}')` }}></div>
                <ShelfChanger book={book} changeShelf={changeShelf} />
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ (book.authors) ? book.authors.map(author => author) : '' }</div>
            </div>
        )
    }
}

export default Book