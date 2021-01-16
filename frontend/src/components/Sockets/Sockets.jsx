import React, { useEffect, useState } from 'react';
import ChatWindow from './Chatwindow';
import SocketClient from 'socket.io-client';
import API from '../../util/api';

function SocketIo() {

    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState();
    const [newMessage, setNewMessage] = useState([]);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

    //adds messages to the state so they can be posted
    function addMessage(messageToAdd) {
        setNewMessage((oldState) => {
            let newState = [...oldState, messageToAdd];
            return newState;
        });
    }

    useEffect(() => {
        //create a new socket for each individual
        let newSocket = SocketClient('/');
        newSocket.on('connect', function () {

            //grab messages from the backend
            newSocket.on('post-message', addMessage);
            setSocket(newSocket);

            //api call to grab the username and role to use for chat
            API.getUserJWT(localStorage.getItem('JWT')).then(response => {
                setUsername(response.data.username);
                setRole(response.data.role);
                console.log(username, role);

                //emit the username and the roll to the backend
                newSocket.emit('socket-role', response.data.role);
                newSocket.emit('socket-username', response.data.username);
            });
        });
        return () => newSocket.off();
    }, []);

    //send the message to the backend
    const sendMessage = () => {
        if (socket) {
            console.log('Send Message', { message });

            //send the message to the backend
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