import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import NewArticle from './Components/NewArticle/NewArticle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewClient from './Components/NewClient/NewClient';
import Basket from './Components/Basket/Basket';
import OutOfStock from './Components/OutOfStock/OutOfStock';
import Order from './Components/Order/Order';
import ArchivedSuppliers from './Components/ArchivedSuppliers/ArchivedSuppliers';
import Reception from './Components/Reception/Reception';
import ArchivedClients from './Components/ArchivedClients/ArchivedClients';
import "./Fichiers_JSON/clientdata.json"
import AllClients from './Components/AllClients/AllClients'
import Client from './Components/Client/Client'
import UpdateClient from './Components/UpdateClient/UpdateClient'
import AllBooks from './Components/AllBooks/AllBooks'
import Book from './Components/Book/Book'


function App() {
  return (
      <BrowserRouter> 
        <Navbar />
        <Switch>
          <Route exact path="/backet" component={Basket} />
          <Route exact path="/new_article" component={NewArticle} />
          <Route exact path="/Allclients" component={AllClients} />
          <Route path="/Client" component={Client} />
          <Route exact path="/new_client" component={NewClient} />
          <Route exact path="/out-of-stocks" component={OutOfStock} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/supplier" component={ArchivedSuppliers} />
          <Route exact path="/reception" component={Reception} />
          <Route exact path="/archived_clients" component={ArchivedClients} />
          <Route path="/UpdateClient" component={UpdateClient} />
          <Route exact path="/allBooks" component={AllBooks} />
          <Route path="/Book" component={Book} />





          
        </Switch>
       
      </BrowserRouter>
      
  );
}

export default App;

