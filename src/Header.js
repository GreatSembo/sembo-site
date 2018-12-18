import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import './Header.css';
import strings from './Localization.js';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    //strings.setLanguage('en');
    return (
        <div  >
        
        <link href="Header.css" rel="stylesheet"></link>
            <Navbar  inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#brand">{strings.how}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
        <NavItem eventKey={1} href="#">
            Link
        </NavItem>
        <NavItem eventKey={2} href="#">
            Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
        </Nav>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">
            Link Right
        </NavItem>
        <NavItem eventKey={2} href="#">
            Link Right
        </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
    );
};
export default Header;
