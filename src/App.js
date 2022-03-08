import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
