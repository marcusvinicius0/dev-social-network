import { useState, useContext } from 'react';
import './profile.css';

import avatar from '../../assets/avatar.png';
import { ApiNews } from '../../Components/ApiNews';
import { EditProfile } from '../../Components/EditProfile'

import { AuthContext } from '../../contexts/auth';



function Profile() {
    const { user } = useContext(AuthContext);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);

    const [isModalActive, setIsModalActive] = useState(false)



    return (
        <div className="containerAll">
            <main className="profile">

                    <div className="containerProfile">
                        <div className="containerInfoProfile">
                            <div className="banner">
                                <label className="label-avatar">

                                    <input className="input-file" /> <br />
                                    {avatarUrl === null ?
                                        <img src={avatar} width="150" height="150" alt="user-profile-picture" />
                                        :
                                        <img src={avatarUrl} width="150" height="150" alt="user-profile-picture" />
                                    }<br />
                                </label>
                                <button onClick={() => setIsModalActive(true)}>Editar perfil</button>
                            </div>
                            <div className="titleInfoProfile">
                                <h1>{user.name}</h1>
                                <span>{user.title}</span>
                            </div>
                        </div>

                        <div className="containerAbout">
                            <h1>Sobre</h1>
                            <span>{user.description}</span>
                        </div>
                    </div>

                <div className="apiNews">
                    <ApiNews />
                </div>
            </main>

            {isModalActive && <EditProfile setIsModalActive={setIsModalActive} />}

        </div>

    )

}

export default Profile;

