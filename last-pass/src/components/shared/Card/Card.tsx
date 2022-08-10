import React from 'react';

import Password from '../../../assets/password.png';
import Edit from '../../../assets/edit.png'

import Button from '../Button/Button';

import './Card.scss';

const Card: React.FC = () => {
    return (
        <div className='container'>
            <h4 className='card-title'>Title</h4>
            <img alt='password-icon' src={Password} className='password-icon' />
            <Button icon={Edit} iconDescription='edit-icon' />
        </div>
    );
};

export default Card;