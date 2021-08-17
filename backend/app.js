const dotenv = require('dotenv').config;
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const dbConfig = require('./server/db.config');

const connection = mysql.createConnection({
    host: dbConfig.HOST, 
    user: dbConfig.USER,
    password:dbConfig.PASSWORD,
    database: dbConfig.DB
})

connection.connect(err => {
    if(err) throw err;
    console.log('GG tu es co')
})
module.exports = app