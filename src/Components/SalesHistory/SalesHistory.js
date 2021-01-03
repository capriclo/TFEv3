import React, { Component } from 'react';
import './SalesHistory.css';

export class ArchivedSuppliers extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          history_sales: []
        };
      }

    componentDidMount() {
        fetch("http://localhost:3014/history_sales")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({
                isLoaded: true,
                history_sales: result.sellings
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
        if(this.state.history_sales) {
            console.log(this.state +"test1")
            console.log(this.state.history_sales)
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
                                    { 
                                        this.state.history_sales.map(sale => 
                                        <tbody id="items">
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td>{sale.idsellings}</td>
                                                <td>{sale.Title}</td>
                                                <td>{sale.Price}</td>
                                                <td>{sale.VAT}</td>
                                                <td>{sale.Barcode}</td>
                                                <td>{sale.Quantity}</td>
                                                <td>{sale.Client_id}</td>
                                                <td>{sale.Date_sellings}</td>
                                                <td>{sale.Total}</td>
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

export default ArchivedSuppliers
