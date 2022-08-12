import React from 'react';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    title?: string;
    icon?: React.ReactNode;
    styles?: string;
};

const Button: React.FC<ButtonProps> = (
    { title, icon, styles, onClick }) => (
        <button className={styles} onClick={onClick}>
            {title}
            {icon}
        </button>
);

export default Button;