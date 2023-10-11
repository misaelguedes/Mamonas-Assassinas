import './Erro.css'

import error from '../../Assets/error.png'

export default function Erro() {
    return (
        <div className="erro">
            <h1>404</h1>
            <strong>Página não encontrada!</strong>
            <img src={error} alt='Página não encontrada!'/>
        </div>
    )
}