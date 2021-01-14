import React, { useEffect, useState } from 'react';
import ChatWindow from './Chatwindow';
import SocketClient from 'socket.io-client';



function SocketIo() {

    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState();
    const [newMessage, setNewMessage] = useState([]);

    function addMessage(messageToAdd) {
        setNewMessage((oldState) => {
            let newState = [...oldState, messageToAdd];
            return newState;
        });
    }

    useEffect(() => {
        let newSocket = SocketClient('http://localhost:8080');
        newSocket.on('connect', function () {
            newSocket.on('post-message', addMessage);
            setSocket(newSocket);
        });
        return () => newSocket.off();
    }, []);

    //send the message to the backend
    const sendMessage = () => {
        if (socket) {
            console.log('Send Message');
            socket.emit('new-message', { message });
            setMessage('');
        }

    };

    return (
        <div>
            <div style={{ width: '350px', border: 'solid', height: '500px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                {newMessage.map((data, i) => <p key={i}>{data}</p>)}
            </div>
            <ChatWindow setMessage={setMessage} sendMessage={sendMessage} message={message} />
        </div >
    );
}

export default SocketIo;