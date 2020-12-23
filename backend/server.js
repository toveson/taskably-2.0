/* eslint-disable no-unused-vars */
// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();

// require('./config/connection.js');
const mysql = require('mysql');

let db;

// ***create mysql connection
if (process.env.JAWSDB_URL) {
    db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    db = mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });
}

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('db Taskably2.0 connected');
});

app.get('/getmanager', (req, res) => {
    let sql = 'SELECT * FROM v_manager';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send(results);
    });
});

app.get('/getcountWO', (req, res) => {
    let sql = 'SELECT * FROM v_countWO';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send(results);
    });
});

app.get('/getcountRsn', (req, res) => {
    let sql = 'SELECT * FROM v_countRsn';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send(results);
    });
});


//  setting up server
const PORT = process.env.PORT || 8080;

// Tells the server to begin listening
app.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));