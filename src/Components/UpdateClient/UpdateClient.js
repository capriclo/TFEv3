import React, { Component } from 'react';
import './UpdateClient.css';
import axios from 'axios';
var error;
var emailok = "notok";
var phoneok = "notok";
var i= 0;

export class UpdateClient extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            first_name:"",
            address:"",
            email: "",
            phone:"",
            old_name: "",
            old_first_name: "",
            old_address: "",
            old_email: "",
            old_phone: "",
            error: null,
            isLoaded: false,
            isLoaded1: false,
            check_email: [],
            check_phone: "",
            client: [],
            new_name :"",
            new_first_name:"",
            new_address:"",
            new_email: "",
            new_phone: "",
            test2: ""
          };
          var url = document.URL;
          const quote = "\"";  
          var true_url = "" +quote +url +quote
          this.state.test2 =  url.substr(+35)
          console.log(this.state.test2)
          this.dbcall();

    }
      
      dbcall = e =>{
        console.log("http://localhost:3014/clients/" +this.state.test2)
        fetch("http://localhost:3014/clients/" +this.state.test2)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                client: result.client,
              });
              console.log(this.state.client);
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state);
    }

    submitHandler = e => {
        {this.state.client.map(clientA => 
            this.state.old_name = clientA.Name
        )}
        {this.state.client.map(clientB => 
            this.state.old_first_name = clientB.FirstName
        )}
        {this.state.client.map(clientC => 
            this.state.old_address = clientC.Address
        )}
        {this.state.client.map(clientD => 
            this.state.old_email = clientD.Email
        )}
        {this.state.client.map(clientE => 
            this.state.old_phone = clientE.Phone
        )}
        console.log(this.state.old_name);
        console.log(this.state.old_first_name);
        console.log(this.state.old_address);
        console.log(this.state.old_email);
        console.log(this.state.old_phone);
        this.state.new_name = document.getElementById("name").value;
        this.state.new_first_name = document.getElementById("first_name").value;
        this.state.new_address = document.getElementById("address").value;
        this.state.new_email = document.getElementById("email").value;
        this.state.new_phone = document.getElementById("phone").value;
        console.log(this.state.new_name);
        console.log(this.state.new_first_name);
        console.log( this.state.new_address);
        console.log(this.state.new_email);
        console.log(this.state.new_phone);

        var name_length = this.state.new_name.length;
        console.log(name_length);
        if(name_length > 1 &&  name_length < 55){
            var first_name_length = this.state.new_first_name.length;
            console.log(first_name_length);
            if(first_name_length > 1 && first_name_length<65){
                if(this.state.old_email === this.state.new_email){
                    emailok = "ok"
                    this.updateItem();
                }else{
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
                        emailok = "ok"
                    }else{
                        error = "email déjà utilisée"
                    }
                }
                if(this.state.old_phone === this.state.new_phone){
                   // error="les phones sont les mêmes"
                    phoneok = "ok"; 
                }
                else{
                    fetch("http://localhost:3014/check_phone/" +this.state.phone)
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                        isLoaded1: true,
                        check_phone: result.check_phone
                        });
                        console.log(result);
                        if(this.state.check_phone < 1){
                            phoneok = "ok"; 
                            } 
                            else{
                                error = "Ce numéro de téléphone existe déjà";
                        }
                    },
                    (error) => {
                        this.setState({
                        isLoaded1: true,
                        error
                        });
                    })
                }
            }else{
            
                error = "Votre prénom ne doit pas dépasser 65 caractères !";
            }
        }else{

            error = "Votre nom ne doit pas dépasser 55 caractères !";
       }
       console.log(emailok);
       console.log(error)
       if (i == 0){
            i = 1;
            this.submitHandler();
       }
       else{
            i = 0
       }
       if (phoneok === "ok" && emailok === "ok"  ) {
           this.updateItem();
       }

        return false;
    }


    updateItem = item => {
        var data = [this.state.new_name, this.state.new_first_name, this.state.new_address, this.state.new_email, this.state.new_phone]
        console.log("data = " +data);
        console.log(this.state);
        axios.patch('http://localhost:3014/clients/'+this.state.test2 ,this.state)
            .then(res => {
            /*this.setState({items: res.data});
            this.props.history.push('/items');*/
            console.log(res);
            })
            .catch(err => console.log(err));
    }


    render() {
        if(this.state.client) {
            return (
                <div>
                    {this.state.client.map(client => 
                    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                        <div className="wrapper wrapper--w780">
                            <div className="card card-3">
                                <div className="card-heading"></div>
                                <div className="card-body">
                                    <h2 className="title">Modifier le Client</h2>
                                    <form >
                                        <div className="input-group">
                                            <input id="name" className="input--style-3" type="text" placeholder={client.Name} name="name" defaultValue={client.Name} onChange={this.onChange} required/>
                                        </div>
                                        <div className="input-group">
                                            <input id="first_name" className="input--style-3" type="text" placeholder={client.FirstName} name="first_name" defaultValue={client.FirstName} onChange={this.onChange} required/>
                                        </div>
                                        <div className="input-group">
                                            <input id="address" className="input--style-3" type="text" placeholder={client.Address} name="address" defaultValue={client.Address} onChange={this.onChange} required/>
                                        </div>
                                        <div className="input-group">
                                            <input id="email" className="input--style-3" type="email" placeholder={client.Email} name="email" defaultValue={client.Email} onChange={this.onChange} required />
                                        </div>
                                        <div className="input-group">
                                            <input id="phone" className="input--style-3" type="text" placeholder={client.Phone} name="phone" defaultValue={client.Phone} onChange={this.onChange} required/>
                                        </div>
                                    </form>
                                    <div className="p-t-10">
                                            <button className="btn btn--pill btn--green" onClick={this.submitHandler}>Modifier le client</button>
                                        </div>
                                    <p className="error">{error}</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    ) }
                </div>
            )
        }else{
            return(
                <div>
                </div>
            )
        }
    }
}

export default UpdateClient