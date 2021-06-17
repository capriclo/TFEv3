import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import NewArticle from './Components/NewArticle/NewArticle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewClient from './Components/NewClient/NewClient';
import OutOfStock from './Components/OutOfStock/OutOfStock';
import Order from './Components/Order/Order';
import Reception from './Components/Reception/Reception';
import ArchivedClients from './Components/ArchivedClients/ArchivedClients';
import "./Fichiers_JSON/clientdata.json"
import Client from './Components/Client/Client'
import UpdateClient from './Components/UpdateClient/UpdateClient'
import Book from './Components/Book/Book'
import Sellings from './Components/Sellings/Sellings'
import Supplier from './Components/NewSupplier/NewSupplier'
import AllBooksFunction from './Components/AllBooks/AllBooksFunction'
import AllClientsV2 from './Components/AllClients/AllClientsV2'
import SalesHistoryV2 from './Components/SalesHistory/SaleHistoryV2'
import BookFunction from './Components/Book/BookFunction'
import NewArticleFunction from './Components/NewArticle/NewArticleFunction'

function App() {
  return (
      <BrowserRouter> 
        <Navbar />
        <Switch>
          <Route exact path="/sellings" component={Sellings} />
          <Route exact path="/new_article" component={NewArticle} />
          <Route exact path="/Allclients" component={AllClientsV2} />
          <Route path="/Client" component={Client} />
          <Route exact path="/new_client" component={NewClient} />
          <Route exact path="/out-of-stocks" component={OutOfStock} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/sales_history" component={SalesHistoryV2} />
          <Route exact path="/reception" component={Reception} />
          <Route exact path="/archived_clients" component={ArchivedClients} />
          <Route path="/UpdateClient" component={UpdateClient} />
          <Route exact path="/allBooks" component={AllBooksFunction} />
          <Route path="/Book" component={Book} />
          <Route path="/supplier" component={Supplier} />
          <Route path="/NewArticleFunction" component={NewArticleFunction} />
          
        </Switch>
       
      </BrowserRouter>
      
  );
}

export default App;

