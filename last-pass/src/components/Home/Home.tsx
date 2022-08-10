import React from 'react';

import Header from '../shared/Header/Header';
import List from '../List/List';

import './Home.scss';

const Home: React.FC = () => {

    return (
        <section className='home-container'>
            <Header />
            <List />
        </section>
    );
}

export default Home;