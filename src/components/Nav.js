import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Nav.scss';

const Nav = props => {
    return (
        <div className="nav-wrapper">
            {props.location && props.location.pathname !== '/' && 
                <div className="back-wrapper">
                    <Link to="/"><span>Volver</span></Link>
                </div>
            }
            <span>¡Pato al rescate!</span>
        </div>
    );
}

export default withRouter(Nav);
