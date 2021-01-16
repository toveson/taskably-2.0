import React, { useRef } from 'react';
import { Form, Container, Button } from 'react-bootstrap';


// eslint-disable-next-line react/prop-types
function SocketRole({ role, sendRole, setRole }) {

    const RoleRef = useRef();

    //function to handle the change in the input field
    function handleChange(e) {
        setRole(e.target.value);
    }

    //function to take the value of the form ro be used later
    function handleSubmit(e) {
        e.preventDefault();
        sendRole();
    }

    return (
        <Container className="align-items-center d-flex">
            <Form className="w-100">
                <Form.Group>
                    <Form.Control placeholder='Submit your role' type="text" ref={RoleRef} value={role} onChange={handleChange} style={{width: '300px'}} />
                    <Button type="submit" className="mr-2" onClick={handleSubmit} style={{width: '50px'}}>Role</Button>
                </Form.Group>
            </Form>
        </Container>
    );
}


export default SocketRole;