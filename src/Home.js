import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importando o arquivo CSS

const Home = () => {
  return (
    <div className="container">
      <h2> Exercicios React </h2>
      <nav>
        <ul>
          <li>
            <Link to="/Atv01">Atividade 01</Link>
          </li>
          <li>
            <Link to="/Atv03">Atividade 03</Link>
          </li>
          <li>
            <Link to="/Atv04">Atividade 04</Link>
          </li>
          <li>
            <Link to="/Atv05">Atividade 05</Link>
          </li>
        <li>
          <Link to="/Atv06">Atividade 06</Link>
          </li>
        <li>
          <Link to="/Atv07">Repositorio</Link>
        </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
