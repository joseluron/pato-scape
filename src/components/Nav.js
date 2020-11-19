import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Nav.scss';
import PatoAlRescate from '../assets/img/patoAlRescate.png';
import Atras from '../assets/img/atras.png';

const Nav = props => {
    return (
        <div className="nav-wrapper">
            {props.location && props.location.pathname !== '/' && 
                <div className="back-wrapper">
                    <Link to="/">
                        <img src={Atras} alt="Atras" />
                    </Link>
                </div>
            }
            {/* <span>¡Pato al rescate!</span> */}
            <img src={PatoAlRescate} alt="Pato al Rescate" />
        </div>
    );
}

export default withRouter(Nav);
