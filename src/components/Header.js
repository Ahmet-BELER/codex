import React from 'react';
import "../css/Header.css"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';



export default function Header() {

    const sepetBooks = useSelector(state => state.books.sepetBooks)


    return (

        <div className="top">

            <div className="header">


                <img src={"/image/openlibrary-logo.svg"}  alt='headerİmage'/>

            </div>

        </div>




    )




}