import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import NewArticle from './Components/NewArticle/NewArticle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewClient from './Components/NewClient/NewClient';
import OutOfStock from './Components/OutOfStock/OutOfStock';
import Order from './Components/Order/Order';
import SalesHistory from './Components/SalesHistory/SalesHistory';
import Reception from './Components/Reception/Reception';
import ArchivedClients from './Components/ArchivedClients/ArchivedClients';
import "./Fichiers_JSON/clientdata.json"
import AllClients from './Components/AllClients/AllClients'
import Client from './Components/Client/Client'
import UpdateClient from './Components/UpdateClient/UpdateClient'
import AllBooks from './Components/AllBooks/AllBooks'
import Book from './Components/Book/Book'
import Sellings from './Components/Sellings/Sellings'
import Supplier from './Components/NewSupplier/NewSupplier'
import AllBooksFunction from './Components/AllBooks/AllBooksFunction'


function App() {
  return (
      <BrowserRouter> 
        <Navbar />
        <Switch>
          <Route exact path="/sellings" component={Sellings} />
          <Route exact path="/new_article" component={NewArticle} />
          <Route exact path="/Allclients" component={AllClients} />
          <Route path="/Client" component={Client} />
          <Route exact path="/new_client" component={NewClient} />
          <Route exact path="/out-of-stocks" component={OutOfStock} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/sales_history" component={SalesHistory} />
          <Route exact path="/reception" component={Reception} />
          <Route exact path="/archived_clients" component={ArchivedClients} />
          <Route path="/UpdateClient" component={UpdateClient} />
          <Route exact path="/allBooks" component={AllBooks} />
          <Route path="/Book" component={Book} />
          <Route path="/supplier" component={Supplier} />
          <Route path="/all_books_function" component={AllBooksFunction} />
        </Switch>
       
      </BrowserRouter>
      
  );
}

export default App;

