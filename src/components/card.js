import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../css/Card.css";
import { Link } from "react-router-dom";
import {  addToSepet } from '../redux/slices/booksSlices';
export default function Card({ book }) {
    const dispatch = useDispatch();
    const handleSepeteEkle = () => {
        // Sepete ekleme işlemi için redux action'u tetikle
        dispatch(addToSepet(book));
      };
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 cardCover" >
            <div className="my-custom-class">
                <Link
                    to={{
                        pathname: `/book/${book?.id}`,
                        state: {book}
                    }}
                    className="custom-link"  // Yeni eklenen özel stil sınıfı
                >
                    {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                        <img alt="imgCard" className="cardİmage" src={book.volumeInfo.imageLinks.thumbnail} />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                        <p className="card-text">{book.volumeInfo.authors[0]}</p>
                    </div>
                </Link>
                <button className='miniButton' onClick={handleSepeteEkle}>Sepete ekle</button>
            </div>
        </div>
    );
}
