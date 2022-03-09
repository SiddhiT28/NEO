import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
