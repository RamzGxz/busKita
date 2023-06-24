import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoginPages from './Pages/LoginPages';
import Register from './Pages/Register';
import Home from './Pages/Home';
import JamOperasional from './Pages/JamOperasional';
import Rute from './Pages/Rute';
import Bantuan from './Pages/Bantuan';
import Peta from './Pages/Peta';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);
  const [users, setUsers] = useState([]);
  const location = useLocation();

  return (
    <div className="app">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<LoginPages setUsers={setUsers} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home clicked={clicked} setClicked={setClicked} users={users} setUsers={setUsers} />} />
            <Route path="/jamoperasional" element={<JamOperasional clicked={clicked} setClicked={setClicked} users={users} />} />
            <Route path="/rute/:nama" element={<Rute clicked={clicked} setClicked={setClicked} users={users} />} />
            <Route path="/bantuan" element={<Bantuan clicked={clicked} setClicked={setClicked} users={users} />} />
            <Route path="/peta" element={<Peta clicked={clicked} setClicked={setClicked} users={users} />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
