import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainProduct from './components/MainProduct';
import Partners from './components/Partners';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';

import Account from './pages/Account';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Orders from './pages/Orders';

import Beverage from './pages/Products/Beverage';
import Craft from './pages/Products/Craft';
import Fashion from './pages/Products/Fashion';
import Food from './pages/Products/Food';

function App() {
  return (
    
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<MainProduct />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/products/beverage" element={<Beverage />} />
            <Route path="/products/craft" element={<Craft />} />
            <Route path="/products/fashion" element={<Fashion />} />
            <Route path="/products/food" element={<Food />} />
            
            <Route path="/partners" element={<Partners />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />

            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;