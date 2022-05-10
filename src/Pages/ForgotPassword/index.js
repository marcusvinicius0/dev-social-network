import './style.css';
import { useContext, useState } from "react"

import { AuthContext } from "../../contexts/auth"
import { Link } from 'react-router-dom';

import { FaLock } from 'react-icons/fa';

export default function ForgotPassword() {
    const { loadingAuth, user, setUser } = useContext(AuthContext);
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');


    function handleUpload() {

    }

    return (
        <div className="pageLogin">
            <div className="haveAccount">
                <div className="haveAccountContent">
                    <h1>Dev Social Network</h1>
                    <p>Entre agora mesmo!</p>
                    <Link to="/">Faça login</Link>
                </div>
            </div>

            <div className="registerInfos">
                <div className="registerInfosContent">
                    <h1>Mudar minha senha</h1>
                    <form onSubmit={handleUpload}>
                        <p className="typenewpassword">Digite sua nova senha</p>
                        <div>
                            <FaLock />
                            <input className="input-email" type="password" placeholder="*******" value={firstPassword} onChange={(e) => setFirstPassword(e.target.value)} required />
                        </div>
                        <p className="typenewpassword">Digite novamente</p>
                        <div>
                            <FaLock />
                            <input type="password" placeholder="*******" value={secondPassword} onChange={(e) => setSecondPassword(e.target.value)} required />
                        </div>
                        <button type="submit">{loadingAuth ? 'Carregando...' : 'Mudar'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

