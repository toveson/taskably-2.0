import React, { useState } from 'react';
import ChatWindow from './Chatwindow';
import SocketClient from 'socket.io-client';

function SocketIo() {
    const [message, setMessage] = useState();
    let socket = SocketClient('http://localhost:8080');


    socket.emit('new-message', { message });

    socket.on('post-message', function (data) {
        console.log(data);
    });

    return (

        <ChatWindow onIdSubmit={setMessage} />
    );
}

export default SocketIo;