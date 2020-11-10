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
            console.log(name_length);
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
                    if(this.state.check_phone < 1){
                         //code fonctionnel
                         e.preventDefault()
                            console.log(this.state)
                            instance.post('http://localhost:3012/clients', this.state)
                            .then(response => {
                                console.log(response);
                                //window.location.href = "http://localhost:3000/Allclients";
                            }).catch(error =>{
                                console.log(error)
                            })

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
                <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w780">
                        <div className="card card-3">
                            <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Nouveau Client</h2>
                                <form >
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Nom" name="name" value={name} onChange={this.onChange} required/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Prénom" name="first_name"  value={first_name} onChange={this.onChange} required/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Adresse" name="address"  value={address} onChange={this.onChange} required/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="date" placeholder="BirthDate" name="birthdate" value={birthdate} onChange={this.onChange} required/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" value={email} onChange={this.onChange} required />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phone" value={phone} onChange={this.onChange} required/>
                                    </div>
                                </form>
                                <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" onClick={this.submitHandler}>Créer le client</button>
                                    </div>
                            <p className="error">{error}</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default NewClient