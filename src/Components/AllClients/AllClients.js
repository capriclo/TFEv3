import React, { Component } from 'react';
import './AllClients.css';

export class AllClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          clients: []
        };
      }

      componentDidMount() {
        fetch("http://localhost:3014/clients")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                clients: result.clients
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
        return (
            <div>
                <div className="container emp-profile">
                    <div>
                        <form className="form-inline md-form mr-auto mb-4">
                            <a href="/new_client"><input className="archive-client-btn btn_all_clients aqua-gradient" name="btnAddMore" value="Nouveau client"/></a>
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
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Adresse</th>
                                        <th>Adresse email</th>
                                        <th>Téléphone</th>
                                        <th>Accéder au client</th>
                                        
                                        </tr>
                                    </thead>
                                    {
                                        this.state.clients.map(function (client) {
                                          return(
                                        <tbody id="items">
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td >{client.Name}</td>
                                                <td >{client.FirstName}</td>
                                                <td >{client.Address}</td>
                                                <td >{client.Email}</td>
                                                <td >{client.Phone}</td>
                                                <td><a href={"http://localhost:3000/Client/" +client.IDclients}>Accéder au client</a></td>
                                            </tr>
                                        </tbody>)
                                    })
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

export default AllClients
