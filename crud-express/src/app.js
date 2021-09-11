const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); 

const app = express();


// Connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
	.then(db => console.log('Conexion exitosa con la BD')) 
	.catch(err => console.log(err))

// Importing routes
const indexRoutes = require('./routes/index');


// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev')); 
app.use(express.urlencoded({extended: false})); 


// routes
app.use('/', indexRoutes);


app.listen(app.get('port'), ()=> {
	console.log(`Servidor escuchando en puerto ${app.get('port')}`);
}); 