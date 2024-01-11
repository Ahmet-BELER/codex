import React from 'react';
import "../css/Header.css"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';



export default function Header() {

    const sepetBooks = useSelector(state => state.books.sepetBooks)


    return (

        <div className="top">

            <div className="header">
                <Link to={`/`}>

                    <img src={"/image/openlibrary-logo.svg"} alt='headerİmage' />
                </Link>
            </div>

            <div className="sepetCover">
                <div className='sepetLength'>{sepetBooks.length}</div>
                <div>
                    <div className="sepetIcon">
                        <Link to={`/sepet`}>
                            <img src={"/image/shopping.png"} className="icon" alt="whatsap" />
                        </Link>
                    </div>
                </div>

            </div>

        </div>




    )




}