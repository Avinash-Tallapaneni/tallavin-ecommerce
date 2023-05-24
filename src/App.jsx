import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopContextProvider } from './context/shopcontext';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App" >
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
