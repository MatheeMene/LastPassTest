import React, { useState, useEffect } from 'react';

import Card from '../shared/Card/Card';

const List: React.FC = () => {
    const [cardTitle, setCardTitle] = useState<string>('');

    useEffect(() => {
        const getCardData = async () => {
            const getCardTitle = await fetch('http://localhost:5000/password-cards');
            const body = await getCardTitle.json();
            console.log(body);
        };
        getCardData();        
    }, [])

    return (
        <section>
            <Card title='aaaa' />
        </section>
    );
};

export default List;