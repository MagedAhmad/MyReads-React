import React from 'react'
import ListBooks from './ListBooks'

const BookShelf = (props) => {

    const shelfs = [
        'currentlyReading', 'wantToRead', 'read'
    ]

    const { books, changeShelf } = props

    return (
        <div>
            { shelfs.map((shelf) => {
                const shelfBooks = books.filter(book => book.shelf === shelf)
                return (
                <div key={shelf} className="bookshelf">
                    <h2 className="bookshelf-title">{shelf}</h2>
                    <div className="bookshelf-books">
                            <ListBooks books={shelfBooks} changeShelf={changeShelf} />
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default BookShelf