import './NewArticle.css';
import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
const instance = axios.create();


function NewArticleFunction(){
    
    const [form_filling_error, setFormFillingError] = useState([]);
    const [form_loading, setFormLoading] = useState([]);
    const [title, setTitle] = useState([]);
    const [book_code, setBook_code] = useState([]);
    const [barcode, setBarcode] = useState([]);
    const [supplier, setSupplier] = useState([]);
    const [edition, setEdition] = useState([]);
    const [author, setAuthor] = useState([]);
    const [price, setPrice] = useState([]);
    const [quantity, setQuantity] = useState([]);
    
    const [check_book_code, setCheckBookCode] = useState([]);
    const [check_book_load, setCheckBookLoad] = useState(false);
    const [check_book_error, setCheckBookError] = useState(false);
    const [check_bar_code, setCheckBarCode] = useState([]);
    const [check_barcode_load, setCheckBarcodeLoad] = useState(false);
    const [check_barcode_error, setCheckBarcodeError] = useState(false);
    
    const check_code = e =>{
        setCheckBookLoad(false);
        setCheckBookError(false);
        fetch("http://localhost:3012/check_book_code/" +book_code)
            .then(res => res.json())
            .then(
                (result) => {
                setCheckBookLoad(true);
                setCheckBookCode(result.check_book_code);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                setCheckBookLoad(true);
                setCheckBookError(error);
                }
            )
            if (check_book_error) {
                setFormFillingError(check_book_error);
                } else if (!check_book_load) {
                setFormLoading("Vérification de l'unicité du code du live");
                }
            console.log("loading = " +form_loading)
    }

    const check_barcode = e =>{
        setCheckBarcodeLoad(false);
        setCheckBarcodeError(false);
        fetch("http://localhost:3014/check_barcode/" +barcode)
            .then(res => res.json())
            .then(
                (result) => {
                setCheckBarcodeLoad(true);
                setCheckBarCode(result.check_barcode);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                setCheckBarcodeLoad(true);
                setCheckBarcodeError(error);
                }
            )
            if (check_barcode_error) {
                setFormFillingError(check_barcode_error);
                } else if (!check_barcode_load) {
                setFormLoading("Vérification de l'unicité du code-barres");
                }
            console.log("loading = " +form_loading)
            console.log("check_bar_code = " +check_bar_code);
    }
    

    const submitHandler = e => {
        var Tva = document.getElementById('tva').value;
        var title_length = title.length;
       setFormFillingError(false);
       setFormLoading(false);
        if(title_length > 1 && title_length < 255){
            var book_code_length =book_code.length;
            if(book_code_length > 1 && book_code_length < 255){
                if(check_book_code < 1){
                    var supplier_length = supplier.length;
                    if(supplier_length > 1 && supplier_length < 255){
                        var edition_length = edition.length;
                        if(edition_length > 1 && edition_length < 255){
                            var loyalty_discount = document.getElementById('loyalty_discount').value;
                                if(loyalty_discount != "zero"){
                                    var author_length = author.length;
                                    if(author_length > 1 && author_length < 255){
                                        var price_length = price.length;
                                        if(price_length > 1 && price_length < 255){
                                            let floatPrice = parseFloat(price);
                                            if(!isNaN(floatPrice)){
                                                var quantity_length = quantity.length;
                                                if(quantity_length > 1 && quantity_length < 255){
                                                    let intQuantity = parseInt(quantity);
                                                    if(!isNaN(intQuantity)){
                                                        console.log("barcode = " +barcode);
                                                        console.log("quantityparsed = " +intQuantity);
                                                        var barcode_length = barcode.length;
                                                        if(barcode_length > 1 && barcode_length < 255){
                                                            if(check_bar_code < 1){
                                                                var TVA = document.getElementById('tva').value;
                                                                if(TVA != "zero"){
                                                                     const book = [{ 
                                                                         title: title,
                                                                         book_code: book_code,
                                                                         supplier : supplier,
                                                                         edition : edition,
                                                                         VAT : TVA,
                                                                         barcode : barcode,
                                                                         author : author,
                                                                         quantity : intQuantity,
                                                                         price : floatPrice,
                                                                         loyalty_discount : loyalty_discount
                                                                         }];
                                                                         console.log("book : " +JSON.stringify(book));
                                                                    
                                                                   
                                                                    
                                                                      e.preventDefault()
                                                                    //console.log(this.state)
                                                                    instance.post('http://localhost:3012/clients/books', book)
                                                                    .then(response => {
                                                                        console.log(response);
                                                                        window.location.href = "http://localhost:3000/allBooks";
                                                                    }).catch(error =>{
                                                                        console.log(error)
                                                                    })
                                                                }else{
                                                                    setFormFillingError("Veillez sélectionner un taux de TVA");
                                                                }
                                                            }else{
                                                                setFormFillingError('Ce code-barres existe déjà !');
                                                            }
            
                                                        }else{
                                                            setFormFillingError("Le code-barres ne doit ni dépasser 255 caractères ni être vide !");
                                                        }
                                                    }else{
                                                        setFormFillingError("Veillez entrer une quantité correcte");
                                                    }
                                                   
                                                }else{
                                                    setFormFillingError("La quantité ne doit ni dépasser 255 caractères ni être vide !");
                                                }
                                                
                                            }else{
                                                setFormFillingError("Veillez entrer un prix correct");
                                            }
                                        }else{
                                            setFormFillingError("Le prix ne doit ni dépasser 255 caractères ni être vide !");
                                        }
                            
                                    }else{
                                        setFormFillingError("L'auteur ne doit ni dépasser 255 caractères ni être vide !");
                                    }
                                    
                                }else{
                                    setFormFillingError("Veillez sélectionner un taux de remise de fidélité");
                                }
                        }else{
                            setFormFillingError("L'édition' ne doit ni dépasser 255 caractères ni être vide !");
                        }
                    }else{
                        setFormFillingError('Le fournisseur ne doit ni dépasser 255 caractères ni être vide !');
                    }
                }else{
                    setFormFillingError('Ce code de livre existe déjà !');
                }  
            }else{
               setFormFillingError('Le code du libre ne doit ni dépasser 255 caractères ni être vide !');
            }
        }else{
            setFormFillingError('Le titre ne doit ni dépasser 255 caractères ni être vide !');
        }
    }


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
                                                <input  className="input--style-4" type="text" name="title" onChange={e => setTitle(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Auteur</label>
                                                <input  className="input--style-4" type="text" name="author" onChange={e => setAuthor(e.target.value)} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className='row3'>
                                            <div  className="input-group">
                                                <label  className="label">Code du livre</label>
                                                <input  className="input--style-4" type="text" name="book_code"  onChange={e => setBook_code(e.target.value)} onBlurCapture={check_code} required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Prix</label>
                                                <input  className="input--style-4" type="text" name="price" onChange={e => setPrice(e.target.value)} required/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Fournisseur</label>
                                                <input  className="input--style-4" type="text" name="supplier" onChange={e => setSupplier(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Quantité en stok</label>
                                                <input  className="input--style-4" type="text" name="quantity"  onChange={e => setQuantity(e.target.value)} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Edition</label>
                                                <input  className="input--style-4" type="text" name="edition" onChange={e => setEdition(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Code barre</label>
                                                <input  className="input--style-4" type="text" name="barcode" onChange={e => setBarcode(e.target.value)} onBlurCapture={check_barcode} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row row-space">
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Remise fidélité</label>
                                                <select id="loyalty_discount" name="loyalty_discount" defaultValue="zero" className="input--style-4 select" required >
                                                    <option value="zero"disabled>Choissez un taux remise</option>
                                                    <option>0%</option>
                                                    <option>5%</option>
                                                    <option>10%</option>
                                                    <option>15%</option>
                                                    <option>20%</option>
                                                    <option>25%</option>
                                                    <option>30%</option>
                                                    <option>35%</option>
                                                    <option>40%</option>
                                                    <option>45%</option>
                                                    <option>50%</option>
                                                    <option>55%</option>
                                                    <option>60%</option>
                                                    <option>65%</option>
                                                    <option>70%</option>
                                                    <option>75%</option>
                                                    <option>80%</option>
                                                    <option>85%</option>
                                                    <option>90%</option>
                                                    <option>95%</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div  className="row-3">
                                            <div  className="input-group">
                                                <label  className="label">Taux de TVA</label>
                                                <select id="tva" name="VAT" defaultValue="zero" className="input--style-4 select" required >
                                                    <option value="zero"disabled>Choissez un taux de TVA</option>
                                                    <option>6%</option>
                                                    <option>21%</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="error" id="error">{form_filling_error}</p>
                                <br />
                                <div  className="p-t-15">
                                        <button  className="btn btn--radius-2 btn--blue" onClick={submitHandler} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}export default NewArticleFunction

