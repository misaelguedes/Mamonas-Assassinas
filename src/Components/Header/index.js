import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import './Header.css'

import capa from '../../Assets/capa.png'

export default function Header() {

    const [itensVisible, setItensVisible] = useState(false)

    useEffect(() => {
        function mudouTamanho() {
            setItensVisible(window.innerWidth >= 768)
        }

        window.addEventListener('resize', mudouTamanho);

        mudouTamanho();

        return () => {
            window.removeEventListener('resize', mudouTamanho);
          };
    }, [])
    
    function clickMenu() {
        setItensVisible(!itensVisible)
    }

    function hideMenu() {
        if (window.innerWidth <= 768) {
            setItensVisible(false)
        }
    }

    return (
        <header>
            <img src={capa} alt="Mamonas Assassinas"/>
            <div className="itens">
                <span id="burguer" class="material-symbols-outlined" onClick={clickMenu}>menu</span>
                <menu className="menu" style={{ display: itensVisible ? 'block' : 'none' }}>
                    <Link to='/' onClick={hideMenu}>Home</Link>
                    <Link to='/historia' onClick={hideMenu}>História</Link>
                    <Link to='/discografia' onClick={hideMenu}>Discografia</Link>
                    <Link to='/premios' onClick={hideMenu}>Prêmios</Link>
                </menu>
            </div>
        </header>
    )
}