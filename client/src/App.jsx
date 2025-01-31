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
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditRole from './components/Admin/Role/Edit';
import ViewProduct from './components/Admin/Product/View';
import EditProduct from './components/Admin/Product/Edit';

function App() {

  const [permissions, setPermissions] = useState('');
  const url = import.meta.env.VITE_SERVER_URL

  useEffect(() => {
    const fetchPermission = async () => {
      try {
        const token = sessionStorage.getItem('token');

        const { data } = await axios.get(`${url}/admin/role`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (data?.success === 1) {
          setPermissions(data?.result?.role?.permissions);
        }

      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPermission();
  });

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
          {permissions && (
            <>
              {permissions?.dashboard?.includes('view') && <Route path='' element={<Dashboard />} />}
              {permissions?.users?.includes('view') && <Route path='users' element={<Users />} />}
              {permissions?.products?.includes('view') && <Route path='product' element={<Product />} />}
              {permissions?.products?.includes('view') && <Route path='product/add' element={<AddProduct />} />}
              {permissions?.products?.includes('view') && <Route path='product/edit' element={<EditProduct />} />}
              {permissions?.products?.includes('view') && <Route path='product/view' element={<ViewProduct />} />}
              {permissions?.orders?.includes('view') && <Route path='order' element={<Order />} />}
              {permissions?.role?.includes('view') && <Route path='role' element={<Role />} />}
              {permissions?.role?.includes('view') && <Route path='role/add' element={<AddRole />} />}
              {permissions?.role?.includes('view') && <Route path='role/edit' element={<EditRole />} />}
              {permissions?.inquiry?.includes('view') && <Route path='contact' element={<AdminContact />} />}
              <Route path='profile' element={<Profile />} />
            </>
          )}
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App