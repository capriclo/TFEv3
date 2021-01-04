import React, { Component } from 'react';
import './OutOfStock.css';

export class OutOfStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          OutOfStock: []
        };
      }

    componentDidMount() {
        fetch("http://localhost:3014/out_of_stock")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({
                isLoaded: true,
                OutOfStock: result.all_oos
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
        if(this.state.OutOfStock) {
            console.log(this.state +"test1")
            console.log(this.state.OutOfStock)
        return (
            <div>
                <div className="container emp-profile">
                    <div>
                        <form className="form-inline md-form mr-auto mb-4">
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
                                            <th>id</th>
                                            <th>Titre</th>
                                            <th>Code du livre</th>
                                            <th>Fournisseur</th>
                                            <th>Edition</th>
                                            <th>TVA</th>
                                            <th>Code barre</th>
                                            <th>Autheur</th>
                                            <th>Quantité</th>
                                            <th>Prix</th>
                                            <th>Réduction fidélité</th>
                                        </tr>
                                    </thead>
                                    { 
                                        this.state.OutOfStock.map(book => 
                                        <tbody id="items">
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td>{book.idbooks}</td>
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
        }
    }
}

export default OutOfStock
