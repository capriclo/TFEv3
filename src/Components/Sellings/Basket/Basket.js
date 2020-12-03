import React, { Component } from 'react';
import './Basket.css';
//import { JsonToTable } from "react-json-to-table";

    var books_array = [];
    var i = 3;
    let book_exist = 0;
    var b = 0;
    var index_basket = 0;
    var datav2 = [];
    var quantity_available = false;


export class Basket extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
            books_basket : []
        }
    }
    searchbarcode = item => {
        var barcode = document.getElementById('barcode').value;
        console.log(barcode);
        this.state.books_basket.map(function(livre){
            if(livre.barcode === barcode){
                book_exist = 1
                

            }else{
                book_exist = 0
            }
        })
        if (book_exist === 1){
            this.state.books_basket.map(function(livrev2){
                if(livrev2.barcode === barcode){
                    if (livrev2.quantity +1 < livrev2.quantity_max){
                        quantity_available = true;
                        var new_quantity = livrev2.quantity +1;
                        console.log("new_quantity" +new_quantity);
                        console.log("index_basket = " +index_basket);

                        datav2 = {
                            basket : livrev2.basket,
                            title : String(livrev2.title),
                            prix : Number(livrev2.prix),
                            tva : String(livrev2.tva),
                            quantity : Number(new_quantity),
                            quantity_max : Number(livrev2.quantity_max),
                            barcode : String(livrev2.barcode)
                        }

                        console.log("datav2 = " +JSON.stringify(datav2));

                    }else{
                        quantity_available = false;
                    }
                                
                }
                index_basket++;
            })

            if( quantity_available === true){
                console.log("quatity_available : " +quantity_available)
                this.state.books.splice(index_basket, 1, datav2);
                this.state.books.splice(index_basket-1,1);

                this.setState({
                    books : this.state.books,
                    books_basket : Array.from(this.state.books)
                })

            }
            
            index_basket = 0;
                    

        }else{

            fetch("http://localhost:3012/barcode/" +barcode)
                .then(res => res.json())
                .then(
                  (result) => {
                      var title = result.book[0].Title
                        var data = {
                            basket : i,
                            title : String(title),
                            prix : Number(result.book[0].Price),
                            tva : String(result.book[0].VAT),
                            quantity : 1,
                            quantity_max : Number(result.book[0].Quantity),
                            barcode : String(result.book[0].Barcode),

                        }
                        i++;
                        console.log("data = " +JSON.stringify(data));
                        console.log("books_array = " +JSON.stringify(books_array))

                        if (b % 2 === 1){
 
                            this.state.books.push(data);
                        
                            this.setState({
                                books : this.state.books,
                                books_basket : Array.from(this.state.books)
                            })
                            console.log("books after" +JSON.stringify(this.state.books));
                            console.log("books basket" +JSON.stringify(this.state.books_basket));
            
                        }
                        b++;


                  },
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  })


        }

    }
    
    render() {
        if(this.state.books){
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
                                {
                                this.state.books_basket.map((book,index) =>
                                    <tbody key={index} id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>{book.title}</td>
                                            <td>{book.prix}</td>
                                            <td>{book.tva}</td>
                                            <td>{book.quantity}</td>
                                            <td>{book.barcode}
                                            </td>
                                            <td>{((book.prix +book.prix*0.06)*book.quantity).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                    </div>
                    <input id='barcode' type="text" placeholder="Search"></input>
                    <button value="search code" onClick={this.searchbarcode}>Rechercher</button>
                </div>
        )}}
}

export default Basket