import React, { Component } from 'react';
import './Reception.css';

export class Reception extends Component {
    render() {
        return (
            <div>
                <div className="container emp-profile">
                    <div>
                        <form className="form-inline md-form mr-auto mb-4">
                        Scannez le code-barres de l'article 
                            <input className="form-control mr-sm-2 input-search input-search_reception" type="text" placeholder="Search" aria-label="Search" />
                            <input type="submit" className="search-btn aqua-gradient" name="btnAddMore" value="Déclaré comme reçu"/>
                        </form>
                    </div>
                    <h3>Articles réceptionnés</h3><br />
                    <div className="tab-content table_previous_purchase">
                        <div className="tab-pane active" id="home">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Titre</th>
                                            <th>Auteur</th>
                                            <th>Edition</th>
                                            <th>Qté</th>
                                            <th>Date</th>
                                            <th>EAN</th>
                                            <th>Code-barres</th>
                                            <th>Prix</th>
                                        </tr>
                                    </thead>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Le petit prince</td>
                                            <td>Antoine de Saint-Exupéry</td>
                                            <td>Gallimard</td>
                                            <td>1</td>
                                            <td>10/07/2020</td>
                                            <td>9782070755899</td>
                                            <td>çè!éàèàè((!çç</td>
                                            <td>4.2€</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Le pays maudit</td>
                                            <td>Peyot</td>
                                            <td>Dupuis</td>
                                            <td>1</td>
                                            <td>11/07/2020</td>
                                            <td>9782070755848</td>
                                            <td>çè!é!àà&à&à§'</td>
                                            <td>18€</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Astérix et la transitalique</td>
                                            <td>Jean-Yves Ferry</td>
                                            <td>Albert René</td>
                                            <td>1</td>
                                            <td>12/07/2020</td>
                                            <td>9782070755812</td>
                                            <td>çè!é!§'çè"éèà</td>
                                            <td>15.95€</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Jeu de Bill</td>
                                            <td>Roba</td>
                                            <td>Dupuis</td>
                                            <td>1</td>
                                            <td>13/07/2020</td>
                                            <td>9782070755855</td>
                                            <td>çè!é!àà&à'&""</td>
                                            <td>19.9€</td>
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

export default Reception
