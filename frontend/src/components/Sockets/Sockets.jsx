import React from 'react';

import SocketClient from 'socket.io-client';

function SocketIo () {
    let socket = SocketClient('http://localhost:8080');

    socket.on('hello', function() {
        console.log('hello from the socket');
    });

    return(
        <p>Hello</p>
    );
}

export default SocketIo;