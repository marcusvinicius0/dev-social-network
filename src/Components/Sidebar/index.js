import './sidebar.css';

import avatar from '../../assets/avatar.png';

import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="picture">
                <img src={avatar} alt="foto-perfil" /> <br/>
            </div>

            <label>
                <p>Marcus Vinícius Begheli</p>
            </label>

            <hr/>

            <div className="links">
                <Link className="settings"  to="/dashboard">
                    <FiHome color="#000000" size={25} />
                   <p>Início</p>
                </Link> 

                <Link className="settings"  to="/">
                    <FiUser color="#000000" size={25} />
                   <p>Amigos</p>
                </Link> 

                <Link className="settings" to="/">
                    <FiSettings color="#000000" size={25} />
                    <p>Configurações</p>
                </Link>

                <Link className="logout" to="/">
                    <FiLogOut color="#000000" size={25} />
                    <p>Sair</p>
                </Link>
            </div>

        </div>
    )
}