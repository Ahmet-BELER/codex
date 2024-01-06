import React from 'react'
import "../css/Card.css"
export default function Card() {
    return (
        <div className="cardCover" >

            <div class="col-lg-3 col-md-4 col-sm-6 col-12 my-custom-class">

                <img alt="imgCard" className="cardİmage" src={"/image/openlibrary-logo.svg"} />

                <div className="card-body">

                    <h5 class="card-title">Başlık 1</h5>
                    <p class="card-text">Kart içeriği 1.</p>

                </div>


            </div>

        </div>
    )
}
