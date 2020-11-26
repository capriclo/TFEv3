import React, { Component } from 'react';
import './NewArticle.css';
//import axios from 'axios';
//const instance = axios.create();
var error; 

export  class NewArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            book_code:"",
            supplier:"",
            edition: "",
            VAT:"",
            barcode: "",
            author: "",
            quantity:"",
            price:"",
            loyalty_discount:"",
            error: null,
            isLoaded: false,
            check_book: "",
            check_book_code:1,
            check_barcode:1,
            book:[]
          };
        }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state);}

     submitHandler = e => {
        this.check_code();
        this.check_code();
        this.setState({[this.state.VAT] : document.getElementById('tva').value })
        var title_length = this.state.title.length;
            if(title_length > 1 && title_length < 255){
                var book_code_length = this.state.book_code.length;
                console.log("la longueur du code est :" +book_code_length)
                if(book_code_length > 1 && book_code_length < 255){
                    
                    if(this.state.check_book_code < 1){
                        var supplier_length = this.state.supplier.length;
                        if(supplier_length > 1){
                            error="supplier ok"
                            var edition_length = this.state.edition.length;

                            if(edition_length > 1){
                                console.log('taux tva ' +this.state.VAT)
                                var TVA = document.getElementById('tva').value;
                                console.log('TVA V2 = ' +TVA);

                                var barcode_length = this.state.barcode.length;
                                console.log("longueur barcode = " +barcode_length);

                                if(barcode_length > 1){
                                    error = "Ce code de livre +titre +fournisseur +edition +barcode fonctionnel";
                                    console.log("barecode = " +this.state.barcode);

                                   /* var ch = this.state.barcode;

                                    console.log('ch1 = ' +ch);

                                    ch = ch.replace(/\\/g,"\\\\")
                                    ch = ch.replace(/\'/g,"\\'")
                                    ch = ch.replace(/\"/g,"\\\"")

                                    console.log('ch2 = ' +ch);

                                    console.log("state barcode = ch = "  +this.state.barcode);*/

                                    this.check_barcode();
                                    this.check_barcode();

                                    console.log("état du check-barcode" +this.state.check_book_code);

                                    //FAIRE UN TABLEAU POUR DONNER LES VALEURS AU BACK_END !!!!

                                    //if(this.state.check_book.check_book < 1)
                                    //code fonctionnel pour l'ajout de livre dans la bdd
                                        /*   e.preventDefault()
                                            console.log(this.state)
                                            instance.post('http://localhost:3012/clients/books', this.state)
                                            .then(response => {
                                                console.log(response);
                                                window.location.href = "http://localhost:3000/allBooks";
                                            }).catch(error =>{
                                                console.log(error)
                                            })*/

                                }else{
                                    error = "Le code barre ne doit pas être vide !";
                                }

                            }else{
                                error = "L'édition ne doit pas être vide !";
                            }

                        }else{
                            error = "Le fournisseur ne doit pas être vide !";
                        }

                    }else{
                        error = "Ce code de livre existe déjà";
                   }

                }else{
                    error = "Le code du libre ne doit ni dépasser 255 caractères ni être vide !";
                }
                
            }else{
                error = "Le titre ne doit ni dépasser 255 caractères ni être vide !";
            }
                  
     }

     check_code = e =>{
        fetch("http://localhost:3012/check_book_code/" +this.state.book_code)
        .then(res => res.json())
        .then(
        (result) => {
            console.log(result);
            this.setState({
            isLoaded: true,
            check_book_code: result.check_book_code
            });
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        )
    }

    check_barcode = e =>{

        var barcode = this.state.barcode;

        console.log('ch1 = ' +barcode);

        barcode = barcode.replace(/\\/g,"\\\\")
        barcode = barcode.replace(/\'/g,"\\'")
        barcode = barcode.replace(/\"/g,"\\\"")

        console.log('ch2 = ' +barcode);

        fetch("http://localhost:3012/check_barcode/" +barcode)
        .then(res => res.json())
        .then(
        (result) => {
            console.log(result);
            this.setState({
            isLoaded: true,
            check_barcode: result.check_barcode
            });
        },
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
                 <div  className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div  className="wrapper wrapper--w680">
                        <div  className="card card-4">
                            <div  className="card-body">
                                <h2  className="title_new_article">Nouveau livre</h2>
                                <form>
                                    <div  className="row row-space">
                                        <div  className='row3'>
                                            <div  className="input-group">
                                                <label  className="label">Titre</label>
                                                <input  className="input--style-4" type="text" name="title" onChange={this.onChange} required />
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Code barre</label>
                                                <input  className="input--style-4" type="text" name="barcode" onChange={this.onChange} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className='row3'>
                                            <div  className="input-group">
                                                <label  className="label">Code du livre</label>
                                                <input  className="input--style-4" type="text" name="book_code" onChange={this.onChange} required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Auteur</label>
                                                <input  className="input--style-4" type="text" name="author" onChange={this.onChange} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Fournisseur</label>
                                                <input  className="input--style-4" type="text" name="supplier" onChange={this.onChange} required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Quantité en stok</label>
                                                <input  className="input--style-4" type="text" name="quantity" onChange={this.onChange} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Edition</label>
                                                <input  className="input--style-4" type="text" name="edition" onChange={this.onChange} required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Prix</label>
                                                <input  className="input--style-4" type="text" name="price" onChange={this.onChange} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Taux de TVA</label>
                                                <select id="tva" name="VAT" className="input--style-4 select" onChange={this.onChange}>
                                                    <option>6%</option>
                                                    <option>21%</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Remise fidélité</label>
                                                <input  className="input--style-4" type="text" name="loyalty_discount" onChange={this.onChange} required />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="error">{error}</p>
                                <br />
                                <div  className="p-t-15">
                                        <button  className="btn btn--radius-2 btn--blue" onClick={this.submitHandler} >Submit</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default NewArticle
