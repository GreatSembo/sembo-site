import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import './Valentina.css';
import strings from './Localization.js';
import Reward from './Reward';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Valentina = () => {
    //strings.setLanguage('en');
    return (
      
        <div className="container-fluid">
        <div className="row words-header text-center">
            <div className="col-xs-12 col-md-12 header-footer blinking-topbar ">
                <span className="words">You Are the 1000000 VISITOR!!!! </span>
            </div>    
        </div>
        <div className="row  header-footer text-center words-body vertical-align" >
            <div className="col-xs-1 col-md-1 vertical-write blinking-sidebar">
                <span className="">YOU HAVE WON!</span>
            </div>
            <div className="col-xs-10 col-md-10 vertical-align">
                <div>
                <span className="">WHAT A LUCKY GIRL!!!!!</span><br/>
                <span className="">CLICK THE BUTTON!!!!</span><br/>
                <button className="blinking"><Link to='/reward/'> CLICK HERE TO GET YOUR REWARDS!!!!</Link> </button>
               
                </div>
            </div>
            <div className="col-xs-1 col-md-1 vertical-write blinking-sidebar">
                <span className="">YOU HAVE WON!</span>
            </div>
        </div>
       <div className="row words-header text-center">
            <div className="col-xs-12 col-md-12 header-footer blinking-topbar ">
                <span className="words">You Are the 1000000 VISITOR!!!! </span>
            </div>    
        </div>
     
    </div>

    
    )
};
export default Valentina;