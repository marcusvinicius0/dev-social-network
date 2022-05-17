import React, { useState, useContext } from 'react'

import { UsersContext } from '../../contexts/users'

import './style.css'

// import firebase from '../../services/firebaseConnection'

import { Link } from 'react-router-dom'

import { FiSearch } from 'react-icons/fi'

export function UsersResults() {
    const { users } = useContext(UsersContext)
    const [search, setSearch] = useState('');
    
    return(
        <>
            <article className="boxUserResults">
                <ul>
                    {users.map( item => (
                        <Link to={`/users/${item.id}`} key={item.id}> <FiSearch /> {item.name} <img src={item.avatarUrl} /> </Link>
                    ))}

                    <Link className="linkToSeeMoreResults" to="/">Ver mais resultados</Link>
                </ul>
            </article>
        </>
    )
}