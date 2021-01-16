const db = require('../config/connection.js');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

// make a new user
router.post('/newuser', (req, res) => {
    let p_username = req.body.username;
    let p_password = req.body.password;
    let p_email = req.body.email;
    let p_role = req.body.role;

    // hashing password
    bcrypt.hash(p_password, saltRounds, function (err, hash) {
        // Store hash in users table in database.
        let user = {
            p_username,
            p_email,
            p_password: hash,
            p_role
        };

        let sql = 'call newUser(@user_id,?,?,?,?); select concat(\'user \', @user_id,\' added successfuly\') as new_user';
        db.query(sql, [user.p_username, user.p_email, user.p_password, user.p_role],
            (err, rows) => {
                if (err) {
                    console.error(err.message);
                    return res.status(500).send(err);
                }
                console.log(rows);
            });
        console.log('hit new user');
        res.end();
    });
});

module.exports = router;