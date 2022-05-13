import './style.css';

import { Link } from "react-router-dom"
import { AuthContext } from '../../contexts/auth';

import firebase from '../../services/firebaseConnection';

import { FaSpinner } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useContext, useState } from "react";
import { toast } from 'react-toastify';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const { loadingAuth } = useContext(AuthContext);

    function recoverPassword(e) {
        e.preventDefault();

        const auth = firebase.auth();

        auth.sendPasswordResetEmail(email)
            .then(() => {
                toast.success('Sucesso, verifique seu e-mail para redefinição da senha')
            })
            .catch(error => {
                toast.error('Opps, algo deu errado.')
            })
            setEmail('')
    }

    return (
        <div className='firstMainContainer'>
            <div className="containerToSignUp">
                <h1>Dev Social Network</h1>
                <div className="containerContent2">
                    <Link className="link-to-login" to="/">Faça login!</Link>
                </div>
            </div>

            <div className="containerToSignIn">

                <div className="login">
                    <h2>Mudar senha</h2>

                    <form className="formSignIn">


                        <MdEmail className="icons" size={23} color="#000" />
                        <input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />



                        <button onClick={recoverPassword} disabled={loadingAuth} type="submit">{loadingAuth ? <FaSpinner color="#FFF" size={16} /> : 'Alterar senha'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}