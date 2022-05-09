import './dashboard.css';

import Modal from '../../Components/Modal';
import SideBar from '../../Components/Sidebar';
import api from '../../services/api';

import avatar from '../../assets/avatar.png';

import { AiFillPicture } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';
import { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';


// //http://servicodados.ibge.gov.br/api/v3/noticias/
function Dashboard() {
    const [showPostModal, setShowPostModal] = useState(false);
    const [showNews, setShowNews] = useState([]);

    const { user } = useContext(AuthContext)

    function togglePostModal() {
        setShowPostModal(!showPostModal)     //troca de true pra falso --- abrindo e fechando
        // setDetail(item)                    // vai ser o conteúdo da public
    }


    // useEffect(()=>{

    //     async function loadApi(){
    //         const response = await api.get('v2/everything?q=tesla&from=2022-04-05&sortBy=publishedAt')
    //         // const response = await api.get('r-api/?api=filmes')

    //         setShowNews(response.data)
    //     }

    //     loadApi();

    //     console.log(showNews.data)

    // }, []);

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
                    <p>Marcus, não esquece de botar a classe 'containerAll' nas pages para dar um distanciamento do header</p>
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

        </div>
        </div>
    )
}

export default Dashboard;