import './style.css';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';

import logo from '../../assets/logo-social.png';

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
        <div>
            <header>      
                    <img src={logo} />  
            </header>


            <div className="main-container">
                <div className="login">
                    <div>
                        <h1>Entrar</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input className="input-email" type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
                    </form>

                    <div className="functionalities">
                        <Link to="/register" className="create-account">Criar uma conta</Link>
                        <Link to="/forgotpassword" className="forgot-password">Esqueceu a senha?</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
