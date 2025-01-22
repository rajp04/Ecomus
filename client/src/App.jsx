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
import Admin from './components/Admin';
import Dashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Product from './components/Admin/Product';
import AdminContact from './components/Admin/Contact';
import AddProduct from './components/Admin/Product/Add';
import Profile from './components/Admin/Profile';
import Order from './components/Admin/Order';
import Role from './components/Admin/Role';
import AddRole from './components/Admin/Role/Add';

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
        <Route path='/admin/' element={<Admin />}>
          <Route path='' element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='product' element={<Product />} />
          <Route path='product/add' element={<AddProduct />} />
          <Route path='profile' element={<Profile />} />
          <Route path='order' element={<Order />} />
          <Route path='role' element={<Role />} />
          <Route path='role/add' element={<AddRole />} />
          <Route path='contact' element={<AdminContact />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App