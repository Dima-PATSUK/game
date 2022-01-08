import React, {useState} from 'react';
import { Nav, Navbar, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';



import News from '../News'
import Articles from '../Articles'
import Help from '../Help'

export default function NaviBar(){

    const[show,setShow]=useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
 <>
 <div className="container">
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
       <Container>
       <Navbar.Brand style={{marginLeft :200}}>ИграНет</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
       <Navbar.Collapse id="responsive-navbar-nav">
       <Container>
           <Row>
               <Col>
           <Nav className="mr-auto">
               <Nav.Link style={{marginLeft :40}} href="/"> Articles  </Nav.Link>
               <Nav.Link style={{marginLeft :40}} href="/news"> News  </Nav.Link>
               <Nav.Link style={{marginLeft :40}} href="/help"> Help  </Nav.Link>
           </Nav>
           </Col>

           <Col me="auto">
           <Nav className="lime accent-1">
               <Button variant="success"  /*href="/log"*/ onClick={handleShow}> Log In</Button>
               <Button variant="warning" style={{marginLeft :9}}  /*href="/sing"*/  onClick={handleShow}> Sign Out</Button>
           </Nav>
           </Col>
           </Row>
           </Container>
       </Navbar.Collapse>
       </Container>
   </Navbar>
   <Modal show={show} onHide={handleClose}>
       <Modal.Hader closeButton>
           <Modal.Title>Log In</Modal.Title>
       </Modal.Hader>
       <Modal.Body>
           <Form>
               <Form.Group controlId="fromBasicEmail">
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email" placeholder="Enter email"/>
                   <Form.Text className="text-muted">Введите свой email</Form.Text>
               </Form.Group>

               <Form.Group controlId="fromBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="Password" placeholder="Enter Password"/>
               </Form.Group>

               <Form.Group controlId="fromBasicCheackbox">
                   <Form.Check type="checkbox" label="Remeber me"/>
               </Form.Group>
           </Form>
       </Modal.Body>
   </Modal>
   </div>
 </>
)}