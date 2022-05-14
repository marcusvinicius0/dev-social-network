import './style.css';

import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

import avatar from '../../assets/avatar.png';

function Followers() {
    const { user } = useContext(AuthContext);

    return (
        <div className="containerAll">
            <div className="container-followers">
                <h1>Meus seguidores</h1>
                <div className="picture1">
                    <Link to="/users/:id/jkPjNHFZ3Wg8oSTFbaZaCoH6KS73">
                        <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" />
                        <p>{user.name}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Followers;