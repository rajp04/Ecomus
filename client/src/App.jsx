import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Wishlist from './components/Wishlist';
import ShopDefault from './components/ShopDefault';
import ProductDetails from './components/ProductDetails';
import Account from './components/Account';
import Error from './components/Error';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import AdminLogin from './components/Admin/Login';

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
        <Route path='/account' element={<Account />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App