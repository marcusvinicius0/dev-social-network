import './dashboard.css';

import SideBar from '../../Components/Sidebar';

import { AiFillPicture } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';

 function Dashboard() {
    return (
        <div className="main-container-dashboard">
            <SideBar />

            <div className="publications">
                <label>
                    <input type="text" placeholder="Começar uma publicação..." />
                </label>

                <div>
                    <AiFillPicture size={20} color="#000000" />
                    <p>Foto</p>

                    <FiVideo size={20} color="#000000" />
                    <p>Vídeo</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;