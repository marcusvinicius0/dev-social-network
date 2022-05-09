import './style.css';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';


import { FaUser, FaLock } from 'react-icons/fa'

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
            <div className="main-container">
                <div className="pageLogin">
                    <div className="haveAccount">
                        <div className="haveAccountContent">
                            <h1>Dev Social Network</h1>
                            <p>Não tem uma conta ainda?</p>
                            <Link to="/register">Cadastre</Link>
                        </div>
                    </div>

                    <div className="registerInfos">
                        <div className="registerInfosContent">
                            <h1>Olá de novo!</h1>
                            <p>Bem vindo(a) de volta</p>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <FaUser />
                                    <input className="input-email" type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div>
                                    <FaLock />
                                    <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
                                <Link to="/forgotpassword" className="forgot-password">Esqueceu a senha?</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
