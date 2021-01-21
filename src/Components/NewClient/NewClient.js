import React, { Component } from 'react';
import './NewClient.css';
import axios from 'axios';
const instance = axios.create();
var error; 
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


export class NewClient extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            first_name:"",
            address:"",
            birthdate:"",
            email: "",
            phone:"",
            customer_card :"",
            customer_code :"",
            datecreationclient: date,
            error: null,
            isLoaded: false,
            check_email: []
          };

    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state);
    }

   /* setdate = newdate =>{
        this.setState({actualdate : date});
        console.log(this.state);
    }*/

    submitHandler = e => {
        var name_length = this.state.name.length;
       // console.log(this.state);
       // this.setState({actualdate: date});
       //this.setdate();
        console.log(date);
        console.log(this.state);
        if(name_length > 1 &&  name_length < 55){
            var first_name_length = this.state.first_name.length;
            if(first_name_length > 1 &&  first_name_length < 65){
                console.log(this.state.email)
                fetch("http://localhost:3012/check_email/" +this.state.email)
                .then(res => res.json())
                .then(
                  (result) => {
                    console.log(result);
                    this.setState({
                      isLoaded: true,
                      check_email: result.check_mail
                    });
                  },
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  }
                )
                if(this.state.check_email < 1)
                {
                    fetch("http://localhost:3014/check_phone/" +this.state.phone)
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                        isLoaded1: true,
                        check_phone: result.check_phone
                        });
        
                    },
                    (error) => {
                        this.setState({
                        isLoaded: true,
                        error
                        });
                    }
                    ) 
                    console.log("there");
                    if(this.state.check_phone < 1){
                        var customer_card_length = this.state.customer_card.length;
                        console.log(customer_card_length);
                        if(customer_card_length <255){
                            //code fonctionnel
                            e.preventDefault()
                            console.log(this.state)
                            instance.post('http://localhost:3012/clients', this.state)
                            .then(response => {
                                console.log(response);
                                window.location.href = "http://localhost:3000/Allclients";
                            }).catch(error =>{
                                console.log(error)
                            })

                        }else{
                            error = "Le code barre de la carte client ne doit pas dépasser 55 caractères !";
                        }
                    }else{
                        error = "Ce numéro de téléphone existe déjà";
                    }
                }else{
                     error = "Cet email existe déjà";
                }


            }else{
            
                 error = "Votre prénom ne doit pas dépasser 65 caractères !";
            }

        }else{

             error = "Votre nom ne doit pas dépasser 55 caractères !";
        }
        return false;
    }

    render() {
        const {name, first_name, address,birthdate, email, phone} = this.state
        return (
            <div>
            <div  className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
               <div  className="wrapper wrapper--w680">
                   <div  className="card card-4">
                       <div  className="card-body">
                           <h2  className="title_new_article">Nouveau Client</h2>
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
                               <div  className="row row-space">
                                   <div  className="row-3">
                                       <div  className="input-group">
                                           <label  className="label">Code barre de la carte client</label>
                                           <input  className="input--style-4" type="text" name="customer_card" onChange={this.onChange} required/>
                                       </div>
                                   </div>
                                   <div  className="row-3">
                                       <div  className="input-group">
                                           <label  className="label">Code client</label>
                                           <input  className="input--style-4" type="text" name="customer_code" onChange={this.onChange} required/>
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

export default NewClient