import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import menb from './Components/Assets/banner_m.jpg';
import womenb from './Components/Assets/banner_w.jpg';
import kidb from './Components/Assets/banner_k.jpg';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* Navbar Section */}
        <Navbar />

        {/* Main Content */}
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={menb} category="men" />}
            />
            <Route
              path="/womens"
              element={<ShopCategory banner={womenb} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kidb} category="kids" />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="bg-dark text-light py-3">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
