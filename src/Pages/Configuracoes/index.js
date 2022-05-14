import './style.css';

import { FiSettings } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';



function Settings() {
    return (
        <div className="containerAll">
            <div className="container-settings">
                <FiSettings className="icon-settings-config" size={30} color="#000" />
                <form className="form-settings">
                    <p>Mudar senha</p>
                    <FaLock className="icons" size={20} color="#000" />
                    <input type="password" placeholder="Digite sua senha" required />

                    <FaLock className="icons" size={20} color="#000" />
                    <input type="password" placeholder="Digite sua nova senha" required />

                    <FaLock className="icons" size={20} color="#000" />
                    <input type="password" placeholder="Digite sua nova senha" required />

                    <button type="submit">Salvar alterações</button>
                </form>
            </div>

        </div>
    )
}


export default Settings;