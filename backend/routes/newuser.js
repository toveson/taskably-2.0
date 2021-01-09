const db = require('./config/connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// make a new user
app.post('/newuser', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = 'some@email.com';
    let role = 'Manager';

    // hashing password
    bcrypt.hash(password, saltRounds, function (err, hash) {
        // Store hash in users table in database.
        let user = {
            username,
            email,
            password: hash,
            role
        };

        let sql = 'call newUser(?,?,?,?)';
        db.query(sql, [user.username, user.email, user.password, user.role]
            , (err, rows) => {
                if (err) {
                    console.error(err.message);
                    return res.status(500).send(err);
                }
                console.log(rows);
                res.send(rows);
            });
        console.log('hit new user');
        res.end();
    });
});