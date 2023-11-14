import './App.css';
import GameBoard from './Components/GameBoard/GameBoard';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import Result from './Components/Result/Result';
import Simulation from './Components/SimulationMode/SimulationMode';

function App() {
  return (
    // <div className="app">
    //   <GameBoard></GameBoard>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route exact path = '/' element={<Login></Login>}></Route>
      <Route exact path = '/dueling-dice' element={<Login></Login>}></Route>
      <Route path = '/GameBoard/:blockNumber' element = {<GameBoard></GameBoard>}></Route>
      <Route path= '/Result/:result' element={<Result></Result>}></Route>
      <Route path = '/SimulationMode' element={<Simulation></Simulation>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
