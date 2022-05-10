import './styles.css';

import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (name !== '' && email !== '' && password !== '') {
            signUp(email, password, name)
        }
    }

    return (
        <div>
            <div className="main-container">
                <div className="pageRegister">
                    <div className="dontHaveAccount">
                        <div className="dontHaveAccountContent">
                            <h1>Dev Social Network</h1>
                            <p>Já tem uma conta?</p>
                            <Link to="/">Login</Link>
                        </div>
                    </div>
                    <div className="registerInfos">
                        <div className="registerInfosContent">
                            <h1>Olá, seja bem vindo(a)!</h1>
                            <p>Se cadastre para começar</p>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <FaUser />
                                    <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div>
                                    <MdEmail />
                                    <input type="text" className="input-email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div>
                                    <FaLock />
                                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button type="submit"> {loadingAuth ? 'Cadastrando...' : 'Cadastrar'} </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp;