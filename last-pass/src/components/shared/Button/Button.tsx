import React from 'react';

import './Button.scss';

interface ButtonProps {
    title?: string;
    icon?: string;
    iconDescription?: string;
};

const Button: React.FC<ButtonProps> = ({ title, icon, iconDescription }) => {

    return (
        <div className='button-container'>
            <button className='button'>
                <h2>{title}</h2>
                {icon && <img src={icon} alt={iconDescription} className='icon' />}
            </button>
        </div>
    );
};

export default Button;