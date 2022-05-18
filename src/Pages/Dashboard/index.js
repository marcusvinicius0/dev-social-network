import './dashboard.css';

import Modal from '../../Components/Modal';
import SideBar from '../../Components/Sidebar';
import { Chat } from '../../Components/Chat';

// import api from '../../services/api';   // VAMOS CONSUMIR UMA API DE NOTÍCIAS

import avatar from '../../assets/avatar.png';

import { AiFillPicture } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';
import { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import { ApiNews } from '../../Components/ApiNews';


// //http://servicodados.ibge.gov.br/api/v3/noticias/
function Dashboard() {
    const [showPostModal, setShowPostModal] = useState(false);

    const { user } = useContext(AuthContext)

    function togglePostModal() {
        setShowPostModal(!showPostModal)     //troca de true pra falso --- abrindo e fechando
        // setDetail(item)                    // vai ser o conteúdo da public
    }


    return (
        <div className="containerAll">
            <div className="main-container-dashboard">
                <SideBar />

                <div className="publications">
                    <div className="startPublication">
                        <label>
                            <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" />
                            <input onClick={() => togglePostModal()} type="text" placeholder="Começar uma publicação..." />
                        </label>

                        <div className="togglesOnStartPublication">
                            <div>
                                <AiFillPicture size={20} color="#0B67C2" />
                                <p>Foto</p>
                            </div>

                            <div>
                                <FiVideo size={20} color="#7FC15E" />
                                <p>Vídeo</p>
                            </div>
                        </div>
                    </div>

                    <div className="feed">
                        <ul>
                            <strong>to do:</strong>
                            <li><strong>Page seguidores</strong> [X] </li> <br />
                            <li><strong>Page settings</strong> [X] </li> <br />
                            <li><strong>page messages</strong>[in progress]</li> <br />
                            <li><strong>Conseguir acessar perfil do usuário com uid</strong>[X]</li> <br />
                            <li><strong>Funcionalidade para alterar senha atual</strong> []</li> <br />
                            <li><strong>Capa de fundo -banner- para usuários</strong> []</li> <br />
                            <li><strong>Arrumar modal da publicação</strong> [X]</li> <br />
                            <li><strong>Fazer publicação texto, fotos e video</strong> [X]</li> <br />
                            <li><strong>Encontrar perfil na barra de busca</strong> [X]</li>
                            <li><strong>Seguir usuarios</strong> []</li>
                            <br />
                            <li><strong>Funcionalidade chat</strong> []</li>
                        </ul>
                        <br />
                        <br />
                        <button onClick={() => alert('Lindo')}>TAMO JUNTOOOOOOOOOOOOOO</button>
                        <br />
                        <br />
                        <p><strong>"Cada adversidade, cada fracasso traz consigo a semente de um benefício igual ou maior"</strong></p>
                        <br />
                        <p>- Napoleon Hill</p>
                    </div>
                </div>

                <div className='api-news'>
                    <ApiNews />
                </div>

                {showPostModal && (
                    <Modal
                        close={togglePostModal}
                    />
                )}
                <div>
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;