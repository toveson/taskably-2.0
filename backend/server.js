// Dependencies
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});
require('dotenv').config();
// coclearnst cors = require('cors');
const authUser = require('./config/auth.config.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// let db = require('./config/connection.js');
const routes = require('./routes/index.js');
// console.log('routes:', routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());








io.on('connection', function (socket) {
    socket.emit('hello');
});
let tempdb = [];

// login route
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    // console.log(username, password);
    res.json(tempdb);

    // search db for username
    // if username is there then compare
    // no user name return login failed


    // compare password (bcrypt)
    // if password is correct sign jws token with (username, role) and send it back
    // if password is wrong return login failed
});



app.post('/newuser', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    // hashing password
    bcrypt.hash(password, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        let user = {
            username,
            password: hash
        };




        tempdb.push(user);
        console.log(username, password);

        console.log('hit new user');
        res.end();
    });
});







//testing sensitive info
app.get('/test', (req, res) => {
    let stuff = 'real password';

    res.send(stuff);
});





app.use('/api/customers', routes.customers);
app.use('/api/stats', routes.stats);
app.use('/api/techs', routes.techs);
app.use('/api/inventory', routes.inventory);

//  setting up server
const PORT = process.env.PORT || 8081;

// Tells the server to begin listening
server.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));