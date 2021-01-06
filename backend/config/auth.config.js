// check JWT
// if the token is good you use the role to authorize a page

function userGood(req, res, next) {
    // checking JWT
    next();
    // user not auth send if token checked is wrong
    res.send(401);
}

module.exports = { userGood };