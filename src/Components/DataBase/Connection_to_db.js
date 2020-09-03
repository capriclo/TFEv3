import React, { Component } from 'react';
   import mysql from 'mysql';
   class DB extends Component {
       constructor(props){
           super(props);
           const connection = mysql.createConnection({
           host: '127.0.0.1',
           user: 'root',
           password: 'Root123*',
           port: '3306',
           database: 'tfe'
        });
       connection.connect();
       console.log(connection);
    }
    

render() { 
    return (  
        <div>
            DB
        </div>
    );
   }
 }

 export default DB;