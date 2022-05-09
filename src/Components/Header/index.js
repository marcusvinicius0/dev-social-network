import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth'

import { AiOutlineHome } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { BsFillChatDotsFill } from 'react-icons/bs'
import  { FiSettings, FiLogOut } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import './header.css'

export function Header() {
    const { user, signOut } = useContext(AuthContext);

    return (
        <>
        {user && (
            <div className="header">
                <h1>DevSocialNetwork</h1>
                <nav className="optionsNav">
                    <div>
                        <AiOutlineHome />
                        <span>Início</span>
                    </div>
                    <div>
                        <FaUsers />
                        <span>Amigos</span>
                    </div>
                    <div>
                        <BsFillChatDotsFill />
                        <span>Mensagens</span>
                    </div>
                    <div>
                        <FiSettings />
                        <span>Configurações</span>
                    </div>
                </nav>

                <button onClick={signOut} className="buttonSignOut"><FiLogOut /></button>
            </div>
        )}
        </>
    )
}