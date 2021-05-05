import { getByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';
import './AllBooks.css';
import {useState } from "react";
//import axios from 'axios';




export class AllBooks extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          books: []
        };
      }
      

      Search = e => {

          e.preventDefault();
          
        
        console.log(e.target.value);
        
        //console.log("Coucou +" +this.state.books);


      }


      //code xaml en commentaire
      /*<input type="submit" className="search-btn aqua-gradient" onClick={this.Search} name="btnAddMore" value="Search"/> */
      


      componentDidMount() {
        fetch("http://localhost:3014/books")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({
                isLoaded: true,
                books: result.books
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

      onChange = e =>{}


    render() {
     if(this.state.books) {
       console.log(this.state +"test1")
       console.log(this.state.books)
        return (
            <div>
                <div className="container emp-profile">
                    <div>
                        <form className="form-inline md-form mr-auto mb-4">
                          <a href="/new_article"><input className="archive-client-btn btn_all_clients aqua-gradient" name="btnAddMore" onChange={this.onChange} value="Nouvel article"/></a>
                          <input className="form-control mr-sm-2 input-search" onChange= {this.Search} id="searchBar" type="text" placeholder="Search" aria-label="Search" />
                          <button className="SearchButtonV2" id="searchBarV2" >Rechercher</button>
                        </form>
                    </div> 
                    
                      <div className="tab-content table_previous_purchase">
                        <div className="tab-pane active" id="home">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                          <th>Titre</th>
                                          <th>Code du livre</th>
                                          <th>Fournisseur</th>
                                          <th>Edition</th>
                                          <th>TVA</th>
                                          <th>Code-barres</th>
                                          <th>Autheur</th>
                                          <th>Quantité</th>
                                          <th>Prix</th>
                                          <th>Réduction fidélité</th>
                                          <th>Accéder au livre</th>
                                        </tr>
                                    </thead>
                                    { 
                                        this.state.books.map(book => 
                                        <tbody id="items" key={book.Title}>
                                            <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                <td>{book.Title}</td>
                                                <td>{book.Book_code}</td>
                                                <td>{book.Supplier}</td>
                                                <td>{book.Edition}</td>
                                                <td>{book.VAT}</td>
                                                <td>{book.Barcode}</td>
                                                <td>{book.Author}</td>
                                                <td>{book.Quantity}</td>
                                                <td>{book.Price}</td>
                                                <td>{book.Loyalty_discount}</td>
                                                <td><a href={"http://localhost:3000/Book/" +book.idbooks}>Accéder à l'article</a></td>
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
      }else{
        return(
          <div>

          </div>
        )
      }
    }
}


export default AllBooks
