import React, { Component } from 'react'
import Book from './Book'

class ListBooks extends Component {
    render() {
        const { books, changeShelf } = this.props
        return (
            <ol className="books-grid">
                {books.map( book => (
                    <li key={book.id}>
                        <Book book={book} changeShelf={changeShelf} />
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListBooks