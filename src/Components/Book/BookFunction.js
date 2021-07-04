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



    useEffect(() => {
        fetch("http://localhost:3014/books/" +number_of_book)
          .then(res => res.json())
          .then(
            (result) => setBook(result.book)
          )
    }, [] )

    const UpdateBook = userId => {
        console.log('fonction delete id = ' +userId);
        window.location.href = "http://localhost:3000/UpdateBooks/" +userId;
    }

    const DeleteBook = userId => {
        console.log('fonction delete id = ' +userId);
        
          // Note: I'm using arrow functions inside the `.fetch()` method.
          // This makes it so you don't have to bind component functions like `setState`
          // to the component.
          fetch("http://localhost:3014/books/delete/" + userId).then((response) => {
            return response.json();
          }).then((result) => {
            window.location.href = "http://localhost:3000/allBooks";
          });
    }

    console.log("book = " +JSON.stringify(book));

    return(
        <>
            <div>
                <div className="container emp-profile">
                {book.map((val) =>{
                   return <div key={val.idbooks}>
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
                                <button  className="btn btn--radius-2 btn--blue " onClick={e => UpdateBook(val.idbooks)} >Modifier</button>
                                <button  className="btn btn--radius-2 btn--blue btn_delete" onClick={e => DeleteBook(val.idbooks)} >Supprimer</button>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-md-10">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Titre : <h4 className="valeurBook">{val.Title}</h4></label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Code du livre : <h4 className="valeurBook">{val.Book_code}</h4></label>
                                                   
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Fournisseur : <h4 className="valeurBook">{val.Supplier}</h4></label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Edition : <h4 className="valeurBook">{val.Edition}</h4></label>
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Taux de TVA : <h4 className="valeurBook">{val.VAT}</h4></label>
                                                    
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Code-barres : <h4 className="valeurBook">{val.Barcode}</h4></label>
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Autheur : <h4 className="valeurBook">{val.Author}</h4></label>
                                                    
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Quantité : <h4 className="valeurBook">{val.Quantity}</h4></label>
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Price : <h4 className="valeurBook">{val.Price}</h4></label>
                                                    
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Loyalty_discount : <h4 className="valeurBook">{val.Loyalty_discount}</h4></label>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
            )
          </>
    )
}export default BookFunction