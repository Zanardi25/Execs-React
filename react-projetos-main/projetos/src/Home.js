
import React from 'react';
import {Link} from 'react-router-dom';

import './css/home/home.css';

export default function Home () {
    return (
        <div className="container-main">
        <nav>
                <ul>
                    <li>
                        <Link to='/atividade01'>Atividade 01</Link>
                    </li>
                    <li>
                        <Link to='/atividade02'>Atividade 02</Link>
                    </li>
                    <li>
                        <Link to='/atividade03'>Atividade 03</Link>
                    </li>
                    <li>
                        <Link to='/atividade04'>Atividade 04</Link>
                    </li>
                    <li>
                        <Link to='/atividade05'>Atividade 05</Link>
                    </li>
                    <li>
                        <Link to='/calculadora'>Calculadora</Link>
                    </li>
                    <li>
                        <Link to='/game'>Jogo da memória</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}