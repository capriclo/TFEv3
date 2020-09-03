import React, { Component } from 'react';
import './NewArticle.css';

export  class NewArticle extends Component {
    render() {
        return (
            <div>
                 <div  className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div  className="wrapper wrapper--w680">
                        <div  className="card card-4">
                            <div  className="card-body">
                                <h2  className="title_new_article">Nouveau livre</h2>
                                <form method="POST">
                                    <div  className="row row-space">
                                        <div  className='row3'>
                                            <div  className="input-group">
                                                <label  className="label">Titre</label>
                                                <input  className="input--style-4" type="text" name="title" />
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Code barre</label>
                                                <input  className="input--style-4" type="text" name="barcode"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className='row3'>
                                            <div  className="input-group">
                                                <label  className="label">Code du livre</label>
                                                <input  className="input--style-4" type="text" name="first_name" />
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Auteur</label>
                                                <input  className="input--style-4" type="text" name="last_name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Fournisseur</label>
                                                <select name="subject" className="input--style-4 select">
                                                    <option disabled="disabled" selected="selected">Choose option</option>
                                                    <option>Subject 1</option>
                                                    <option>Subject 2</option>
                                                    <option>Subject 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Quantité en stok</label>
                                                <input  className="input--style-4" type="text" name="phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Edition</label>
                                                <select name="subject" className="input--style-4 select">
                                                    <option disabled="disabled" selected="selected">Choose option</option>
                                                    <option>Subject 1</option>
                                                    <option>Subject 2</option>
                                                    <option>Subject 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Prix</label>
                                                <input  className="input--style-4" type="text" name="phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Taux de TVA</label>
                                                <select name="subject" className="input--style-4 select">
                                                    <option disabled="disabled" selected="selected">Choose option</option>
                                                    <option>Subject 1</option>
                                                    <option>Subject 2</option>
                                                    <option>Subject 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Remise fidélité</label>
                                                <input  className="input--style-4" type="text" name="phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="p-t-15">
                                        <button  className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default NewArticle
