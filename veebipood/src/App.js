// import logo from './logo.svg'; väljakommenteerimine on juhul kui on kahju koodi kustutada
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';

function App() {
  return (
    <div className="App">
      <Link to="avaleht">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" className="pilt" alt="Logo" />
      </Link>

      <Link to="esindused">
        <img src="/esindus.svg" alt="" />
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="arikliendile">
        <img src="/ari.svg" alt="" />
        <span>Ärikliendile</span>
      </Link>

      <Link to="osta-kinkekaart">
        <img src="/kinkekaart.svg" alt="" />
        <button className="nupp">Kinkekaardid</button>
      </Link>

      {/* <p>p</p>
      <h1>P</h1>
      <h2>P2</h2>
      <h3>p3</h3>
      
      1. Self-closing vs algus ja lõputag
      2. Kõikidest failidest ja kaustadest
      3. Kuida React töötab, mis on esimene fail ja kuidas puu hargneb
      4. Pildifailide import
      5. Arvutitarka jäljendama

      Run-time vs compile-time errors
      Kompileerimise (kokkupakkimise) erroreid näen seal kus panin "npm start" ja brauser on üleni punane
      Brauseris käimapanemise erroreid ei näe terminalis, näen lehel valget pilti ja errorit ennast näen:
            parem klõps -> inspect -> console
      
       */}

        {/* localhost:3000/avaleht --> Tere
        localhost:3000/esindused --> Esindused
        localhost:3000/arikliendile --> Ärikliendile
        localhost:3000/osta-kinkekaart --> Kinkekaart
         */}
      <Routes>
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="esindused" element={ <Esindused /> } />
        <Route path="arikliendile" element={ <Ariklient /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
      </Routes>

    </div>
  );
}

export default App;
