import Calculadora from "./Components/calculadora";
import { Link } from "react-router-dom";
import './calculdora.css';

export default function Atv06(){
    return (
        <>
          <h2> Atividade 06</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          
          <Calculadora/>
        </>
    );
}
