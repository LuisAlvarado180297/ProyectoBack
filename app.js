const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const urlConexion  = 'mongodb://localhost:27017/dbPruebas';
const mongoose = require('mongoose');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Conexion a base de datos
mongoose.connect(urlConexion);
mongoose.connection.on('open' , res=>{
    console.log("La conexion fue existosa")
});

app.use('/api', require('./routes/logs.routes'));





module.exports = app;
