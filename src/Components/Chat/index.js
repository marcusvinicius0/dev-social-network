import React, { useState, useContext } from 'react';

import avatar from '../../assets/avatar.png';

import './chat.css'
import { AuthContext } from '../../contexts/auth';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export function Chat() {
    const [isChatOpen, setIsChatOpen] = useState(false)
    const { user } = useContext(AuthContext);
    
    return(
        <div className={isChatOpen ? 'chat chatOn' : 'chat chatOff'}>
            <div className="headerChat">
                <div>
                    <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="profile-picture" />
                    <span>Mensagens</span>
                </div>
                <button onClick={() => setIsChatOpen(!isChatOpen)} >{isChatOpen ? <MdKeyboardArrowDown color="#FFF" /> : <MdKeyboardArrowUp color="#FFF" /> }</button>
            </div>
            <div className="contentChat">
                
            </div>
        </div>
)
}