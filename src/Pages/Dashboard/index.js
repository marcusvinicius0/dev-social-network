import './dashboard.css';

import SideBar from '../../Components/Sidebar';
// import api from '../../services/api';

import { AiFillPicture } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';
import { useEffect, useState } from 'react';


// //http://servicodados.ibge.gov.br/api/v3/noticias/
function Dashboard() {
    // const [news, setNews] = useState([]);

    // useEffect(() => {

    //     async function loadNews() {
    //         const response = await api.get("api/v3/noticias")

    //         setNews(response.data)

    //     }

    //     loadNews();

    // }, [])
    const [text, setText] = useState('');

    function HandleText(){
        console.log(text)


        useEffect(()=>{

            setText()

        }, [])
    }

    return (
        <div className="main-container-dashboard">
            <SideBar />

            <div className="publications">
                <label>
                    <input type="text" placeholder="Começar uma publicação..." value={text} onChange={ (e) => setText(e.target.value)} />
                    <button onClick={HandleText}>publicar</button>
                </label>

                <div>
                    <AiFillPicture size={20} color="#000000" />
                    <p>Foto</p>

                    <FiVideo size={20} color="#000000" />
                    <p>Vídeo</p>
                </div>
            </div>

            <div className="feed">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tellus interdum sollicitudin torquent eros mauris morbi, congue porttitor lectus quisque imperdiet et iaculis ut inceptos sed leo non. Donec ex interdum sodales libero lectus sem facilisi habitasse, sagittis metus sociosqu mollis phasellus fames bibendum arcu nisi, vi</p> 
            </div>

            <div className='api-news'>
                    <article>
                        <h2><i>API notícias</i></h2>
                        <p>info</p>
                        <p>img</p> <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tellus interdum sollicitudin torquent eros mauris morbi, congue porttitor lectus quisque imperdiet et iaculis ut inceptos sed leo non. Donec ex interdum sodales libero lectus sem facilisi habitasse, sagittis metus sociosqu mollis phasellus fames bibendum arcu nisi, viverra ut suspendisse morbi cubilia a magna. Elementum suscipit orci sit semper elit velit fermentum maecenas taciti, curae lacus vel posuere sagittis ante nunc malesuada, nam montes blan</p>
                    </article>
            </div>

        </div>
    )
}

export default Dashboard;