import React, { Component } from 'react';
import './Client.css';

export class Client extends Component {
    render() {
        return (
            <div>
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 client_id">
                                <div className="profile-head">
                                            <h1>
                                                Client 12645
                                            </h1>
                                            <h4>
                                                Points de fidélité : <span>175</span>
                                            </h4>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <a href="/archived_clients"><input className="archive-client-btn aqua-gradient" name="btnAddMore" value="Archiver le client"/></a>
                                <a href="/new_client"><input className="archive-client-btn btn-new-client aqua-gradient" name="btnAddMore" value="Nouveau client"/></a>
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
                                                <p>Rédoméro</p>
                                            </div>
                                            <div className="caracteristicsv2">
                                                <label>ID</label>
                                            </div>
                                            <div className="caracteristicsv2">
                                                <p>12645</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="caracteristics">
                                                <label>Prénom</label>
                                            </div>
                                            <div className="caracteristics">
                                                <p>Victoria</p>
                                            </div>
                                            <div className="caracteristicsv2">
                                                <label>Email</label>
                                            </div>
                                            <div className="caracteristicsv2">
                                                <p>loris.hubin@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="caracteristics">
                                                <label>Adresse</label>
                                            </div>
                                            <div className="caracteristics">
                                                <p>Rue Jacque Prévert n°11 7000 Mons</p>
                                            </div>
                                            <div className="caracteristicsv2">
                                                <label>Téléphone</label>
                                            </div>
                                            <div className="caracteristicsv2">
                                                <p>+33654589124</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
                                        <th>Titre</th>
                                        <th>Prix</th>
                                        <th>Quantité</th>
                                        <th>Date de l'achat</th>
                                        </tr>
                                    </thead>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>HungerGames</td>
                                            <td>12.50€</td>
                                            <td>5</td>
                                            <td>07/08/2020</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Harry Potter</td>
                                            <td>16€</td>
                                            <td>2</td>
                                            <td>07/08/2020</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Nés à minuit</td>
                                            <td>20€</td>
                                            <td>1</td>
                                            <td>06/08/2020</td>
                                        </tr>
                                    </tbody>
                                    <tbody id="items">
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                            <td>Percy Jackson</td>
                                            <td>22€</td>
                                            <td>1</td>
                                            <td>06/08/2020</td>
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

export default Client
