/* eslint-disable no-unused-vars */
// Dependencies
const express = require('express');
const app = express();

let db = require('./config/connection.js');

app.get('/', (req, res) => {
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

app.get('/getinventory', (req, res) => {
    let sql = 'SELECT * FROM v_inventory';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send(results);
    });
});

app.get('/getusers', (req, res) => {
    let sql = 'SELECT * FROM v_users';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send(results);
    });
});

//  setting up server
const PORT = process.env.PORT || 8081;

// Tells the server to begin listening
app.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));