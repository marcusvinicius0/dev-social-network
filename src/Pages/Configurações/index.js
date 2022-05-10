import { useState, useContext } from 'react';
import './settings.css';
import Sidebar from '../../Components/Sidebar';
import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import { FiSettings, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Profile() {
    const { user, setUser, storageUser } = useContext(AuthContext);

    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [description, setDescription] = useState('');

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);




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
                toast.success('Foto enviada com sucesso!')

                await firebase.storage().ref(`images/${currentUid}`)
                    .child(imageAvatar.name).getDownloadURL()
                    .then(async (url) => {
                        let urlFoto = url;

                        await firebase.firestore().collection('users')
                            .doc(user.uid)
                            .update({
                                avatarUrl: urlFoto,
                                name: name,
                            })
                            .then(() => {
                                let data = {
                                    ...user,
                                    avatarUrl: urlFoto,
                                    name: name,
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
                    name: name
                })
                .then(() => {
                    let data = {
                        ...user,
                        name: name
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
        <div className="containerAll">
            <div className='main-seetings-container'>
                <div className="container-settings">

                    <FiSettings className="icon-settings" size={35} color="#000000" />

                    <form className="form-profile" onSubmit={handleSave}>
                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#FFF" size={25} />
                            </span>

                            <input className="input-file" type="file" accept="image/*" onChange={handleFile} /> <br />
                            {avatarUrl === null ?
                                <img src={avatar} width="150" height="150" alt="user-profile-picture" />
                                :
                                <img src={avatarUrl} width="150" height="150" alt="user-profile-picture" />
                            }<br />

                        </label>


                        <label className="div-informations">
                            Nome
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Edite seu nome...." />
                            Email
                            <input type="email" value={email} disabled={true} />

                            <label>Descrição</label>
                            <textarea maxLength="60" value={description} onChange={(e) => setDescription(e.target.value)} placeholder=" Max. 60 caracteres" />

                            <div className="change-password">
                                <Link to="/dashboard">
                                    <p>Alterar senha</p>
                                </Link>
                            </div>

                            <button type="submit">Salvar</button>
                        </label>

                    </form>
                </div>
            </div>

        </div>

    )

}

export default Profile;

