import './style.css';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';

import firebase from '../../services/firebaseConnection';

import { FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth, user } = useContext(AuthContext);

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

                        <MdEmail className="icons" size={20} color="rgba(0,0,0,0.55)" />
                        <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <FaLock className="icons" size={18} color="rgba(0,0,0,0.55)" />
                        <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />


                        <button disabled={loadingAuth} type="submit">{loadingAuth ? <FaSpinner color="#FFF" size={16} /> : 'Acessar'}</button>
                    </form>
                    <Link to="/forgotpassword"className="linkForgotPassword">Recuperar senha</Link>
                </div>
            </div>
        </div>
    )
}
