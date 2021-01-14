const jwt = require('jsonwebtoken');
require('dotenv').config();

// // check JWT
// // if the token is good you use the role to authorize a page

function authenticateToken(req, res, next) {
    // checking JWT

    const token = req.headers.authorization || null;
    // const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userJWT) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = userJWT;
        return next();
    });
}

module.exports = { authenticateToken };