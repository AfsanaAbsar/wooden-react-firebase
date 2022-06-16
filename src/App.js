
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';
import LogIn from './pages/User/LogIn/LogIn';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
