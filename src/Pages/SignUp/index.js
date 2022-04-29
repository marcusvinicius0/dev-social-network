
import './styles.css';



function SignUp() {
    return (
        <div className="main-container">
            <div className="login">
                <div className="bg-h1">
                    <h1>Cadastre sua conta</h1>
                </div>
                <form onSubmit={() => { }}>
                    <input type="text" placeholder="Digite seu nome" />
                    <input className="input-email" type="text" placeholder="email@email.com" />
                    <input type="password" placeholder="Digite sua senha" />
                    <button type="submit">Cadastrar</button>
                </form>

                <div className="functionalities">
                    <a className="access-account" to="/">Já possui uma conta? Entre aqui.</a>
                </div>
            </div>
        </div>

    )
}

export default SignUp;