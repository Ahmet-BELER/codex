import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/Home.css";
import Card from "../components/card";
import { useDispatch } from "react-redux";
import { fetchBooks ,addToSepet} from "../redux/slices/booksSlices";

const PAGE_SIZE = 8;

export default function Home() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const booksState = useSelector((state) => state.books);
  const { books, loading } = booksState;

  const BooksItems = books.items || [] ;

  useEffect(() => {
    if (!books.length) {
      dispatch(fetchBooks());
    }
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const indexOfLastBook = currentPage * PAGE_SIZE;
  const indexOfFirstBook = indexOfLastBook - PAGE_SIZE;
  const filteredBooks = BooksItems.filter((book) => 
  
    book.volumeInfo.title.toLowerCase().includes(searchText.toLowerCase())
    );



  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);




  return (
    <div className="home">
      <div className="inputCover">
      <div className="container ">
      <div className="input-group" style={{ maxWidth: '300px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Kitap adı"
          aria-label="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          
        />
        <button className="btn btn-outline-primary" type="button" id="search-btn">
          Ara
        </button>
      </div>
    </div>
      </div>

      <div className="booksCover">
        <div className="books">
          {Array.isArray(currentBooks) && currentBooks.length > 0 ? (
            currentBooks.map((book) => (
              <Card key={book.id} book={book} />
            ))
          ) : (
            <div>No books found</div>
          )}
        </div>
        <Pagination
          booksPerPage={PAGE_SIZE}
          totalBooks={BooksItems.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
