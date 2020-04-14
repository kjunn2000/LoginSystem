import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

export default function navComponent(){
    return(
        <Navbar expand="lg"> 
            <Navbar.Brand className="font-weight-bold">Moody Jun</Navbar.Brand>
            <Navbar.Toggle aria-controls="toggle-menu-bar"/>
            <Navbar.Collapse id="toggle-menu-bar">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">HOME</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">ABOUT</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="login">LOGIN</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}