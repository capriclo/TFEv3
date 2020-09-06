import React, { Component } from 'react';
import './NewArticle.css';
import axios from 'axios';
const instance = axios.create();

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
            check_email: []
          };
        }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state);}

     submitHandler = e => {
        this.state.VAT = document.getElementById('tva').value;

                e.preventDefault()
                            console.log(this.state)
                            instance.post('http://localhost:3012/clients/books', this.state)
                            .then(response => {
                                console.log(response);
                                window.location.href = "http://localhost:3000/allBooks";
                            }).catch(error =>{
                                console.log(error)
                            })
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
