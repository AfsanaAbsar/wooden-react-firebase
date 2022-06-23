
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';
import LogIn from './pages/User/LogIn/LogIn';
import Register from './pages/User/Register/Register';
import RequireAuth from './pages/User/RequireAuth/RequireAuth';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CheckOut from './CheckOut/CheckOut';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<RequireAuth><CheckOut></CheckOut></RequireAuth>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </>
  );
}

export default App;
