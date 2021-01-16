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

const technicians = {};
let technicianIndex = 0;

io.on('connection', function (socket) {
    console.log('New User Connected');

    //grab the username from the frondend
    socket.on('socket-username', function (username) {
        socket.username = username;
    });

    // grab the role from the front end
    socket.on('socket-role', function (role) {
        socket.role = role;
        console.log('Username: ', socket.username);
        console.log('Role: ', socket.role);
        //If user is a technician
        if (socket.role === 'Tech') {
            technicians[socket.id] = {
                name: socket.username,
                id: socket.id,
                room: socket.id,
                online: true
            };
            socket.room = socket.id;
            //If they are customer they join the technicians room
        } else if (socket.role === 'Customer') {
            let technicianId = Object.keys(technicians)[technicianIndex++ % Object.keys(technicians).length];
            socket.join(technicianId);
            socket.room = technicianId;
            //if none of those they stay in their own room
        } else {
            console.log('no one wants to chat');
        }
    });

    // takes the message from the frontend and posts it
    socket.on('new-message', function (data) {
        console.log(data);
        console.log(socket.room);
        console.log('supposed to be the username', socket.username);

        // post message to the room
        // eslint-disable-next-line
        io.to(socket.room).emit('post-message', socket.username + ":  " + data.message);
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