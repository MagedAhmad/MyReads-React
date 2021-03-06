import React, { Component } from 'react'

class ShelfChanger extends Component {
    state = {
        books: [],
    }

    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value)
    }

    render() {
        const defaultShelf = (this.props.defaultShelf) ?  (this.props.defaultShelf) :  (this.props.book.shelf) ? this.props.book.shelf : 'none'
        return (
            <div className="book-shelf-changer">
                <select onChange={this.changeShelf} defaultValue={ defaultShelf }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger