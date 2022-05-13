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
        <div className="firstMainContainer">
            <div className="containerToSignUp">
                <h1>Dev Social Network</h1>
                <div className="containerContent1">
                    <p>Já possui uma conta?</p>
                    <Link to="/">Faça login!</Link>
                </div>
            </div>

            <div className="containerToSignIn">

                <div className="login">
                    <h2 className="title-register">Faça seu cadastro</h2>

                    <form className="formSignIn1" onSubmit={handleSubmit}>

                        <FaUser className="icons" size={23} color="#000" />
                        <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
 
                        <MdEmail className="icons" size={23} color="#000" />
                        <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <FaLock className="icons" size={20} color="#000" />

                        <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />


                        <button type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
                    </form>
                </div>
            </div>



        </div>



    )
}

export default SignUp;