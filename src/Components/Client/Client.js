import React, { Component } from 'react';
import './Client.css';
import axios from 'axios';
const instance = axios.create();

export class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test2:'',
          error: null,
          isLoaded: false,
          client: []
        };
        var url = document.URL;
        const quote = "\"";  
        var true_url = "" +quote +url +quote
        console.log(true_url);
        this.state.test2 =  url.substr(+29)
      }

      componentDidMount() {
        this.dbcall();
        this.dbcall();
        
      }

      dbcall = e =>{
        console.log(this.state.test2)
        console.log("http://localhost:3014/clients/" +this.state.test2)
        fetch("http://localhost:3014/clients/" +this.state.test2)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                isLoaded: true,
                client: result.client
              });
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

      onChange = e =>{}
       
      archive_client = item => {
        
        console.log("Coucou");
        console.log(this.state.client);

        item.preventDefault()
        instance.post('http://localhost:3012/archive_client', this.state)
       /* .then(response => {
            console.log(response);
           // window.location.href = "http://localhost:3000/Allclients";
        }).catch(error =>{
            console.log(error)
        })*/
        
                }

    render() {
        if(this.state.client) {
            return (
                <div>
                    <div className="container emp-profile">
                    {this.state.client.map(client => 
                        <form key={client} method="post">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 client_id">
                                    <div className="profile-head">
                                        <h1>
                                            Client {client.IDclients}
                                        </h1>
                                        <h4>
                                            Points de fidélité : <span>175</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-md-2 client_button">
                                    <a href="/archived_clients"><input className="archive-client-btn aqua-gradient" name="btnAddMore" onChange={this.onChange} value="Archiver le client"/></a>
                                    <a href={"/UpdateClient/" +this.state.test2 }><input className="update-client aqua-gradient" name="btnAddMore" onChange={this.onChange} value="Mettre à jour le client"/></a>
                                    <input className="update-client aqua-gradient" name="btnAddMore" onChange={this.onChange} onClick={this.archive_client} value="Archiver le client"/>
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
                                                    <p>{client.Name}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>ID</label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <p>{client.IDclients}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <div className="caracteristics">
                                                    <label>Prénom</label>
                                                </div>
                                                <div className="caracteristics">
                                                    <p>{client.FirstName}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Email</label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <p>{client.Email}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <div className="caracteristics">
                                                    <label>Adresse</label>
                                                </div>
                                                <div className="caracteristics">
                                                    <p>{client.Address}</p>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <label>Téléphone</label>
                                                </div>
                                                <div className="caracteristicsv2">
                                                    <p>{client.Phone}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        )}
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
        }else{
            return(
                <div>
                </div>
            )
        }
    }

}

export default Client
