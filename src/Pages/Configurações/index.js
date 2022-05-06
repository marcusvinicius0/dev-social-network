import { useState, useContext } from 'react';
import './settings.css';
import Sidebar from '../../Components/Sidebar';
import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import { FiSettings, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';

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

        // console.log(e.target.files[0])
    }

    async function handleUpload() {
        const currentUid = user.uid;

        const uploadTask = await firebase.storage()
        .ref(`images/${currentUid}/${imageAvatar.name}`)
        .put(imageAvatar)
        .then( async ()=>{
            toast.success('Foto enviada com sucesso!')

            await firebase.storage().ref(`images/${currentUid}`)
            .child(imageAvatar.name).getDownloadURL()
            .then( async (url)=>{
                let urlFoto = url;

                await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    avatarUrl: urlFoto,
                    name: name,
                })
                .then(()=>{
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
        <div>
            <Sidebar />

            <div className="container">
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

                    <label className="label-informations">Nome</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Edite seu nome...." />

                    <label className='label-informations'>Email</label>
                    <input type="email" value={email} disabled={true} />

                    <label className="label-informations">Descrição</label>
                    <input type="text" value={description} onChange={ (e) => setDescription(e.target.value)} />

                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>

    )

}

export default Profile;

