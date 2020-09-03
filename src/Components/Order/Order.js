import React, { Component } from 'react';
import './Order.css';

export class OutOfStock extends Component {
    render() {
        return (
            <div>
                <div className="container emp-profile">
                    <div>
                        <form className="form-inline md-form mr-auto mb-4">
                            <input type="submit" className="search-btn aqua-gradient btn_delete_selected_article" name="btnAddMore" value="Nouvelle commande"/>
                            <input type="submit" className="search-btn aqua-gradient btn_delete_selected_article" name="btnAddMore" value="Entrer une réception"/>
                        </form>
                    </div> 
                    <div className="tab-content table_previous_purchase">
                        <div className="tab-pane active" id="home">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Titre</th>
                                            <th>Edition</th>
                                            <th>Fournisseur</th>
                                            <th>Prix</th>
                                            <th>Quantité en commande</th>
                                        </tr>
                                    </thead>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>
                                                <input type="checkbox" id="scales" name="scales" checked />
                                            </td>
                                            <td>Hunger Games Tome 1</td>
                                            <td>Galimard</td>
                                            <td>Chante Livre</td>
                                            <td>12.50€</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>
                                                <input type="checkbox" id="scales" name="scales" />
                                            </td>
                                            <td>Rose fanée</td>
                                            <td>Galimard</td>
                                            <td>Chante Livre</td>
                                            <td>15€</td>
                                            <td>2</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>
                                                <input type="checkbox" id="scales" name="scales" checked />
                                            </td>
                                            <td>Le lambeau</td>
                                            <td>Galimard</td>
                                            <td>Chante Livre</td>
                                            <td>20€</td>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                    <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>
                                                <input type="checkbox" id="scales" name="scales"  />
                                            </td>
                                            <td>Chanson douce</td>
                                            <td>Galimard</td>
                                            <td>Chante Livre</td>
                                            <td>22€</td>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                </table>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OutOfStock
