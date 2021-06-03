import './Book.css';
import React from 'react';
import {useState, useEffect} from "react";

function BookFunction(){
    const [book, setBook] = useState([]);
    
    var url = document.URL;
    const quote = "\"";  
    var true_url = "" +quote +url +quote;
    console.log(true_url);
    var number_of_book =  url.substr(+35)
    console.log("number of book : " +number_of_book);

    useEffect(() => {
        fetch("http://localhost:3014/books/" +number_of_book)
          .then(res => res.json())
          .then(
            (result) => setBook(result.book)
          )
    }, [] )

    console.log("book = " +JSON.stringify(book));

    return(
        <>
            <div>
                <div className="container emp-profile">
                {book.map((val) =>{
                   return <form method="post" key={val.idbooks}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/livres/news/ces-livres-qui-font-peur-pour-ne-pas-dormir-de-la-nuit/91133509-1-fre-FR/13-livres-qui-font-peur-pour-ne-pas-dormir-de-la-nuit.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 client_id">
                                <div className="profile-head">
                                    <h1>
                                        Livre n°{val.idbooks}
                                    </h1>
                                </div>
                            </div>
                            <div className="col-md-2 client_button">
                                <a href={"/UpdateClient/" +val.idbooks }><input className="update-client aqua-gradient" name="btnAddMore" value="Mettre à jour le livre"/></a>
                                <input className="update-client aqua-gradient" name="btnAddMore" value="Archiver le livre"/>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-md-10">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Nom</label>
                                                    <p>{val.Title}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Code du livre</label>
                                                    <p>{val.Book_code}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Fournisseur</label>
                                                    <p>{val.Supplier}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Edition</label>
                                                    <p>{val.Edition}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Taux de TVA</label>
                                                    <p>{val.VAT}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Code-barres</label>
                                                    <p>{val.Barcode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Autheur</label>
                                                    <p>{val.Author}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Quantité</label>
                                                    <p>{val.Quantity}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Price</label>
                                                    <p>{val.Price}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Loyalty_discount</label>
                                                    <p>{val.Loyalty_discount}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        })}
                    </div>
                </div>
            )
          </>
    )
}export default BookFunction