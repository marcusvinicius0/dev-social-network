import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth'

import { AiOutlineHome } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FiSettings, FiLogOut } from 'react-icons/fi'

import logo from '../../assets/logo-social.png';

import { Link } from 'react-router-dom'

import './header.css'

export function Header() {
    const { user, signOut } = useContext(AuthContext);

    return (
        <>
            {user && (
                <div className="header">
                    <img src={logo} alt="logo" className="logo" />
                    <nav className="optionsNav">

                        <Link to="/dashboard">
                            <div>
                                <AiOutlineHome color="#000000" />
                                <span>Início</span>
                            </div>
                        </Link>

                        <Link to="/friends">
                            <div>
                                <FaUsers color="#000000" />
                                <span>Amigos</span>
                            </div>
                        </Link>

                        <Link to="/dashboard">
                            <div>
                                <BsFillChatDotsFill color="#000000" />
                                <span>Mensagens</span>
                            </div>
                        </Link>

                        <Link to="/settings">
                            <div>
                                <FiSettings color="#000000" />
                                <span>Configurações</span>
                            </div>
                        </Link>
                    </nav>

                    <button onClick={signOut} className="buttonSignOut"><FiLogOut /></button>
                </div>
            )}
        </>
    )
}