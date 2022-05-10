import './modal.css';

import { FiX } from 'react-icons/fi'
import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';

export default function Modal({ close }) { //receber o 'conteudo' como params quando eu conseguir salvar as informações 
    const { user } = useContext(AuthContext);
    const [publication, setPublication] = useState('');

    function publicOrNot(e) {
        if (publication === '') {
            return (
                <button className="make-public" disabled>Publicar</button>
            )
        } else {
            return (
                <button className="make-public" onClick={() => console.log(publication)}>Publicar</button>
            )
        }
    }

    return (
        <div className="modal">
            <div className="container-modal">
                <div>
                    <h2>Criar publicação</h2>
                    <button className="close" onClick={close}>
                        <FiX size={20} color="#000000" />

                    </button>
                    <hr />
                </div>

                <div>
                    <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" width="50" heigh="50" />
                    <p><strong>{user.name}</strong></p>
                </div>


                <textarea type="text" placeholder="No que você está pensando?" value={publication} onChange={(e) => setPublication(e.target.value)} />

                <div>
                   {publicOrNot()}
                </div>

            </div>
        </div>
    )

}