const express = require('express');
const morgan = require('morgan');
const app = express();
const user = require('./api/user');

if(process.env.NODE_ENV !== 'test'){
	app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/users',user);

module.exports = app;