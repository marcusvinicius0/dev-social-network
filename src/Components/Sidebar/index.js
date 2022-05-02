import './sidebar.css';

import avatar from '../../assets/avatar.png';

import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

export default function SideBar() {
    const { signOut } = useContext(AuthContext);

    return (
        <div className="sidebar">
            <div className="picture">
                <img src={avatar} alt="foto-perfil" /> <br />
            </div>

            <label>
                <p>Marcus Vinícius Begheli</p>
            </label>

            <hr />

            <div className="links">
                <Link className="settings-config" to="/dashboard">
                    <FiHome color="#000000" size={25} />
                    <p>Início</p>
                </Link>

                <Link className="settings-config" to="/dashboard">
                    <FiUser color="#000000" size={25} />
                    <p>Amigos</p>
                </Link>

                <Link className="settings-config" to="/settings">
                    <FiSettings color="#000000" size={25} />
                    <p>Configurações</p>
                </Link>

                <Link className="logout" to="/">
                    <FiLogOut color="#000000" size={25} />
                    <button onClick={() => signOut()}>Sair</button>
                </Link>
            </div>

        </div>
    )
}