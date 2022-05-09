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
                        <h1>PROJETO TA FICANDO TOPPPPPPPPPP</h1>
                        <p>Marcus, não esquece de botar a classe 'containerAll' nas pages para dar um distanciamento do header [X]</p>
                        <p><strong>ATT. 09/05 Feito meu amigo João, tmj demaaaais ❤</strong> </p>
                        <br/>
                        <br/>
                        <ul>
                        <strong>Coisas que vou fazer</strong>
                            <li>Página Amigos []</li>
                            <li>Diminuir inputs de SignIn/SignUp - por algum motivo não to conseguindo mudar...  []</li>
                            <li>Arrumar pag - Forgot Password - fazer lógica pra mudar a senha - []</li>
                            <li></li>
                        </ul>
                        <br/>
                        <br/>
                        <button onClick={() => alert('Lindo')}>TAMO JUNTOOOOOOOOOOOOOO</button>
                    </div>
                </div>

                <div className='api-news'>

                </div>

                {showPostModal && (
                    <Modal
                        // conteudo={detail}
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