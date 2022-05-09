import './dashboard.css';

import Modal from '../../Components/Modal';
import SideBar from '../../Components/Sidebar';
import api from '../../services/api';

import { AiFillPicture } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';
import { useEffect, useState } from 'react';


// //http://servicodados.ibge.gov.br/api/v3/noticias/
function Dashboard() {
    const [showPostModal, setShowPostModal] = useState(false);
    const [showNews, setShowNews] = useState([]);

    function togglePostModal(){
        setShowPostModal(!showPostModal)     //troca de true pra falso --- abrindo e fechando
        // setDetail(item)                    // vai ser o conteúdo da public
    }

    
    // useEffect(()=>{

    //     async function loadApi(){
    //         const response = await api.get('v2/everything?q=tesla&from=2022-04-05&sortBy=publishedAt')
    //         // const response = await api.get('r-api/?api=filmes')

    //         setShowNews(response.itens)
    //     }

    //     loadApi();

    //     console.log(showNews.data)

    // }, []);

    return (
        <div className="main-container-dashboard">
            <SideBar />

            <div className="publications">
                <label>
                    <input onClick={()=> togglePostModal()} type="text" placeholder="Começar uma publicação..."  />
                </label>

                <div>
                    <AiFillPicture size={20} color="#000000" />
                    <p>Foto</p>

                    <FiVideo size={20} color="#000000" />
                    <p>Vídeo</p>
                </div>
            </div>

            <div className="feed">
           
            </div>

            <div className='api-news'>
                {/* {showNews.map((showNew) => {
                    return(
                        <article key={showNew.id}>
                            <strong>{showNew.titulo}</strong>
                        </article>
                    )
                })} */}
            </div>

            {showPostModal && (
                <Modal
                    // conteudo={detail}
                    close={togglePostModal}
                />
            )}

        </div>
    )
}

export default Dashboard;