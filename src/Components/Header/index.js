import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth'

import { AiOutlineHome } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi';

import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom'

import './header.css'

export function Header() {
    const { user, signOut } = useContext(AuthContext);

    return (
        <>
            {user && (
                <div className="header">
                    <span className="logo">
                        <img src={logo} alt="logo" />
                    </span>


                    <nav className="optionsNav">
                        <span className="search-bar">
                            <BiSearchAlt color="rgba(0, 0, 0, 0.6)" size={23} />
                            <input type="text" placeholder="Pesquisar..." />
                        </span>
                        <Link to="/dashboard">
                            <div>
                                <AiOutlineHome color="rgba(0, 0, 0, 0.6)" size={23} />
                                <span>Início</span>
                            </div>
                        </Link>

                        <Link to="/dashboard">
                            <div>
                                <FaUsers color="rgba(0, 0, 0, 0.6)" size={23} />
                                <span>Seguidores</span>
                            </div>
                        </Link>

                        <Link to="/messages">
                            <div>
                                <BsFillChatDotsFill color="rgba(0, 0, 0, 0.6)" size={23} />
                                <span>Mensagens</span>
                            </div>
                        </Link>

                        <Link to="/settings">
                            <div>
                                <FiSettings color="rgba(0, 0, 0, 0.6)" size={23} />
                                <span>Configurações</span>
                            </div>
                        </Link>
                    </nav>

                    <button onClick={signOut} className="buttonSignOut"><FiLogOut size={25} />
                        <label>Sair</label>
                    </button>
                </div>
            )}
        </>
    )
}