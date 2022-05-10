import './friends.css';

import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';

function Messages() {
    const { user } = useContext(AuthContext);

    return (
        <div className="containerAll">

            <div className="container-messages">
                <div className="messages">
                    <p>Mensagens</p>

                    <div className="row" />

                    <div className="picture" onClick={()=>{}}>
                        <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" />
                        <p className="user-name"><strong>{user.name}</strong></p>
                    </div>
                    <div className="picture">
                        <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" />
                        <p className="user-name"><strong>{user.name}</strong></p>
                    </div>
                    <div className="picture">
                        <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" />
                        <p className="user-name"><strong>{user.name}</strong></p>
                    </div>
                    <div className="picture">
                        <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" />
                        <p className="user-name"><strong>{user.name}</strong></p>
                    </div>
                    <div className="picture">
                        <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" />
                        <p className="user-name"><strong>{user.name}</strong></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Messages;