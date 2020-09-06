import React, { Component } from 'react';
import './AllBooks.css';

export class AllBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          books: []
        };
      }

      componentDidMount() {
        fetch("http://localhost:3014/books")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                books: result.books
              });
              console.log(this.state);
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
     if(this.state.books) {
       console.log(this.state.books)
        return (
            <div>
                <div className="container emp-profile">
                    <div>
                        <form className="form-inline md-form mr-auto mb-4">
                            <a href="/new_article"><input className="archive-client-btn btn_all_clients aqua-gradient" name="btnAddMore" value="Nouvel article"/></a>
                            <a href="/archived_clients"><input className="archive-client-btn btn_all_clients aqua-gradient" name="btnAddMore" value="Voir les clients archivés"/></a>
                            <a href="/client"><input className="archive-client-btn btn_all_clients aqua-gradient" name="btnAddMore" value="Archiver le client"/></a>
                            <input className="form-control mr-sm-2 input-search" type="text" placeholder="Search" aria-label="Search" />
                            <input type="submit" className="search-btn aqua-gradient" name="btnAddMore" value="Search"/>
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
                                          <th>Accéder au livre</th>
                                        </tr>
                                    </thead>
                                    { 
                                        this.state.books.map(book => 
                                        <tbody id="items">
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td>{book.Title}</td>
                                                <td>{book.Book_code}</td>
                                                <td>{book.Supplier}</td>
                                                <td>{book.Edition}</td>
                                                <td>{book.VAT}</td>
                                                <td>{book.Barcode}</td>
                                                <td>{book.Author}</td>
                                                <td>{book.Quantity}</td>
                                                <td>{book.Price}</td>
                                                <td>{book.Loyalty_discount}</td>
                                                <td><a href="">Accéder au client</a></td>
                                            </tr>
                                        </tbody>)
                                    }
                                </table>         
                            </div>
                        </div>
                    </div>
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

export default AllBooks
