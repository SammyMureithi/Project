import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Order from './Pages/Order';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order/>} />
      </Routes>
    </div>
  );
}

export default App;
