import './style.css';
import { useContext, useState } from "react"

import { AuthContext } from "../../contexts/auth"
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

export default function ForgotPassword() {
    const { loadingAuth } = useContext(AuthContext);
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    return (

        <div>
            <div className="forgotpassword-container">
                <form className="form-forgotpassword" onSubmit={() => { }}>
                    Nova senha:
                    <input type="password" placeholder="******" required value={firstPassword} onChange={(e) => setFirstPassword(e.target.value)} />
                    Digite a senha novamente:
                    <input type="password" placeholder="******" required value={secondPassword} onChange={(e) => setSecondPassword(e.target.value)} />

                    <button type="submit">{loadingAuth ? 'Salvando...' : 'Salvar alterações'}</button>
                    <Link className="btn-return" to="/">
                        <FiArrowLeft color='#000000' size={25} />
                        <p>Voltar</p>
                    </Link>
                </form>
            </div>
        </div>

    )
}

