import React from 'react'
import "../css/Card.css"
export default function Card({book}) {
    console.log(book);
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 cardCover" >

            <div class=" my-custom-class">

            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
  <img alt="imgCard" className="cardİmage" src={book.volumeInfo.imageLinks.thumbnail} />
)}

<div className="card-body">
    <h5 className="card-title">{book.volumeInfo.title}</h5>
    <p className="card-text">{book.volumeInfo.authors[0]}     {book.volumeInfo.authors.length > 1 && (
        <p className="card-text">{book.volumeInfo.authors[1]}</p>
    )}</p>

</div>
<button className='miniButton'>Sepete ekle</button>



            </div>

        </div>
    )
}
