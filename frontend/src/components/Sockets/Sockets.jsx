import React, { useEffect, useState } from 'react';
import ChatWindow from './Chatwindow';
import SocketClient from 'socket.io-client';
import SocketUsername from './SocketUsername';
import SocketRole from './SocketRole';
// import API from '../../util/api';

function SocketIo() {

    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState();
    const [newMessage, setNewMessage] = useState([]);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

    function addMessage(messageToAdd) {
        setNewMessage((oldState) => {
            let newState = [...oldState, messageToAdd];
            return newState;
        });
    }

    // useEffect(() => {

    //     API.getUserJWT(localStorage.getItem('JWT')).then(response => {
    //         console.log('response:', response.data.role);
    //         setRole(response.data.role);
    //         socket.emit('socket-role', response.data.role);
    //     });
    // }, []);

    // useEffect(() => {

    //     API.getUserJWT(localStorage.getItem('JWT')).then(response => {
    //         console.log('response:', response.data.username);
    //         setUsername(response.data.username);
    //         socket.emit('socket-role', response.data.username);
    //     });
    // }, []);

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
            console.log('Send Message', { message });
            socket.emit('new-message', { message });
            setMessage('');
        }

    };

    const sendUsername = () => {
        if (socket) {
            console.log('send username', { username });
            socket.emit('socket-username', { username });
            setUsername('');
        }
    };
    const sendRole = () => {
        if (socket) {
            console.log('send role', { role });
            socket.emit('socket-role', { role });
            setRole('');
        }
    };

    return (
        <div>
            <SocketUsername setUsername={setUsername} sendUsername={sendUsername} username={username}></SocketUsername>
            <SocketRole setRole={setRole} sendRole={sendRole} role={role}></SocketRole>
            <div style={{ width: '350px', border: 'solid', height: '500px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                {newMessage.map((data, i) => <p key={i}>{data}</p>)}
            </div>
            <ChatWindow setMessage={setMessage} sendMessage={sendMessage} message={message} />
        </div >
    );
}

export default SocketIo;