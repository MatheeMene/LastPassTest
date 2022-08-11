import React from 'react';

import PasswordIcon from '../../../assets/password.png';
import EditIcon from '../../../assets/edit.png'

import Button from '../Button/Button';

import './Card.scss';

interface CardProps {
    title: string;
};

const Card: React.FC<CardProps> = ({ title }) => {
    return (
        <div className='container'>
            <h4 className='card-title'>{ title }</h4>
            <img alt='password-icon' src={PasswordIcon} className='password-icon' />
            <Button icon={EditIcon} iconDescription='edit-icon' />
        </div>
    );
};

export default Card;