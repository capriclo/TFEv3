import React, { Component } from 'react';
import './ArchivedClients.css';

export class ArchivedClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          archived_clients: []
        };
      }

    componentDidMount() {
        fetch("http://localhost:3012/archive_client")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                archived_clients: result.clients
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
        if(this.state.archived_clients) {
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
                                    {
                                        this.state.archived_clients.map(client => 
                                        <tbody id="items">
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td >{client.Name} {client.FirstName}</td>
                                                <td >{client.ArchivedDate}</td>
                                                <td className="action_reorder">Transférer vers la liste des clients actuels</td>
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

export default ArchivedClients
