import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

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
        const { changeShelf} = this.props
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
                  <ListBooks books={this.state.books} changeShelf={changeShelf}/>
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