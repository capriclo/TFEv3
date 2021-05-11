import React from 'react';
import {useState, useEffect} from "react";
import './AllClients.css';


function AllClientsV2(){
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3014/clients")
          .then(res => res.json())
          .then(
            (result) => setClients(result.clients)
          )
    }, [] )

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    };


    console.log("searchTerm = " +searchTerm);




    return(
        <>
            <div className="container emp-profile">
                <div>
                    <form className="form-inline md-form mr-auto mb-4">
                        <a href="/new_client"><input className="archive-client-btn btn_all_clients aqua-gradient" name="btnAddMore" value="Nouveau client" readOnly/></a>
                        <a href="/archived_clients"><input className="archive-client-btn btn_all_clients aqua-gradient" name="btnAddMore" value="Voir les clients archivés" readOnly/></a>
                        <input className="form-control mr-sm-2 input-search" id="searchBar" type="text" placeholder="Search" onChange={handleSearchTerm} aria-label="Search" />
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
                                    {clients.filter((val) => {
                                        return val.Name.includes(searchTerm);
                                        }).map((val) =>{
                                    return   <tbody id="items"  key={val.Name}>
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td >{val.Name}</td>
                                                <td >{val.FirstName}</td>
                                                <td >{val.Address}</td>
                                                <td >{val.Email}</td>
                                                <td >{val.Phone}</td>
                                                <td><a href={"http://localhost:3000/Client/" +val.idclients }>Accéder au client</a></td>
                                            </tr>
                                        </tbody>})}
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
        </>
        )
    
}

export default AllClientsV2