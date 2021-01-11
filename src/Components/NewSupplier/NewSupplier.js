import React, { Component } from 'react';
import './NewSupplier.css';
import axios from 'axios';
const instance = axios.create();


export class NewSupplier extends Component {

    render() {
        return (
            <div>
            <div  className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
               <div  className="wrapper wrapper--w680">
                   <div  className="card card-4">
                       <div  className="card-body">
                           <h2  className="title_new_article">Nouveau Fournisseur</h2>
                           <form>
                               <div  className="row row-space">
                                   <div  className='row3'>
                                       <div  className="input-group">
                                           <label  className="label">Nom</label>
                                           <input  className="input--style-4" type="text" name="name" onChange={this.onChange} required />
                                       </div>
                                   </div>
                                   <div  className="row-3">
                                       <div  className="input-group">
                                           <label  className="label">Prénom</label>
                                           <input  className="input--style-4" type="text" name="firstname" onChange={this.onChange} required/>
                                       </div>
                                   </div>
                               </div>
                               <div  className="row row-space">
                                   <div  className='row3'>
                                       <div  className="input-group">
                                           <label  className="label">Adresse</label>
                                           <input  className="input--style-4" type="text" name="address" onChange={this.onChange} required/>
                                       </div>
                                   </div>
                                   <div  className="row-3">
                                       <div  className="input-group">
                                           <label  className="label">Date de naissance</label>
                                           <input  className="input--style-4" type="date" name="birthdate" onChange={this.onChange} required/>
                                       </div>
                                   </div>
                               </div>
                               <div  className="row row-space">
                                   <div  className="row-3">
                                       <div  className="input-group">
                                           <label  className="label">Email</label>
                                           <input  className="input--style-4" type="email" name="email" onChange={this.onChange} required/>
                                       </div>
                                   </div>
                                   <div  className="row-3">
                                       <div  className="input-group">
                                           <label  className="label">Numéro de téléphone</label>
                                           <input  className="input--style-4" type="text" name="tel" onChange={this.onChange} required/>
                                       </div>
                                   </div>
                               </div>
                           </form>
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

export default NewSupplier