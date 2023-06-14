import Relogio from "./Components/Relogio";
import Letreiro from "./Components/Letreiro";
import ContadorPessoas from "./Components/ContadorPessoas";
import Profile from "./Components/Profile";
import Gallery from "./Components/Gallery";
import ToDoList from "./Components/ToDoList";
import AProfile from "./Components/Avatar";
import PackingList from "./Components/PackingList";
import List from "./Components/ListComponent";
import TeaGathering from "./Components/TeaGathering";

function App() {
  return (
    <div>
      <h2> Aula 01</h2>
        <Relogio />
        <div className="letreiro"  style={{height: "50px"}}> 
        <Letreiro />
        </div>
      <h2> Aula 02</h2>
        <ContadorPessoas />
      <h2>Aula 03 e 04</h2>
        <Profile />
      <h2>Aula 03 e 04</h2>
        <Gallery />
      <h2>Aula 03 e 04</h2>
        <ToDoList />
      <h2>Aula 03 e 04</h2>
        <AProfile />
      <h2>Aula 03 e 04</h2>
        <PackingList />
      <h2>Aula 03 e 04</h2>
        <List />
      <h2>Aula 03 e 04</h2>
        <TeaGathering />
          </div>
  );
}

export default App;
