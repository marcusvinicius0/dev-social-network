import './settings.css';
import Sidebar from '../../Components/Sidebar';

import avatar from '../../assets/avatar.png';

function Settings() {
    return (
        <div>
            <div>
                <Sidebar />
            </div>

            <div className='settings-container'>
                <div className="profile-pic">
                    <img src={avatar}  alt="foto-perfil" />
                </div>

                <label>
                    Nome: <br/>
                    <input className="input-settings" type="text" placeholder="Marcus Vinícius Begheli" />
                </label>
                        <br/> <br/>
                <label>
                    Email: <br/>
                    <input className="input-settings1" type="text" placeholder="email@email.com" disabled={true} />
                </label>
            </div>
        </div>



    )
}


export default Settings;