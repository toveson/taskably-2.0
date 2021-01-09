import React, { useRef } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function ChatWindow({ onIdSubmit }) {
    const messageRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onIdSubmit(messageRef.current.value);

    }

    return (
        <Container className="align-items-center d-flex">
            <div></div>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" ref={messageRef} />
                </Form.Group>
                <Button type="submit" className="mr-2">Submit</Button>
            </Form>
        </Container>
    );
}


export default ChatWindow;