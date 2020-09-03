import React, { Component } from 'react';
import './ArchivedSuppliers.css';

export class ArchivedSuppliers extends Component {
    render() {
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
                                            <th>Nom</th>
                                            <th>Date d'archivage</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Maximilien Hendriqz</td>
                                            <td>10/12/2012</td>
                                            <td className="action_reorder">Transférer vers la liste des fournisseurs actuels</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Violette Deminne</td>
                                            <td>17/07/2014</td>
                                            <td className="action_reorder">Transférer vers la liste des fournisseurs actuels</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Daniel Hubin</td>
                                            <td>24/06/2012</td>
                                            <td className="action_reorder">Transférer vers la liste des fournisseurs actuels</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Guillaume Gagnaire</td>
                                            <td>09/09/2011</td>
                                            <td className="action_reorder">Transférer vers la liste des fournisseurs actuels</td>
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

export default ArchivedSuppliers
