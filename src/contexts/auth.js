import { createContext, useEffect, useState } from "react";
import firebase from '../services/firebaseConnection';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        function loadStorage() {

            const storageUser = localStorage.getItem('UserSystem');

            if (storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }

            setLoading(false);
        }

        loadStorage();

    }, [])

    async function signIn(email, password) {
        setLoadingAuth(true);

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const userProfile = await firebase.firestore().collection('users')
                    .doc(uid).get();

                let data = {
                    uid: uid,
                    name: userProfile.data().name,
                    avatarUrl: userProfile.data().avatarUrl,
                    bannerUrl: userProfile.data().bannerUrl,
                    email: value.user.email,
                    title: userProfile.data().title,
                    description: userProfile.data().description,
                    password: password,
                }

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success('Bem vindo(a) de volta!');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Ops, algo deu errado.')
                setLoadingAuth(false);
            })
    }

    async function signUp(email, password, name, description, title) {
        setLoadingAuth(true);

        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                await firebase.firestore().collection('users')
                    .doc(uid).set({
                        name: name,
                        avatarUrl: null,
                        bannerUrl: null,
                        description: description,
                        title: title,
                        password: password,
                    })
                    .then(() => {
                        let data = {
                            uid: uid,
                            name: name,
                            email: value.user.email,
                            description: description,
                            title: title,
                            avatarUrl: null,
                            bannerUrl: null,
                            password: password,
                        };

                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                        toast.success('Bem vindo(a) a plataforma!')
                    })


            })
            .catch((error) => {
                console.log(error);
                toast.error('Ops, algo deu errado.')
                setLoadingAuth(false);
            })
    }

    function storageUser(data) {
        localStorage.setItem('UserSystem', JSON.stringify(data));
    }

    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem('UserSystem');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            signUp,
            signOut,
            signIn,
            loadingAuth,
            setUser,
            storageUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;