import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rest from './components/Rest'
import Home from './components/Home'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Bouquet from "./components/Bouquet";
import Vase from "./components/Vase";
import Plant from "./components/Plant";
import Notfound from "./components/Notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/test' element={< Rest />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/signup' element={< Signup />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/login' element={< Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/bouquet' element={< Bouquet />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/plant' element={< Plant />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/vase' element={< Vase />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/pagenotfound' element={< Notfound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
