import React, { Component } from 'react';
import './Basket.css';
//import { JsonToTable } from "react-json-to-table";

    var books_array = [];


export class Basket extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [{title : "toto", prix :48.59, tva : "6%", quantity : 5, barcode: "Caca boudin", total_ttc :"257,5"},
                    {title : "tata", prix :100, tva : "6%", quantity : 1, barcode: "Caca boudin2", total_ttc :"106"}] 
        }
    }
    searchbarcode = item => {
    fetch("http://localhost:3012/barcode/" +"çè!é!àà&à&à§'")
                .then(res => res.json())
                .then(
                  (result) => {
                      console.log("titre " + JSON.stringify(result.book[0]));
                      console.log("books before" +JSON.stringify(this.state.books));

                    var data = {
                        title : result.book[0].Title,
                        prix : result.book[0].Price,
                        tva : result.book[0].VAT,
                        quantity : 1,
                        barcode : result.book[0].Barcode,

                    }
                    console.log("data = " +JSON.stringify(data));
                    books_array = JSON.parse(JSON.stringify(data));
                   console.log("books_array = " +JSON.stringify(books_array))
                       
                   /* this.setState({
                        books : this.state.books +books_array
                    })*/
                    console.log("books after" +JSON.stringify(this.state.books));

                  },
                  (error) => {
                   /* this.setState({
                      isLoaded: true,
                      error
                    });*/
                  })
    }
    
    render() {

        return (
            <div>
                <div className="tab-content table_previous_purchase">
                                    <div className="tab-pane active" id="home">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                    <th>Titre</th>
                                                    <th>P. U. HTVA</th>
                                                    <th>TVA</th>
                                                    <th>Quantité</th>
                                                    <th>Code barres</th>
                                                    <th>Total TTC</th>
                                                    </tr>
                                                </thead>
                                                  {/*  {this.state.books.map(book =>
                                                    <tr key={book} data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                        <td>{book.title}</td>
                                                        <td>{book.prix}</td>
                                                        <td>{book.tva}</td>
                                                        <td>{book.quantity}</td>
                                                        <td>{book.barcode}
                                                        </td>
                                                        <td>{((book.prix +book.prix*0.06)*book.quantity).toFixed(2)}</td>
                                                  </tr>)*/}
                                            </table>
                                        </div>
                                    </div>
                                    </div>
                                    <button value="search code" onClick={this.searchbarcode}>Rechercher</button>
                                    <ul>
                                                {books_array.map(item => 
                                                <li key="papa">{item}</li>
                                                )}
                                            </ul>
                </div>
        )}
}

export default Basket