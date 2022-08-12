import React from 'react';

import Button from '../Button/Button';
import { BiEdit } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiCopy } from "react-icons/bi";

import './Card.scss';

interface CardProps {
    title: string;
};

const buttonsProperties = (edit: any, copy: any, remove: any) => {
    return [
        { icon: <BiEdit size='30px' color='white' />, function: edit, style: 'card-edit-button' },
        { icon: <BiCopy size='30px' color='white' />, function: copy, style: 'card-copy-button' },
        { icon: <BiTrash size='30px' color='white' />, function: remove, style: 'card-remove-button' },
    ];
} ;

const editPassword = () => {};
const copyPassword = () => {};
const removePassword = () => {};

const Card: React.FC<CardProps> = ({ title }) => {
    return (
        <div className='border-wrap'>
            <div className='card-container'>
                <h4 className='card-title'>{ title }</h4>
                <BiLock size='100px' color='black' />
                <div className='cards-wrapper'>
                    { buttonsProperties(editPassword, copyPassword, removePassword).map((item, index) => (
                        <Button icon={item.icon} onClick={item.function} key={index} styles={`card-buttons ${item.style}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;