// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});
require('dotenv').config();

const routes = require('./routes/index.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', function (socket) {
    console.log('New User Connected');

    socket.on('new-message', function (data) {
        console.log(data);
        // socket.broadcast('post-message', data.message);
        io.emit('post-message', data.message);
    });
});

app.use('/api/customers', routes.customers);
app.use('/api/stats', routes.stats);
app.use('/api/techs', routes.techs);
app.use('/api/inventory', routes.inventory);
app.use('/api/workorders', routes.workorders);
app.use('/api/lookup', routes.lookup);
app.use('/api/newuser', routes.newUser);
app.use('/api/users', routes.users);
app.use('/api/login', routes.login);
app.use('/api/reviews', routes.reviews);

app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/build/index.html'));
});

//  setting up server
const PORT = process.env.PORT || 8081;

// Tells the server to begin listening
server.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));