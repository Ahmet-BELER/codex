import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToSepet } from '../redux/slices/booksSlices';
import { Link } from "react-router-dom";
import "../css/sepet.css";

export default function Sepet() {

  const sepetBooks = useSelector(state => state.books.sepetBooks)
  const dispatch = useDispatch();

  const handleRemoveFromSepet = (bookId) => {
    dispatch(removeToSepet(bookId));
  };

  const totalAmount = sepetBooks.reduce((total, book) => {
    if (book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount) {
      return total + book.saleInfo.listPrice.amount;
    }
    return total;
  }, 0);

  return (
    <div className="sepetDetail">
  <div className="col-lg-6 col-md-6 col-sm-12 col-12 bookSepet1 ">
      <div className={`sepet_Cover ${sepetBooks.length === 0 ? 'emptyCover' : ''}`}>
      
          <ul className="sepetList1">
          

            {sepetBooks.map(book => (
              
              <li key={book.id} className="sepet-book1">
           
              <div className="bookInt">
                    <div>
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                  <img alt="imgCard" style={{ width: "100px", height: "100px" }} src={book.volumeInfo.imageLinks.thumbnail} />
                )}
                     </div>
                <div className="book-info1">
                  <h3>{book.volumeInfo.title}</h3>
                  <p className="price1">  {
                    book && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ?
                      <p className="price1"> {book.saleInfo.listPrice.amount} TL</p> :
                      <p className="notFondPrice1">Selling price not available in API</p>
                  }</p>

                </div>
                <div>
                <img
                  src={"/image/delete.png"}
                  style={{ width: "30px", height: "30px", margin: "20px" }}
                  onClick={() => handleRemoveFromSepet(book.id)}

                />
                </div>
                </div>
              </li>
            ))}

          </ul>
        </div>


        <div className="total1">
        Total:  {totalAmount} TL
        <Link to={`/pay`}>
          <button type="button" className="btn btn-success btn1">
            Ödeme Yap
         </button>
         </Link>
        </div>
      </div>
    </div>
  )
}
