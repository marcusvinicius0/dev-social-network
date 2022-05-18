import React, { useState, useContext } from 'react';
import './editprofile.css';

import firebase from '../../services/firebaseConnection';

import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';

import { FiX, FiUpload } from 'react-icons/fi'
import { toast } from 'react-toastify';

export function EditProfile({ setIsModalActive }) {
    const { user, setUser, storageUser } = useContext(AuthContext);

    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)
    const [title, setTitle] = useState(user && user.title)
    const [description, setDescription] = useState(user && user.description)

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);
    const [bannerUrl, setBannerUrl] = useState(user && user.bannerUrl);



    function handleFileBanner(e){

        

    }

    function handleFile(e) {

        if (e.target.files[0]) {
            const image = e.target.files[0]

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))  //ver o preview da foto
            } else {
                toast.error('Envie uma imagem do tipo PNG ou JPEG')
                setImageAvatar(null)
                return null;
            }
        }
    }

    async function handleUpload() {
        const currentUid = user.uid;

        const uploadTask = await firebase.storage()
            .ref(`images/${currentUid}/${imageAvatar.name}`)
            .put(imageAvatar)
            .then(async () => {
                toast.success('Dados enviados com sucesso!')

                await firebase.storage().ref(`images/${currentUid}`)
                    .child(imageAvatar.name).getDownloadURL()
                    .then(async (url) => {
                        let urlFoto = url;

                        await firebase.firestore().collection('users')
                            .doc(user.uid)
                            .update({
                                avatarUrl: urlFoto,
                                name: name,
                                title: title,
                                description: description
                            })
                            .then(() => {
                                let data = {
                                    ...user,
                                    avatarUrl: urlFoto,
                                    name: name,
                                    title: title,
                                    description: description
                                };
                                setUser(data);
                                storageUser(data);
                            })
                    })
            })
    }

    async function handleSave(e) {
        e.preventDefault();
        console.log(description)

        if (imageAvatar === null && name !== '') {
            await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    name: name,
                    title: title,
                    description: description
                })
                .then(() => {
                    let data = {
                        ...user,
                        name: name,
                        title: title,
                        description: description
                    };
                    setUser(data)
                    storageUser(data)
                })
        }
        else if (name !== '' && imageAvatar !== null) {
            handleUpload()
        }
    }

    return (
        <div className="modalEditProfile">
            <div className="boxModal">

                <form className="formEditProfile" onSubmit={handleSave}>
                    <div className="boxEditProfile">
                        <label className="bannerEditeProfile" onChange={handleFileBanner}>
                        <FiUpload className="avatar-upload-banner" color="#FFF" size={25} />
                            <input type="file" accept="image/*" />
                            
                        </label>
                        <label className="avatarEditProfile" onChange={handleFile}>
                            <FiUpload className="avatar-upload" color="#FFF" size={30} />
                            <input type="file" accept="image/*" /> <br />
                            {avatarUrl === null ?
                                <img src={avatar} width="150" height="150" alt="user-profile-picture" />
                                :
                                <img src={avatarUrl} width="150" height="150" alt="user-profile-picture" />
                            }<br />
                        </label>
                    </div>

                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
                    <input className="input-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" disabled />
                    <textarea className="textarea-profile" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
                    <button type="submit">Salvar</button>
                </form>

                <div className="barToClose">
                    <button className="buttonClose" type="button" onClick={() => setIsModalActive(false)}><FiX /></button>
                </div>
            </div>
        </div>
    )
}