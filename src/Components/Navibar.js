import React from 'react';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from 'react-router-dom';
import News from '../News'
import Articles from '../Articles'
import Help from '../Help'

export default function NaviBar(){

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
               <Button variant="success" className="" href="/log"> Log In</Button>
               <Button variant="warning" style={{marginLeft :9}} href="/sing"> Sign Out</Button>
           </Nav>
           </Col>
           </Row>
           </Container>
       </Navbar.Collapse>
       </Container>
   </Navbar>
   </div>
 </>
)}