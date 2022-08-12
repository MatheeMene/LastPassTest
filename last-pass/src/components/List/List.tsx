import React, { useState, useEffect } from 'react';

import Card from '../shared/Card/Card';

import './List.scss';

const List: React.FC = () => {
    const [cardTitle, setCardTitle] = useState<any[]>([]);

    const getCardData = async () => {
        const getCardTitle = await fetch('http://localhost:5000/password-cards');
        const body = await getCardTitle.json();
        setCardTitle(Object.values(body));
    };

    useEffect(() => {
        getCardData();        
    }, []);

    return (
        <section className='cards-wrapper'>
            { cardTitle.map((item) => {
                return (
                    <Card title={item.siteName} />
                )
            })}
        </section>
    );
};

export default List;