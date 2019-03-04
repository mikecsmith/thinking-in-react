import React from 'react';
import BookFilter from './BookFilter';
import BookList from './BookList';
import books from '../../mocks/books';

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFilter: 'All',
      books
    }
  }

  selectFilter = filter => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === 'All'
          ? books
          : books.filter(book => book.category === filter)
    })
  }

  render() {
    const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

    const tabItems = filters.map(filter => (
      <li
        className={filter === this.state.selectedFilter ? 'active' : ''}
        key={filter}
        onClick={() => this.selectFilter(filter)}
      >
        <a href="#0">{filter}</a>
      </li>
    ))

    return (
      <section id="books">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Books</h2>
                <hr className="star-primary" />
              </div>
            </div>
            <BookFilter tabItems={tabItems} />
            <BookList bookList={this.state.books}/>
        </div>
      </section>
    )
  }
}

export default Books;