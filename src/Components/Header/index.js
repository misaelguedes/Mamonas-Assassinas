import { Link } from "react-router-dom"

import './Header.css'

import capa from '../../Assets/capa.png'

export default function Header() {
    return (
        <header>
            <img src={capa} alt="Mamonas Assassinas"/>
            <div className="itens">
                <Link to='/'>Home</Link>
                <Link to='/historia'>História</Link>
                <Link to='/discografia'>Discografia</Link>
                <Link to='/premios'>Prêmios</Link>
            </div>
        </header>
    )
}