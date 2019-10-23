import React from 'react';
import Logo from '../../../../src/image/Logo.jpg';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import './NavBar.scss';

class NavBar extends React.Component {

    state = {
        links: [
            { path: '/products', title: 'Home' },
            { path: '/FAQ', title: 'FAQ' },
            { path: '/statute', title: 'Statute' },
            { path: '/contact', title: 'Contact' },
            {path: '/cart', title: 'Cart'},
        ],
    };

    render() {
        const { links } = this.state;
        return (
            <nav className={'navbar'}>
                <img src={Logo} alt={'website logo'}/>
                <MainMenu links={links}/>
            </nav>
        );
    }
}

export default NavBar;