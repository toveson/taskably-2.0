import React, { useEffect, useState } from 'react';
import ChatWindow from './Chatwindow';
import SocketClient from 'socket.io-client';

function SocketIo() {
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState();


    useEffect(() => {
        let newSocket = SocketClient('http://localhost:8080');
        newSocket.on('connect', function () {
            setSocket(newSocket);

            newSocket.on('post-message', function (data) {
                console.log(data);
            });
        });
    }, []);

    const sendMessage = () => {
        if (socket) {
            console.log('Send Message');
            socket.emit('new-message', { message });
            setMessage('');
        }

    };

    return (
        <div>
            <div></div>
            <ChatWindow setMessage={setMessage} sendMessage={sendMessage} message={message} />
        </div>
    );
}

export default SocketIo;