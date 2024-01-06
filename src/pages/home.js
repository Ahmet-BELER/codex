import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/Home.css"
import Card from "../components/card"


import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/slices/booksSlices";






export default function Home() {



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const booksState = useSelector((state) => state.books);
/*   const books = booksState.books || [];  */
  const { books, loading } = booksState;

  const BooksItems = books.items;


   useEffect(() => {
    if (!books.length) {
      dispatch(fetchBooks());
    }
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(BooksItems);
  return (
    <div className="home">
      <div className="inputCover">
        <input placeholder="search Author" />
      </div>

      <div className="booksCover">
        <div className="books">
          
          {Array.isArray(BooksItems) && BooksItems.length > 0 ? (
            BooksItems.map((book) => <Card key={BooksItems.id} book={book} />)
          ) : (
            <div>No books found</div>
          )}
        </div>
      </div>
    </div>
  );
}
