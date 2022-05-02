import './styles.css';

import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';


function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault();
        if(name !== '' && email !== '' && password !== ''){
            signUp(email, password, name)
        }
    }

    return (
        <div className="main-container">
            <div className="login">
                <div className="bg-h1">
                    <h1>Cadastre sua conta</h1>
                </div>


                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="input-email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Cadastrar</button>
                </form>

                <div className="functionalities">
                    <Link to="/" className="access-account">Já possui uma conta? Entre aqui.</Link>
                </div>
            </div>
        </div>

    )
}

export default SignUp;