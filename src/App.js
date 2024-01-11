import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Screeens/Home/Home';
import { useContext } from 'react';
import {Context} from './Context/Context'
import Home from './Screens/Home/Home';
import Login from './Screens/Login/Login';
import Registrar from './Screens/Registrar/Registrar';
import Cliente from './Screens/Cliente/Cliente';
import SingleClient from './Screens/SingleClient/SingleClient';
import Equipamento from './Screens/Equipamento/Equipamento';
import SingleEqui from './Screens/SingleEqui/SingleEqui';


function App() {
  const {user} = useContext(Context);

  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Cliente />} exact />
            <Route path="/equipamento" element={<Equipamento />} exact />
            <Route path="/equipamento/:id" element={<SingleEqui />} exact />
            <Route path="/clientes" element={<Cliente />} exact />
            <Route path="/cliente/:id" element={<SingleClient />} exact />
            <Route path="/login" element={user ? <Login /> : <Login />} exact />
            <Route path="/registrar" element={user ? <Registrar /> : <Registrar />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;