import './styles.css';

import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import { FaUser, FaLock, FaSpinner } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (name !== '' && email !== '' && password !== '') {
            signUp(email, password, name, description, title)
        }
    }

    return (
        <div className="firstMainContainer">
            <div className="containerToSignUp">
                <h1>Dev Social Network</h1>
                <div className="containerContent">
                    <p>Já possui uma conta?</p>
                    <Link to="/">Faça login!</Link>
                </div>
            </div>

            <div className="containerToSignIn">

                <div className="login">
                    <h2 className="title-register">Faça seu cadastro</h2>

                    <form className="formSignUp" onSubmit={handleSubmit}>

                        <FaUser className="icons" size={20} color="rgba(0,0,0,0.55)" />
                        <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
 
                        <MdEmail className="icons" size={20} color="rgba(0,0,0,0.55)" />
                        <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <FaLock className="icons" size={18} color="rgba(0,0,0,0.55)" />
                        <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />


                        <button type="submit">{loadingAuth ?<FaSpinner color="#FFF" size={16} /> : 'Cadastrar'}</button>
                    </form>
                </div>
            </div>



        </div>



    )
}

export default SignUp;