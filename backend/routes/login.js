const db = require('../config/connection.js');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../config/auth.config');
require('dotenv').config();

router.get('/', authenticateToken, (req, res) => {
    res.json(req.user);
});

// login route
router.post('/', (req, res) => {
    // const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    // const role = req.body.role;

    console.log(password, email);
    // res.json(tempdb);

    // search db for email
    if (email === null) {
        return res.status(400).send('Login failed');
    }
    // if email is there then compare
    try {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], async (err, rows) => {
            if (err) {
                throw err;
            }
            // if the rows are empty I need to handle it
            console.log(rows);
            const user = rows[0];
            console.log(user);
            // res.send(rows);
            const bcomapare = await bcrypt.compare(password, user.password);
            if (bcomapare) {
                const userJWT = { email, role: user.role, username: user.username, userID: user.user_id};
                // compare password (bcrypt)
                // sign jws token with (username, role, email) and send it back
                const accessToken = jwt.sign(userJWT, process.env.ACCESS_TOKEN_SECRET);
                res.json({accessToken: accessToken, role: user.role, username: user.username});
                // res.send('Success');
            } else {
                // if password is wrong return login failed
                res.send('Login failed');
            }
            // no user name return login failed
        });
    } catch {
        res.status(500).send();
    }
});

module.exports = router;