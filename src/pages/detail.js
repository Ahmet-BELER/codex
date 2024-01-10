import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBooks ,addToSepet} from '../redux/slices/booksSlices';
import "../css/Detail.css"

export default function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const booksState = useSelector((state) => state.books);
  const { books, loading } = booksState;
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);


  useEffect(() => {

    if (Array.isArray(books.items)) {


      const foundBook = books.items.find((book) => book.id === id);
      setItem(foundBook);

    }
  }, [id, books]);



  const handleSepeteEkle = () =>{
    dispatch(addToSepet(item))
}


  return (
    <div className="detailCover">


      <div className=" twoAreaCover">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 imgHeader">

          <div className="imgCover">
            {item && item.volumeInfo && item.volumeInfo.imageLinks && (
              <img src={item.volumeInfo.imageLinks.thumbnail} className="İmageDatail" />
            )}

           
            <div className='priceButton'>
            <div>
            {
                item && item.saleInfo.listPrice && item.saleInfo.listPrice.amount ?
                  <p className="price"> {item.saleInfo.listPrice.amount} TL</p> :
                 <p className="notFondPrice">Selling price not available in API</p>
              }
</div>
              <div className="detailButton" onClick={handleSepeteEkle} >Sepete Ekle</div>

            </div>
           

            

           
          </div>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12  description">
          {
            item && item.volumeInfo && item.volumeInfo.description ?
              <p>{item.volumeInfo.description}</p> :
              null
          }



        </div>
      </div>








    </div>
  );
}
