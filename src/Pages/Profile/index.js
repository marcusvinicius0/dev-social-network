import { useState, useContext } from 'react';
import './profile.css';

import avatar from '../../assets/avatar.png';
import { ApiNews } from '../../Components/ApiNews';
import { EditProfile } from '../../Components/EditProfile'

import { AuthContext } from '../../contexts/auth';



function Profile() {
    const { user, setUser, storageUser } = useContext(AuthContext);

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
                                <span>Desenvolvedor Front End | ReactJS | JavaScript</span>
                            </div>
                        </div>
                    </div>



                    {/*<label className="div-informations">
                            Nome
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Edite seu nome...." />
                            Email
                            <input type="email" value={email} disabled={true} />

                            <label>Descrição</label>
                            <textarea maxLength="60" value={description} onChange={(e) => setDescription(e.target.value)} placeholder=" Max. 60 caracteres" />

                            <div className="change-password">
                                <Link to="/dashboard">
                                    <p>Alterar senha</p>
                                </Link>
                            </div>

                            <button type="submit">Salvar</button>
                        </label>*/}

       

                <div className="apiNews">
                    <ApiNews />
                </div>
            </main>

            {isModalActive && <EditProfile setIsModalActive={setIsModalActive} />}

        </div>

    )

}

export default Profile;

