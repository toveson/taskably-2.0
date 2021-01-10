const db = require('../config/connection.js');
const router = require('express').Router();
const bcrypt = require('bcrypt');


// login route
router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const role = req.body.role;

    console.log(username, password, email, role);
    // res.json(tempdb);

    // search db for email
    if (username === null) {
        return res.status(400).send('Login failed');
    }
    // if email is there then compare
    try {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], async (err, rows) => {
            if (err) {
                throw err;
            }
            console.log(rows[0]);
            const user = rows[0];
            // res.send(rows);
            const bcomapare = await bcrypt.compare(password, user.password);
            if (bcomapare) {
                // compare password (bcrypt)
                // sign jws token with (username, role, email) and send it back
                res.send('Success');
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