import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/sellings">Caisse <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Allclients">Clients</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/allBooks">
                                Articles
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/supplier">Fournisseurs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/types">Types</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sales_history">Historique des ventes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/waiting_for_reception">Colis en attente</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/out-of-stocks">Articles épuisés</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/order">Commande fournisseur</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/reception">Réceptions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/UpdateBooks">TestUpdateBooks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/help">?</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;
