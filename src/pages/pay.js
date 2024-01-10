import React from 'react';


const Pay = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6"> 
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Ödeme</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="cardNumber">Kart Numarası</label>
                  <input type="text" className="form-control" id="cardNumber" placeholder="Kart Numaranız" />
                </div>
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="expiryDate">Son Kullanma Tarihi</label>
                    <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
                  </div>
                  <div className="col">
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" className="form-control" id="cvc" placeholder="CVC" />
                  </div>
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="amount">Tutar</label>
                  <input type="text" className="form-control" id="amount" placeholder="Ödenecek Tutar" />
                </div>
                <button type="submit" className="btn btn-success btn-block mt-4">Ödemeyi Tamamla</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
