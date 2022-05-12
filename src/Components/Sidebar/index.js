import './sidebar.css';

import avatar from '../../assets/avatar.png';

import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';
import { AiOutlineMessage } from 'react-icons/ai';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

export default function SideBar() {
    const { signOut, user } = useContext(AuthContext);
    // const [imageAvatar, setImageAvatar] = useState(null);

    return (
        <div className="sidebar">
            <div className="picture-sidebar">
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" /> <br />
            </div>

            <label>
                <p>{user.name}</p> <br/>
                <p className="aboutyourself">Software developer • React.js | JavaScript</p>
            </label>

            <hr />

            <div className="links">
                {/* <Link to="/dashboard" >
                    <FiHome color="#000000" size={25} />
                    <p>Início</p>
                </Link>

                <Link to="/friends">
                    <FiUser color="#000000" size={25} />
                    <p>Amigos</p>
                </Link> 

                <Link to="/messages">
                    <AiOutlineMessage color="#000000" size={25} />
                    <p>Mensagens</p>
                </Link> */}

                <Link to="/profile" >
                    <CgProfile color="#000000" size={25} />
                    <p>Meu perfil</p>
                </Link> 

            </div>

        </div>
    )
}