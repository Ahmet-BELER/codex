import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import "../css/Home.css"
import Card from "../components/card"


export default function Home() {
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading)
  console.log(loading);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <div className="inputCover">
        <input placeholder="search Author" />
      </div>

      <div className="booksCover">
        <div className="books">
          {/* books listesini map fonksiyonu ile döngüye alarak her bir kitabı Card bileşeni içinde görüntüle */}
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}