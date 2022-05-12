import './style.css';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';


import { FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();

        if (email !== '' && password !== '') {
            signIn(email, password)
        }
    }

    return (
        <div className='firstMainContainer'>
            <div className="containerToSignUp">
                <h1>Dev Social Network</h1>
                <div className="containerContent">
                    <p>Não tem uma conta ainda?</p>
                    <Link to="register">Cadastre-se agora!</Link>
                </div>
            </div>

            <div className="containerToSignIn">

                <div className="login">
                    <h2>Faça seu login</h2>

                    <form className="formSignIn" onSubmit={handleSubmit}>

                        <MdEmail className="icons" size={23} color="#000" />
                        <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <FaLock className="icons" size={20} color="#000" />

                        <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />


                        <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
                    </form>
                </div>

                <Link to="/forgotpassword" className="linkForgotPassword">Esqueceu a senha?</Link>
            </div>
        </div>
    )
}
