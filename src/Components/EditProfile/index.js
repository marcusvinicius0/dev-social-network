import React, { useState, useContext } from 'react';
import './editprofile.css';

import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';

import { FiX } from 'react-icons/fi'

export function EditProfile({setIsModalActive}) {
    const { user, setUser, storageUser } = useContext(AuthContext);

    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);

    return (
        <div className="modalEditProfile">
            <div className="boxModal">
                <div className="bannerEditProfile">
                    <label className="avatarEditProfile">
                        <input className="input-file" type="file" accept="image/*" /> <br />
                        {avatarUrl === null ?
                            <img src={avatar} width="150" height="150" alt="user-profile-picture" />
                            :
                            <img src={avatarUrl} width="150" height="150" alt="user-profile-picture" />
                        }<br />
                    </label>
                </div>

                <form className="formEditProfile">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
                    <button type="submit">Salvar</button>
                </form>

                <button className="buttonClose" type="button" onClick={() => setIsModalActive(false)}><FiX /></button>
            </div>
        </div>
    )
}