import React from 'react';
import {useState, useEffect} from "react";
import './SalesHistory.css';

function SalesHistoryV2(){
   // const [sales_history, setSales_History] = useState([]);
   const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3014/history_sales")
          .then(res => res.json())
          .then(
            (result) => setBooks(result.sellings)
          )
    }, [] )

    console.log('books = ' +books);


    const handleSearchTerm = (e) => {
        console.log("SearchTerm")
        let value = e.target.value;
        setSearchTerm(value);
    };


    console.log("searchTerm = " +searchTerm);


    return (
        <>
            <div>
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
                                            <th>ID vente</th>
                                            <th>Titre</th>
                                            <th>Prix</th>
                                            <th>TVA</th>
                                            <th>Code barre</th>
                                            <th>Quantité</th>
                                            <th>ID du client</th>
                                            <th>Date de la vente</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    {books.filter((val) => {
                                        return val.Title.includes(searchTerm);
                                        }).map((val) =>{
                                    return <tbody id="items" key={val.idsellings}>
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td>{val.idsellings}</td>
                                                <td>{val.Title}</td>
                                                <td>{val.Price}</td>
                                                <td>{val.VAT}</td>
                                                <td>{val.Barcode}</td>
                                                <td>{val.Quantity}</td>
                                                <td>{val.Client_id}</td>
                                                <td>{val.Date_sellings}</td>
                                                <td>{val.Total}</td>
                                            </tr>
                                        </tbody>
                                        } )}
                                </table>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SalesHistoryV2