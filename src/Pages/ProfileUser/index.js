import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import avatar from '../../assets/avatar.png'

import { UsersContext } from '../../contexts/users'
import firebase from '../../services/firebaseConnection'

import { ApiNews } from '../../Components/ApiNews'

import { FiPlus } from 'react-icons/fi'
import { AuthContext } from '../../contexts/auth';

import './style.css'

export default function ProfileUsers() {
    const { id } = useParams();
    const { users } = useContext(UsersContext)

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

    useEffect(() => {

        async function loadUser() {
            const userProfile = await firebase.firestore().collection('users')
                .doc(id)
                .get()

            let data = {
                uid: id,
                name: userProfile.data().name,
                avatarUrl: userProfile.data().avatarUrl,
                title: userProfile.data().title,
                description: userProfile.data().description
            }
            setUser(data)
        }

        loadUser()

    }, [])

    return (
        <div className="containerAll">
            <main className="profileUser">

                <div className="containerProfileUser">
                    <div className="containerInfoProfileUser">
                        <div className="banner">
                            <label className="label-avatar">

                                <input className="input-file" /> 
                                {avatarUrl === null ?
                                    <img src={avatar} width="150" height="150" alt="user-profile-picture" />
                                    :
                                    <img src={user.avatarUrl} width="150" height="150" alt="user-profile-picture" />
                                }
                            </label>
                            <button><FiPlus /> Seguir</button>
                        </div>
                        <div className="titleInfoProfileUser">
                            <h1>{user.name}</h1>
                            <span>{user.title}</span>
                        </div>
                    </div>

                    <div className="containerAbout">
                        <h1>Sobre</h1>
                        <span>{user.description}</span>
                    </div>
                </div>

                <div className="apiNews">
                    <ApiNews />
                </div>
            </main>
        </div>
    )
}