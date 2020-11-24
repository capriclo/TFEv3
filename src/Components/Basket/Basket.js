import React, { Component } from 'react';
import './Basket.css';


export class Basket extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            first_name:"",
            address:"",
            email: "",
            phone:"",
            error: null,
            isLoaded: false,
            books: [], 
            i:0,
            items: []
          };

    }

    searchemail = item => {
        
        console.log("Coucou");
        var email = document.getElementById('email').value;
        console.log(email)
        fetch("http://localhost:3012/check_email/" +email)
                .then(res => res.json())
                .then(
                  (result) => {
                    console.log(result);
                    this.setState({
                      isLoaded: true,
                      check_email: result.check_mail
                    });
                    console.log(this.state.check_email);
                  },
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  })
                          
    }

    searchbarcode = item => {
        
        console.log("Coucou");
        var barcode = document.getElementById('barcode').value;
        console.log(barcode)
        fetch("http://localhost:3012/barcode/" +barcode)
                .then(res => res.json())
                .then(
                  (result) => {
                    console.log(result);
                    this.setState({
                      isLoaded: true,
                      books: result.book,
                      items: this.state.items + this.state.books[0]

                    });
                    console.log(this.state.books)
                    console.log("items" +this.state.items)
                  },
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  })
                          
    }


    render() {
        if(this.state.books){
        return (
            <div>
                <div className="container emp-profile block_blanc">
                    <div className="contenu_page_basket">
                        <div className="basket_block">
                            <div className="div_search_article">
                                    <input className="form-control mr-sm-2 input-search" id='barcode' type="text" placeholder="Search" aria-label="Search" />
                                    <button onClick={this.searchbarcode} className="btn_search_article search-btn aqua-gradient" name="btnAddMore" value="Rechercher un article">Rechercher un article</button>
                                <div className="div_icons">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-printer print_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 2H5a1 1 0 0 0-1 1v2H3V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h-1V3a1 1 0 0 0-1-1zm3 4H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v1H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/>
                                        <path fillRule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM5 8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5z"/>
                                        <path d="M3 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                    </svg>
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-gift-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                <th>Qté</th>
                                                <th>Code barres</th>
                                                <th>Total TTC</th>
                                                </tr>
                                            </thead>
                                            {this.state.books.map(book =>
                                            <tbody id="items">
                                                <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle ">
                                                    <td>{book.Title}</td>
                                                    <td>{book.Price}</td>
                                                    <td>{book.VAT}</td>
                                                    <td>1</td>
                                                    <td>{book.Barcode}
                                                    </td>
                                                    <td>{book.Price +book.Price*0.06}</td>
                                                </tr>
                                            </tbody>)}
                                        </table>   
                                    </div>
                                </div>
                            </div>
                            <div className="total_and_payement">
                            <button className="archive-Basket-btn aqua-gradient payement" name="btnAddMore" onClick={this.search} value="Procéder au payement">Procéder au payement</button>
                            </div>
                        </div>
                        <div className="client_block">
                            <div className="search_client">
                                    <input className="form-control mr-sm-2 input-search" id="email" type="text" placeholder="Search" aria-label="Search" />
                                    <input className="search-btn aqua-gradient"  onClick={this.search} name="btnAddMore" value="Rechercher un client" readOnly/>
                            </div>
                            <i className="fas fa-print"></i> 
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
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <div className="container emp-profile block_blanc">
                    <div className="contenu_page_basket">
                        <div className="basket_block">
                            <div className="div_search_article">
                                    <input className="form-control mr-sm-2 input-search" id='barcode' type="text" placeholder="Search" aria-label="Search" />
                                    <button onClick={this.searchbarcode} className="search-btn aqua-gradient btn_search_article" name="btnAddMore" value="Rechercher un article">Rechercher un article</button>
                                <div className="div_icons">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-printer print_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 2H5a1 1 0 0 0-1 1v2H3V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h-1V3a1 1 0 0 0-1-1zm3 4H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v1H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/>
                                        <path fillRule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM5 8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5z"/>
                                        <path d="M3 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                    </svg>
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-gift-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                                <th>Qté</th>
                                                <th>Code barres</th>
                                                <th>Total TTC</th>
                                                </tr>
                                            </thead>
                                            </table>   
                                    </div>
                                </div>
                            </div>
                            <div className="total_and_payement">
                            <p className="paragraph_total_and_payement"><b>Total:146.11 </b>
                            <button className="archive-Basket-btn aqua-gradient payement" name="btnAddMore" onClick={this.search} value="Procéder au payement">Procéder au payement</button>
                            </p>
                            </div>
                        </div>
                        <div className="client_block">
                            <div className="search_client">
                                    <input className="form-control mr-sm-2 input-search" id="email" type="text" placeholder="Search" aria-label="Search" />
                                    <input className="search-btn aqua-gradient"  onClick={this.search} name="btnAddMore" value="Rechercher un client" readOnly/>
                            </div>
                            <i className="fas fa-print"></i> 
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
                </div>
            </div>
        )
    }

}
}

export default Basket
