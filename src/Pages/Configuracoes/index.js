import './style.css';

import { FiSettings } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';


function Settings() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPassword1, setNewPassword1] = useState('');
    const { user, setUser, storageUser } = useContext(AuthContext);

    async function handleUpdate(e){
        e.preventDefault()
        if(newPassword !== newPassword1){
            toast.error("Algo deu errado")
            setNewPassword('')
            setNewPassword1('')
            return
        } else if(currentPassword !== user.password){
            toast.error("Algo deu errado")
            setNewPassword('')
            setNewPassword1('')
            return
        } else {
            await firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
                password: newPassword
            })
            .then(() =>{
               let data = {
                   ...user,
                   password: newPassword
               }
               setUser(data);
               storageUser(data)
               setCurrentPassword('')
               setNewPassword('')
               setNewPassword1('')
            });
            toast.success("Senha alterada com sucesso.")
        }

    }

    return (
        <div className="containerAll">
            <div className="container-settings">
                <FiSettings className="icon-settings-config" size={30} color="#000" />
                <form onSubmit={handleUpdate} className="form-settings">
                    <p>Alterar minha senha</p>
                    <FaLock className="icons" size={20} color="#000" />
                    <input type="password" placeholder="Digite sua senha atual" required value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />

                    <FaLock className="icons" size={20} color="#000" />
                    <input type="password" placeholder="Digite sua nova senha" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

                    <FaLock className="icons" size={20} color="#000" />
                    <input type="password" placeholder="Digite a senha novamente" required value={newPassword1} onChange={(e) => setNewPassword1(e.target.value)} />

                    <button type="submit">Salvar alterações</button>
                </form>
            </div>

        </div>
    )
}


export default Settings;