import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth'

import { AiOutlineHome } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FiSettings, FiLogOut, FiSearch } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi';

// import { UsersResults } from '../UsersResults'

import { UsersContext } from '../../contexts/users'

import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

import './header.css';

export function Header() {
    const { user, signOut } = useContext(AuthContext);
    const { users } = useContext(UsersContext);
    const [search, setSearch] = useState("");
    const [showResults, setShowResults] = useState(false);

   

    return (
        <>
            {user && (
                <div className="header">

                    <div className="logo">
                        <img src={logo} alt="logo" />

                        <span className="search-bar">

                            <button><BiSearchAlt color="rgba(0, 0, 0, 0.8)" size={23} /></button>
                            <input type="text" placeholder="Pesquisar..." value={search} onChange={(e) => setSearch(e.target.value)}
                                onClick={() => setShowResults(!showResults)}
                            />


                        </span>
                    </div>

                    <nav className="optionsNav">

                        <Link to="/dashboard">
                            <div>
                                <AiOutlineHome color="rgba(0, 0, 0, 0.6)" size={23} />
                                <span>Início</span>
                            </div>
                        </Link>

                        <Link to="/myfollowers">
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

                    <button onClick={signOut} className="buttonSignOut"><FiLogOut size={25} /></button>
                </div>
            )}
        </>
    )
}