import { createContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import firebase from '../services/firebaseConnection';
import { toast } from 'react-toastify';

export const UsersContext = createContext({});

function UsersProvider({ children }) {
    const [users, setUsers] = useState([])

    useEffect( () => {
        async function loadUsers() {
            await firebase.firestore().collection('users')
            .get()
            .then( snapshot => {
                let allUsers = []

                snapshot.forEach( user => {
                    allUsers.push({
                        id: user.id,
                        name: user.data().name,
                        avatarUrl: user.data().avatarUrl,
                        title: user.data().title
                    })
                })
                
                setUsers(allUsers)
            })

        }
        loadUsers();
    }, [])

    return (
        <UsersContext.Provider value={{
            users
        }}>
            {children}
        </UsersContext.Provider>
    )
}


export default UsersProvider;