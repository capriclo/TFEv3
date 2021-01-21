import React, { Component } from 'react';
import './Sellings.css';
import axios from 'axios';
const instance = axios.create();

var books_array = [];
var i = 3;
let book_exist = 0;
var b = 0;
var index_basket = 0;
var datav2 = [];
var quantity_available = false;
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var txt;
var result_oos;
var actual_client=0;




export class Sellings extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
            client: [],
            books_basket : [],
            total : 0, 
            oos: [],
            test_bw : 0
        }
    }

    searchclient = item2 => {
        var barcode_client = document.getElementById('search_client').value;
       console.log("search_client");
      //  console.log(document.getElementById('search_client').value);
        console.log(barcode_client);
        
        fetch("http://localhost:3012/barcode_client/" +barcode_client)
               .then(res => res.json())
                .then(
                  (result) => {
                      console.log("result_client " +JSON.stringify(result))
                      var Name = result.client[0].Name;
                      console.log("Name" +Name);
                        var data_client = {
                            idclients: result.client[0].idclients,
                            Name: String(Name),
                            FirstName: String(result.client[0].FirstName),
                            Address: String(result.client[0].Address),
                            BirthDate: Date(result.client[0].BirthDate),
                            Email: String(result.client[0].Email),
                            Phone: String(result.client[0].Phone),
                            Customer_card: String(result.client[0].Customer_card),
                            Fidelity_points : 176,
                            DateCreationClient: String(result.client[0].DateCreationClient)
                        }
                        console.log("data_client = " +JSON.stringify(data_client));
                        actual_client = result.client[0].idclients;
                        //console.log("books_array = " +JSON.stringify(books_array))

                       /* if (c % 2 === 1){
 
                            this.state.books.push(data);*/
                        
                            this.setState({
                                client : data_client,
                               // books_basket : Array.from(this.state.books),
                                //total : this.state.total + (data.total_int/data.quantity)
                            })
                            console.log("client after" +JSON.stringify(this.state.client));
                            //console.log("books basket" +JSON.stringify(this.state.books_basket));
                        //}
                       // b++;
                  },
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  })

        
        
    }

    searchbarcode = item => {
        var barcode = document.getElementById('barcode').value;
        console.log(barcode);
        this.state.books_basket.map(function(livre){
            if(livre.barcode === barcode){
                book_exist = 1
                

            }else{
                book_exist = 0
            }
        })
        if (book_exist === 1){
            this.state.books_basket.map(function(livrev2){
                if(livrev2.barcode === barcode){
                    if (livrev2.quantity < livrev2.quantity_max){
                        quantity_available = true;
                        var new_quantity = livrev2.quantity +1;
                        console.log("new_quantity" +new_quantity);
                        console.log("index_basket = " +index_basket);

                        datav2 = {
                            basket : livrev2.basket,
                            title : String(livrev2.title),
                            prix : Number(livrev2.prix),
                            tva : String(livrev2.tva),
                            quantity : Number(new_quantity),
                            quantity_max : Number(livrev2.quantity_max),
                            total_int : Number((livrev2.prix +livrev2.prix*0.06)*Number(new_quantity)),
                            barcode : String(livrev2.barcode)
                        }

                        console.log("datav2 = " +JSON.stringify(datav2));
                        

                    }else{
                        quantity_available = false;
                    }
                                
                }
                index_basket++;
            })

            if( quantity_available === true){
                console.log("quatity_available : " +quantity_available)
                this.state.books.splice(index_basket, 1, datav2);
                this.state.books.splice(index_basket-1,1);

                this.setState({
                    books : this.state.books,
                    books_basket : Array.from(this.state.books),
                    total : this.state.total + (Number(datav2.total_int)/ datav2.quantity)
                })

            }
            
            index_basket = 0;
                    

        }else{
            fetch("http://localhost:3012/barcode/" +barcode)
                .then(res => res.json())
                .then(
                  (result) => {
                      var title = result.book[0].Title;
                        var data = {
                            basket : i,
                            title : String(title),
                            prix : Number(result.book[0].Price),
                            tva : String(result.book[0].VAT),
                            quantity : 1,
                            quantity_max : Number(result.book[0].Quantity),
                            total_int :  Number(Number(result.book[0].Price) +Number(result.book[0].Price)*0.06),
                            barcode : String(result.book[0].Barcode)

                        }
                        i++;
                        console.log("data = " +JSON.stringify(data));
                        console.log("books_array = " +JSON.stringify(books_array))

                        if (b % 2 === 1){
 
                            this.state.books.push(data);
                        
                            this.setState({
                                books : this.state.books,
                                books_basket : Array.from(this.state.books),
                                total : this.state.total + (data.total_int/data.quantity)
                            })
                            console.log("books after" +JSON.stringify(this.state.books));
                            console.log("books basket" +JSON.stringify(this.state.books_basket));
                        }
                        b++;
                  },
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  })


        }

    }

    payement = e => {
        console.log("Vous avez cliqué sur Payement ! ");
        var confirm = window.confirm("Payement effectué ?");
        console.log("confirm = " +confirm);

        if(confirm){
            this.state.books_basket.map(function(livrev3){
                console.log("actual_client = " +actual_client)
                var datav4 = {
                     title : String(livrev3.title),
                     prix : Number(livrev3.prix),
                     tva : String(livrev3.tva),
                     quantity : Number(livrev3.quantity),
                     barcode : livrev3.barcode,
                     client_id : actual_client,
                     date_selling : date,
                     total_int : livrev3.total_int
                 }
                 console.log(datav4);
     
                  e.preventDefault()
                 instance.post('http://localhost:3012/sellings', datav4)
                 .then(response => {
                     console.log(response);
                 }).catch(error =>{
                     console.log(error)
                 })

                 console.log("livre3.quantity_max = " +Number(livrev3.quantity_max));
                var datav3 = [livrev3.barcode,livrev3.quantity_max, livrev3.quantity]
                console.log("data = " +JSON.stringify(datav3));
                axios.patch('http://localhost:3014/sellings/'+livrev3.barcode ,datav3)
                    .then(res => {
                        fetch("http://localhost:3012/sellings")
                        .then(res => res.json())
                        .then(
                            (result) => {
                                console.log("result " +JSON.stringify(result));
                            },
                            // Remarque : il est important de traiter les erreurs ici
                            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                            // des exceptions provenant de réels bugs du composant.
                            (error) => {
                            this.setState({
                                error
                            });
                            },
                            window.location.href = "http://localhost:3000/sellings"
                        ).then(
                            async () => {
                                const res = await fetch("http://localhost:3012/sellings");
                                const json = await res.json();
                                    console.log("result2 " +JSON.stringify(json.oos)); 
                                    result_oos = json.oos;
                                    console.log("result.oos " +JSON.stringify(result_oos));
                                console.log("Hello!")
                            }
                            ).then( 
                                e.preventDefault(),
                                console.log("rentrer2"),
                               // if(result_oos){
                                    result_oos.map(function(livre_epuise){
                                        console.log("rentrer")
                                         console.log('livre_epuise = ' +JSON.stringify(livre_epuise));
                                         e.preventDefault();
                                         instance.post('http://localhost:3012/out_of_stock', livre_epuise)
                                         .then(response => {
                                             console.log(response);
         
                                         })
                                         console.log("delete_idbooks" +livre_epuise.idbooks);
                                         instance.delete("http://localhost:3012/books/" +livre_epuise.idbooks)
                                        .then(
                                            (result) => {
                                            console.log(result);
                                            window.location.href = "http://localhost:3000/sellings";
                                            },
                                            (error) => {
                                            this.setState({
                                                isLoaded: true,
                                                error
                                            });
                                            }
                                        )
                                        })
                                       /*  do {
                                             fetch("http://localhost:3012/check_oos/" +livre_epuise.idbooks)
                                             //fetch("http://localhost:3012/oos2/")
                                             .then(res => res.json())
                                             .then(
                                             (result) => {
                                                 console.log(result);
                                              this.setState({
                                                 //isLoaded: true,
                                                 //check_email: result.check_mail
                                                 test_bw : this.state.test_bw +1
                                                 });
                                             },
                                             (error) => {
                                                 /*this.setState({
                                                 isLoaded: true,
                                                 error
                                                 });*/
                                         /*    }
                                             )
                                           } while (this.state.test_bw < 2)
                                           this.setState({
                                             //isLoaded: true,
                                             //check_email: result.check_mail
                                             test_bw : 0
                                             });*/

                                  //  }
                            )
                            
                     }).catch(err => console.log(err));}
          )

        }else{
            window.location.href = "http://localhost:3000/sellings";
        }
    }

    render() {
        if(this.state.books){
            return (
                <div className="container emp-profile block_blanc">
                    <div className="contenu_page_basket">
                        <div className="basket_block">
                            <div className="div_search_article">
                                    <input className="form-control mr-sm-2 input-search" id='barcode' type="text" placeholder="Search" aria-label="Search" />
                                    <button onClick={this.searchbarcode} className="btn_search_article search-btn aqua-gradient" value="Rechercher un article">Rechercher un article</button>
                                <div className="div_icons">
                                    <svg width="2e:m" height="2em" viewBox="0 0 16 16" className="bi bi-gift-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3z"/>
                                        <path d="M15 7v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="tab-content table_previous_purchase">
                                <div className="tab-pane active" id="home">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                <th>Titre</th>
                                                <th>P. U. HTVA</th>
                                                <th>TVA</th>
                                                <th>Quantité</th>
                                                <th>Code barres</th>
                                                <th>Total TTC</th>
                                                </tr>
                                            </thead>
                                            {
                                            this.state.books_basket.map((book,index) =>
                                                <tbody key={index} id="items">
                                                    <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                        <td>{book.title}</td>
                                                        <td>{book.prix}</td>
                                                        <td>{book.tva}</td>
                                                        <td>{book.quantity}</td>
                                                        <td>{book.barcode}
                                                        </td>
                                                        <td>{ Math.round(book.total_int * 100) / 100}</td>
                                                    </tr>
                                                </tbody>
                                            )}
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="total_and_payement">
                            Total = {Math.round(this.state.total * 100) / 100}

                            <button className="archive-Basket-btn aqua-gradient payement" name="btnAddMore" onClick={this.payement} value="Procéder au payement">Procéder au payement</button>
                            </div>
                        </div>
                        <div className="client_block">
                            <div className="div_search_article">
                                    <input className="form-control mr-sm-2 input-search" type="text" id="search_client" name="search_client" placeholder="Search" aria-label="Search" />
                                    <input className="btn_search_article search-btn aqua-gradient"  onClick={this.searchclient} name="btn_search_client" value="Rechercher un client" readOnly/>
                            </div>
                            <i className="fas fa-print"></i> 
                            <form method="post">
                                <div className="row">
                                    <div className="col-md-6 client_id">
                                        <div className="profile-head">
                                                    <h1>
                                                        Client {this.state.client.idclients}
                                                    </h1>
                                                    <h4>
                                                        Points de fidélité : <span>{this.state.client.Fidelity_points}</span>
                                                    </h4>
                                        </div>
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
                                                        <p>{this.state.client.Name}</p>
                                                    </div>
                                                    <div className="caracteristicsv2">
                                                        <label>ID</label>
                                                    </div>
                                                    <div className="caracteristicsv2">
                                                        <p>{this.state.client.idclients}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                <div className="caracteristics">
                                                        <label>Prénom</label>
                                                    </div>
                                                    <div className="caracteristics">
                                                        <p>{this.state.client.FirstName}</p>
                                                    </div>
                                                    <div className="caracteristicsv2">
                                                        <label>Email</label>
                                                    </div>
                                                    <div className="caracteristicsv2">
                                                        <p>{this.state.client.Email}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                <div className="caracteristics">
                                                        <label>Adresse</label>
                                                    </div>
                                                    <div className="caracteristics">
                                                        <p>{this.state.client.Address}</p>
                                                    </div>
                                                    <div className="caracteristicsv2">
                                                        <label>Téléphone</label>
                                                    </div>
                                                    <div className="caracteristicsv2">
                                                        <p>{this.state.client.Phone}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}export default Sellings