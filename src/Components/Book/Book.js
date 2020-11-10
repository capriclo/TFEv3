import React, { Component } from 'react';
import './Book.css';

export class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test2:'',
          error: null,
          isLoaded: false,
          book: []
        };
        var url = document.URL;
        const quote = "\"";  
        var true_url = "" +quote +url +quote
        console.log(true_url);
        this.state.test2 =  url.substr(+27)
      }

      componentDidMount() {
        this.dbcall();
        this.dbcall();
        
      }

      dbcall = e =>{
        console.log(this.state.test2)
        console.log("http://localhost:3014/books/" +this.state.test2)
        fetch("http://localhost:3014/books/" +this.state.test2)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                isLoaded: true,
                book: result.book
              });
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
       

    render() {
        if(this.state.book) {
            return (
                <div>
                    <div className="container emp-profile">
                    {this.state.book.map(book => 
                        <form method="post">
                            <div className="row">
                                <div className="col-md-6 client_id">
                                    <div className="profile-head">
                                        <h1>
                                        Livre {book.idbooks}
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-md-2 client_button">
                                    <a href="/archived_clients"><input className="archive-client-btn aqua-gradient" name="btnAddMore" value="Archiver le client"/></a>
                                    <a href={"/UpdateClient/" +this.state.test2 }><input className="update-client aqua-gradient" name="btnAddMore" value="Mettre à jour le client"/></a>
                                </div>
                            </div>
                            <div className="row client_data">
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Nom</label>
                                                </div>
                                                <div className="caracteristics">
                                                    <p>{book.Title}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Code du livre</label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <p>{book.Book_code}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Fournisseur</label>
                                                </div>
                                                <div className="caracteristics">
                                                    <p>{book.Supplier}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Edition</label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <p>{book.Edition}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Taux de TVA</label>
                                                </div>
                                                <div className="caracteristics">
                                                    <p>{book.VAT}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Code-barres</label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <p>{book.Barcode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Autheur</label>
                                                </div>
                                                <div className="caracteristics">
                                                    <p>{book.Author}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Quantité</label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <p>{book.Quantity}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="caracteristics">
                                                    <label>Price</label>
                                                </div>
                                                <div className="caracteristics">
                                                    <p>{book.Price}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Loyalty_discount</label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <p>{book.Loyalty_discount}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        )}
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                </div>
            )
        }
    }

}

export default Book
