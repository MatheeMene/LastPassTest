import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ReactModal from 'react-modal';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import useAddNewCard from '../../../hooks/useAddNewCard';

import './Header.scss';

const textFieldData = (
    setUrl: any,
    setSiteName: any,
    setUsername: any,
    setPassword: any,
) => {
    return [
        { placeholder: 'Insira a URL', label: 'URL', setter: setUrl },
        { placeholder: 'Insira o nome do site', label: 'Nome do Site', setter: setSiteName },
        { placeholder: 'Insira seu username', label: 'Username', setter: setUsername },
        { placeholder: 'Insira sua senha', label: 'Senha', setter: setPassword },
    ];
};

const Header: React.FC = () => {
    const [url, setUrl] = useState<string>('');
    const [siteName, setSiteName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);

    const { handleSubmit } = useAddNewCard();
    const handleChange = (setValue: Function, value: string) => setValue(value);

    const toogleModal = () => setOpenModal(prevState => !prevState);

    // DEVOLVER RESPONSTA POSITIVA PRO USER
    // LIMPAR CAMPOS E FECHAR MODAL
    // FAZER ERRO
    return (
        <header className='header'>
            <Logo />
            <Button title='Cadastrar Senha' onClick={toogleModal} styles='register-password-button' />
            {/* FIX MODAL ERROR */}
            <ReactModal style={{ content: {display: 'flex', flexDirection: 'column', width: '30%', height: '42%', top: '30%', left: '40%' } }}
                isOpen={openModal}>
                    <Button title='X' onClick={toogleModal} styles='close-button' />
                    <h1 className='add-password-title'>Cadastre sua nova senha</h1>
                    { textFieldData(setUrl, setSiteName, setUsername, setPassword).map((item, index) => (
                        <TextField
                            placeholder={item.placeholder}
                            label={item.label}
                            onChange={(event) => handleChange(item.setter, event?.target?.value)}
                            key={index}
                            margin='normal'
                            variant='standard'
                        />
                    )) }
                <Button title='Salvar' onClick={(event) => handleSubmit(event, url, siteName, username, password)} styles='add-password-submit' />
            </ReactModal>
        </header>
    );
};

export default Header;