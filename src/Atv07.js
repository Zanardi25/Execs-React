import { Link } from "react-router-dom";
import './calculadora.css';
import Rep from "./Components/repositorio";

export default function Atv07(){
    return (
        <>
          <h2> repositorio</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          
          <Rep/>
        </>
    );
}