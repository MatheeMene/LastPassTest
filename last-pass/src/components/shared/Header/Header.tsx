import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ReactModal from 'react-modal';

import './Header.scss';

import Logo from '../Logo/Logo';

const Header: React.FC = () => {
    const [url, setUrl] = useState<string>('');
    const [siteName, setSiteName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleChange = (setValue: Function, value: string) => setValue(value);

    const requestData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                url: url,
                siteName: siteName,
                userName: username,
                password: password,
            }),
        };

    // FAZER REQUEST FORA DO COMPONENT
    // DEVOLVER RESPONSTA POSITIVA PRO USER
    // LIMPAR CAMPOS E FECHAR MODAL
    // FAZER ERRO
    const handleSubmit = () => {
        fetch('http://localhost:5000/password-cards', requestData)
            .then(response => console.log('response', response));
    };

    return (
        <header className='header'>
            <Logo />
            <button onClick={() => setOpenModal(prevState => !prevState)}>Cadastrar senha</button>
            {/* FIX MODAL ERROR */}
            <ReactModal
                style={{ content: {
                    display: 'flex', flexDirection: 'column', width: '30%', height: '35%', top: '30%', left: '40%' } }}
                isOpen={openModal}>
                    <button onClick={() => setOpenModal(prevState => !prevState)} className='close-button'>X</button>
                    <h1>Cadastre sua nova senha</h1>
                    <TextField margin='normal' placeholder='Insira a URL' variant='standard' label='URL' onChange={(event) => handleChange(setUrl, event?.target?.value)} />
                    <TextField margin='normal' placeholder='Insira o nome do site' variant='standard' label='Nome do site' onChange={(event) => handleChange(setSiteName, event?.target?.value)} />
                    <TextField margin='normal' placeholder='Insira seu username' variant='standard' label='Username' onChange={(event) => handleChange(setUsername, event?.target?.value)} />
                    <TextField margin='normal' placeholder='Insira sua senha' variant='standard' label='Senha' onChange={(event) => handleChange(setPassword, event?.target?.value)} />
                    <input type='submit' onClick={handleSubmit} />
            </ReactModal>
        </header>
    );
};

export default Header;