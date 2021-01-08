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
// cors = require('cors');
// const authUser = require('./config/auth.config.js');
// const db =require('./config/connection');
const bcrypt = require('bcrypt');
// const saltRounds = 10;

let tempdb = [];

const routes = require('./routes/index.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', function (socket) {
    socket.emit('hello');
});

// login route
app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);
    res.json(tempdb);

    // search db for username
    if (username === null) {
        return res.status(400).send('Login failed');
    }
    // if username is there then compare
    try {
        // compare password (bcrypt)
        if (await bcrypt.compare(password, username.password)) {
            // if password is correct
            // sign jws token with (username, role) and send it back
            res.send('Success');
        } else {
            // if password is wrong return login failed
            res.send('Login failed');
        }
        // no user name return login failed
    } catch {
        res.status(500).send();
    }
});

app.use('/api/customers', routes.customers);
app.use('/api/stats', routes.stats);
app.use('/api/techs', routes.techs);
app.use('/api/inventory', routes.inventory);

//  setting up server
const PORT = process.env.PORT || 8081;

// Tells the server to begin listening
server.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));