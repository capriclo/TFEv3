import React from 'react';
import {useState, useEffect} from "react";

function OutOfStockFunction(){
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3014/out_of_stock")
          .then(res => res.json())
          .then(
            (result) => setBooks(result.all_oos)
          )
    }, [] )

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    };

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

    console.log("books = " +JSON.stringify(books))

    return(
        <>
        <div className="container emp-profile">
                <div>
                    <form className="form-inline md-form mr-auto mb-4">
                        <input className="form-control mr-sm-2 input-search" id="searchBar" type="text" placeholder="Search" onChange={handleSearchTerm} aria-label="Search" />
                    </form>
                </div> 
                
                    <div className="tab-content table_previous_purchase">
                    <div className="tab-pane active" id="home">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Titre</th>
                                        <th>Code du livre</th>
                                        <th>Fournisseur</th>
                                        <th>Edition</th>
                                        <th>TVA</th>
                                        <th>Code-barres</th>
                                        <th>Autheur</th>
                                        <th>Quantité</th>
                                        <th>Prix</th>
                                        <th>Réduction fidélité</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                {books.filter((val) => {
                                    return val.Title.includes(searchTerm);
                                }).map((val) =>{
                                    return <tbody id="items" key={val.Title}>
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td>{val.Title}</td>
                                                <td>{val.Book_code}</td>
                                                <td>{val.Supplier}</td>
                                                <td>{val.Edition}</td>
                                                <td>{val.VAT}</td>
                                                <td>{val.Barcode}</td>
                                                <td>{val.Author}</td>
                                                <td>{val.Quantity}</td>
                                                <td>{val.Price}</td>
                                                <td>{val.Loyalty_discount}</td>
                                                <td><a href="#" onClick={e => DeleteBook(val.idbooks)} >Supprimer</a></td>
                                            </tr>
                                        </tbody> 
                                })}
                            </table>         
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}export default OutOfStockFunction