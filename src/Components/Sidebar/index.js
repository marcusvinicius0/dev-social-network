import './sidebar.css';

import avatar from '../../assets/avatar.png';

import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

export default function SideBar() {
    const { signOut, user } = useContext(AuthContext);
    // const [imageAvatar, setImageAvatar] = useState(null);


    return (
        <div className="sidebar">
            <div className="picture">
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" /> <br />
            </div>

            <label>
                <p>{user.name}</p>
            </label>

            <hr />

            <div className="links">
                <Link to="/dashboard" >
                    <FiHome color="#000000" size={25} />
                    <p>Início</p>
                </Link>

                <Link to="/friends">
                    <FiUser color="#000000" size={25} />
                    <p>Amigos</p>
                </Link>

                <Link to="/settings" >
                    <FiSettings color="#000000" size={25} />
                    <p>Configurações</p>
                </Link>

                <label onClick={() => signOut()}>
                <FiLogOut className="logout" color="#000000" size={25}/>
                <p>Sair</p>
                </label>

            </div>

        </div>
    )
}