import React, { useRef } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import '../../components/App.css';

//set props to send over to sockets component
// eslint-disable-next-line react/prop-types
function ChatWindow({ message, sendMessage, setMessage }) {
    const messageRef = useRef();

    //function to handle the change in the input field
    function handleChange(e) {
        setMessage(e.target.value);
    }

    //function to take the value of the form ro be used later
    function handleSubmit(e) {
        e.preventDefault();
        sendMessage();
    }

    return (
        <Container className="align-items-center d-flex">
            <Form className="w-100">
                <Form.Group>

                    <Form.Control className='Chat-Input' placeholder=' Message ...' type="text" ref={messageRef} value={message} onChange={handleChange} style={{ width: '15em' }} />
                    <Button type="submit" className="mr-2 Chat-Input-Button" onClick={handleSubmit} style={{width: '50px'}}>Chat</Button>

                </Form.Group>
            </Form>
        </Container>
    );
}


export default ChatWindow;