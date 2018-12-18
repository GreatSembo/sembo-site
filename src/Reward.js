
import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

import strings from './Localization.js';
import './Reward.css';



const Reward = () => {
    //strings.setLanguage('en');
    return (
        <div className="container">
            <div className="jumbotron" style={{backgroundColor:'#B2FFFF'}}>
                <h1 class="display-4">Hai vinto un notte all'Hotel Plaza!</h1><span className="wordsmall">con la compangia di luca sembolini</span>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <h2>Non Prendere impegni il 19 ed il 20 Gennaio</h2><br/>
                    <h3>Avrai accesso alla stanza "Plaza" con le seguenti comoditá: </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-xl-6">
                <span className="testo">
                <b>Accesso giornaliero al Percorso SPA Cristalia: Hammam, Bagno Mediterraneo, Sauna finlandese, Cascata di
                ghiaccio, Pedana geyser, docce emozionali, area relax con parete di sale (90 min., su prenotazione)</b><br/>

                2 piscine con acqua termale a 33-35°, 1 interna e 1 esterna collegate fra loro
                Lettini idromassaggio, cascata cervicale, giochi d‘acqua, percorso Kneipp

                Una grande vasca idromassaggio con 6 postazioni nella zona coperta e un’altra vasca esterna per 4 persone
                la piscina panoramica: una bellissima piscina di acqua dolce fresca con parete di vetro a vista
                2500 m² di parco con prato all'inglese, palme esotiche e pini marittimi
                sauna esterna <br/>
                </span>
                <br/>
                </div>
                <div className="col-sm-6 col-md-6 col-xl-6">
                    <span className="testo">
                    <b>All'arrivo in camera:</b><br/>
                    SPA Kit: accappatoio, telo spugna per la piscina e ciabattine da camera, a vostra disposizione per tutto il
                    soggiorno<br/>
                    <b>Gourmet</b><br/>                
                    Ricco buffet della prima colazione con le specialità fresche fatte in casa<br/>
                    <b>Ed ancora..</b><br/>
                    Biciclette a disposizione gratuitamente
                    Parcheggio privato
                    Accesso Wi-Fi gratuito in tutto l‘Hotel
                    </span>
                </div>
                <div className="row">
                <div className="col-sm-12 col-md-12">
                    <p>
                    <a className= "testo" href="https://plaza.it/it/rooms/plaza-260.html"><h3>Link alle foto della camera</h3></a>
                    </p>
                    <p>
                    <a className= "testo" href="https://plaza.it/it/spa_wellness/piscine_termali-213.html"><h3>Link alle foto delle piscine</h3></a>
                    </p>
                    </div>
                    
                </div>

         
            </div>
        </div>
    )
};
 export default Reward;