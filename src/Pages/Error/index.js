import './error.css';

import {Link} from 'react-router-dom';

function Error(){
    return(
        <div className='erro'>
            <h1>Ops, página não encontrada... :/</h1>
            <Link className='returning' to="/">Voltar</Link>
        </div>
    )
}

export default Error;