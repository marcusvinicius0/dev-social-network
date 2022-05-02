import { useState, useContext } from 'react';
import './settings.css';
import Sidebar from '../../Components/Sidebar';

import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';

import { FiSettings, FiUpload } from 'react-icons/fi';

 function Profile() {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

    return (
        <div>
            <Sidebar />

            <div className="container">
                <form className="form-profile">
                    <label className="label-avatar">
                        <span>
                            <FiUpload color="#FFF" size={25} />
                        </span>

                        <input className="input-file" type="file" accept="image/*" /><br />
                        {avatarUrl === null ?
                            <img src={avatar} width="150" height="150" alt="user-profile-picture" />
                            :
                            <img src={avatarUrl} width="250" height="250" alt="user-profile-picture" />
                        }<br />

                    </label>

                    <label className="label-informations">Nome</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                       
                    <label className='label-informations'>Email</label>
                    <input type="email" value={email} disabled={true} />

                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>

    )
}

export default Profile;

