import './style.css';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);


    function handleSubmit(e){
        e.preventDefault();
        
        if(email !== '' && password !== ''){
            signIn(email, password)
        }
    }

    return (
        <main>
            <div className="main-container">
                <div className="login">
                    <div>
                        <h1>Entrar</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input className="input-email" type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="*******" value={password} onChange={ (e) => setPassword(e.target.value)} />
                        <button type="submit">Acessar</button>
                    </form>

                    <div className="functionalities">
                        <Link to="/register" className="create-account">Criar uma conta</Link>
                        <p className="forgot-password">Esqueceu a senha?</p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default SignIn;