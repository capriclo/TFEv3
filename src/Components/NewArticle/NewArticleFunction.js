import './NewArticle.css';
import React from 'react';
import {useState, useEffect} from "react";
var error; 

function NewArticleFunction(){
    const [barcode, setBarcode] = useState([]);

   /* onChange = e =>{
        setBarcode()
        setCount(count + 1)
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state);}*/

        console.log("barcode = " +barcode)

    return(
        <>
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
                                                <input  className="input--style-4" type="text" name="title" required />
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Code barre</label>
                                                <input  className="input--style-4" type="text" name="barcode" onChange={e => setBarcode(e.target.value)} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className='row3'>
                                            <div  className="input-group">
                                                <label  className="label">Code du livre</label>
                                                <input  className="input--style-4" type="text" name="book_code" required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Auteur</label>
                                                <input  className="input--style-4" type="text" name="author" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Fournisseur</label>
                                                <input  className="input--style-4" type="text" name="supplier" required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Quantité en stok</label>
                                                <input  className="input--style-4" type="text" name="quantity" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Edition</label>
                                                <input  className="input--style-4" type="text" name="edition" required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Prix</label>
                                                <input  className="input--style-4" type="text" name="price" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Taux de TVA</label>
                                                <select id="tva" name="VAT" className="input--style-4 select" >
                                                    <option>6%</option>
                                                    <option>21%</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Remise fidélité</label>
                                                <input  className="input--style-4" type="text" name="loyalty_discount" required />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="error">{error}</p>
                                <br />
                                <div  className="p-t-15">
                                        <button  className="btn btn--radius-2 btn--blue" >Submit</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}export default NewArticleFunction
