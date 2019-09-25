import React from 'react';
import {Link} from "react-router-dom";

class Footer extends React.Component {

    render() {
        return (
            <div>
                <p>All rights reserved</p>
                <Link to={'/'}>Home</Link>
                <Link to={'/FAQ'}>FAQ</Link>
                <Link to={'/statute'}>Statute</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        );
    }
}

export default Footer;