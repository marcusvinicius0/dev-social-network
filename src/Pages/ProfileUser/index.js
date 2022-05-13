import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { UsersContext } from '../../contexts/users';
import firebase from '../../services/firebaseConnection';

import { FiX } from 'react-icons/fi'

export default function ProfileUsers() {
    const { id } = useParams();
    const { users } = useContext(UsersContext)

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadUser() {
            const userProfile = await firebase.firestore().collection('users')
            .doc(id)
            .get()

            let data = {
                uid: id,
                name: userProfile.data().name,
                avatarUrl: userProfile.data().avatarUrl
            }
            setUser(data)
        }

        loadUser()

    }, [])
    
    return (
        <div className="containerAll">
            <h1>PÁGINA FRIENDS</h1>
            <p>{user.name}</p>
        </div>
    )
}