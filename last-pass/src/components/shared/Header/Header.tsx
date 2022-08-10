import React from 'react';

import './Header.scss';

import Logo from '../Logo/Logo';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <Logo />
            <button>Cadastrar senha</button>
        </header>
    );
};

export default Header;