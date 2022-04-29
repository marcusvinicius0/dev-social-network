import './style.css';

import { Link } from 'react-router-dom';


function SignIn() {
    return (
        <main>
            <div className="main-container">
                <div className="login">
                    <div>
                        <h1>Entrar</h1>
                    </div>
                    <form onSubmit={() => { }}>
                        <input className="input-email" type="text" placeholder="email@email.com" />
                        <input type="password" placeholder="*******" />
                        <button type="submit">Acessar</button>
                    </form>

                    <div className="functionalities">
                        <Link to="/register" className="create-account">Criar uma conta</Link>
                        <p className="forgot-password">Esqueceu a senha?</p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default SignIn;