import React, { Component } from 'react';
import './ArchivedClients.css';

export class ArchivedClients extends Component {
    render() {
        return (
            <div>
                <div className="container emp-profile">
                    <div>
                        <form className="form-inline md-form mr-auto mb-4">
                            <input className="form-control mr-sm-2 input-search" type="text" placeholder="Search" aria-label="Search" />
                            <input type="submit" className="search-btn aqua-gradient" name="btnAddMore" value="Rechercher"/>
                        </form>
                    </div> 
                    <div className="tab-content table_previous_purchase">
                        <div className="tab-pane active" id="home">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Date d'archivage</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Ada Lovelace</td>
                                            <td>10/12/2012</td>
                                            <td className="action_reorder">Transférer vers la liste des clients actuels</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Grace Hoper</td>
                                            <td>11/12/2012</td>
                                            <td className="action_reorder">Transférer vers la liste des clients actuels</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Margaret Hamilton</td>
                                            <td>12/12/2012</td>
                                            <td className="action_reorder">Transférer vers la liste des clients actuels</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Joan Clarke</td>
                                            <td>13/12/2012</td>
                                            <td className="action_reorder">Transférer vers la liste des clients actuels</td>
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

export default ArchivedClients
