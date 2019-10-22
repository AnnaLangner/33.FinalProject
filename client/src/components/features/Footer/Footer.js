import React from 'react';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import './Footer.scss'

class Footer extends React.Component {

    state = {
        links: [
            { path: '/', title: 'Home' },
            { path: '/FAQ', title: 'FAQ' },
            { path: '/statute', title: 'Statute' },
            { path: '/contact', title: 'Contact' },
        ],
    };

    render() {
        const { links } = this.state;
        return (
            <nav className={'footer'}>
                <p>{'© 2019 All Rights Reserved'}</p>
                <MainMenu links={links}/>
            </nav>
        );
    }
}

export default Footer;