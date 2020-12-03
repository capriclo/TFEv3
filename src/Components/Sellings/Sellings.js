import React, { Component } from 'react';
import './Sellings.css';

var books_array = [];
    var i = 3;
    let book_exist = 0;
    var b = 0;
    var index_basket = 0;
    var datav2 = [];
    var quantity_available = false;

export class Sellings extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [{basket : 1, title : "toto", prix :48.59, tva : "6%", quantity : 5, quantity_max : 5, barcode: "Caca boudin"},
                    {basket: 2 , title : "tata", prix :100, tva : "6%", quantity : 1, quantity_max: 5, barcode: "Caca boudin2"}],
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
                    if (livrev2.quantity < livrev2.quantity_max){
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
                <div className="container emp-profile block_blanc">
                    <div className="contenu_page_basket">
                        <div className="basket_block">
                            <div className="div_search_article">
                                    <input className="form-control mr-sm-2 input-search" id='barcode' type="text" placeholder="Search" aria-label="Search" />
                                    <button onClick={this.searchbarcode} className="btn_search_article search-btn aqua-gradient" name="btnAddMore" value="Rechercher un article">Rechercher un article</button>
                                <div className="div_icons">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-printer print_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 2H5a1 1 0 0 0-1 1v2H3V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h-1V3a1 1 0 0 0-1-1zm3 4H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v1H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/>
                                        <path fillRule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM5 8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5z"/>
                                        <path d="M3 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                    </svg>
                                    <svg width="2e:m" height="2em" viewBox="0 0 16 16" className="bi bi-gift-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3z"/>
                                        <path d="M15 7v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                                    </svg>
                                </div>

                            </div>
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
                        </div>
                    </div>
                </div>
            )
        }
    }
}export default Sellings