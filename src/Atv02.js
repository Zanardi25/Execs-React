import Calculadora from "./Components/calculadora";
import { Link } from "react-router-dom";

export default function Atv01(){
    return (
        <>
          <h2> Atividade 01</h2>
          <Link className="voltar" to="/"> Voltar</Link>
          <Calculadora/>
        </>
    );
}
