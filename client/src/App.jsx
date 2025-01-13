import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Wishlist from './components/Wishlist';
import ShopDefault from './components/ShopDefault';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/shop-default' element={<ShopDefault />} />
        <Route path='/product-details' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App