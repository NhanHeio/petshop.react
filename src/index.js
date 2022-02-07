import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './assets/fontawesome-free-5.15.1-web/css/all.css'
import App from './App';

// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.sendFile(__dirname + "/public/index.js")
// })

// app.listen(300, function(){
//   console.log('listening on http://localhost:3000')
// })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
