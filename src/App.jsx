import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemons from './components/Pokemons'
import { BrowserRouter, HashRouter, Link, Route, Router, Routes } from "react-router-dom";
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';

function App() {

  return (
    <div style={{width:"100vw"}}  className="d-flex flex-column justify-content-center align-items-center">
      <div style={{ textAlign: "center", width:"600px"}} id="mainContainer">
        <Header />
        <Routes>
          <Route path="/:id" element={<PokemonCard />} />
          <Route exact path="/" element={<Pokemons />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
