import Header from '../Header'
import Footer from '../Footer'
import Testimonial from '../Home/Testimonial'
import Seller from '../Home/Seller'
import { useEffect, useState } from 'react';
import { GrSubtract } from 'react-icons/gr';
import { FaPlus } from 'react-icons/fa6';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { Button } from '@mui/material';
import axios from 'axios';

function Cart() {

  const [visible, setVisible] = useState(true);
  const [cart, setCart] = useState();
  const [time, setTime] = useState(10 * 60);
  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m:${secs < 10 ? '0' : ''}${secs}s`;
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (token) {
        try {
          const { data } = await axios.get(`http://localhost:7001/api/cart/${token}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (data?.success === 1) {
            setCart(data?.result);
          } else {
            console.log(data?.message);
          }
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      } else {
        const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCart(cartData);
      }
    };
    fetchCart();
  }, [token]);

  const updateCartInLocalStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const handleSub = async (item) => {
    if (item?.qty > 1) {
      const newQty = item.qty - 1;
      updateItemQuantity(item._id, newQty);
    }
  };

  const handlePlus = async (item) => {
    const newQty = item.qty + 1;
    updateItemQuantity(item._id, newQty);
  };

  const updateItemQuantity = async (id, newQty) => {
    if (token) {
      try {
        const { data } = await axios.put(
          `http://localhost:7001/api/cart/update/${id}`,
          { qty: newQty },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (data?.success === 1) {
          setCart((prevCart) =>
            prevCart.map((item) => (item._id === id ? { ...item, qty: newQty } : item))
          );
        }
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    } else {
      const updatedCart = cart?.map((item) => (item._id === id ? { ...item, qty: newQty } : item));
      updateCartInLocalStorage(updatedCart);
    }
  };

  const handleRemove = async (item) => {
    try {
      if (token) {
        const { data } = await axios.delete(`http://localhost:7001/api/cart/delete/${item._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (data?.success === 1) {
          setCart((prevCart) => prevCart.filter((cartItem) => cartItem._id !== item._id));
        } else {
          console.log(data?.message);
        }
      } else {
        const updatedCart = cart.filter((cartItem) => cartItem._id !== item._id);
        setCart(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };


  return (
    <>
      <Header />
      <div className="pt-5">
        <div className="flex items-center justify-center py-24" style={{
          backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/file/page-title-blog.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} >
          <h1 className="sm:text-5xl text-4xl">Shopping Cart</h1>
        </div>
      </div>
      <div className='w-[95%] m-auto'>
        <div className='flex items-center justify-center space-x-3 py-5'>
          <h1 className={`text-2xl ${visible ? '' : "pe-[33px]"}`}>
            {visible ? "🔥" : ""}
          </h1>
          <h1 className='text-2xl font-medium'>These products are limited, checkout within</h1>
          <h1 className="bg-red-600 rounded-full text-white px-6 py-1 text-2xl font-medium">
            {formatTime(time)}
          </h1>
        </div>

        <div className='grid grid-cols-11 gap-10 pt-7'>
          <table className='col-span-7 h-fit'>
            <tr className='border-b pb-2 font-semibold text-lg w-full'>
              <th className='border-none'>Product</th>
              <th className='border-none'>Price</th>
              <th className='border-none'>Quantity</th>
              <th className='border-none'>Total</th>
            </tr>
            {cart?.map((item, index) => (
              <tr className='w-full border-b' key={index}>
                <td className='border-none flex space-x-2'>
                  <img src={item?.images?.[0] || item?.productId.images?.[0]} alt="" className='h-28' />
                  <div className='space-y-2'>
                    <h1 className='hover:text-red-500'>{item.name || item.productId.name}</h1>
                    <h1 className='text-gray-500 text-sm'><span>{item?.variants?.[0].color || item?.productId.variants?.[0].color}</span>/ <span>{item?.variants?.[0].size || item?.productId.variants?.[0].size}</span></h1>
                    <h1 className='underline cursor-pointer text-gray-900 w-fit' onClick={() => handleRemove(item)}>Remove</h1>
                  </div>
                </td>
                <td className='border-none'>&#8377;{item?.variants?.[0].price - item?.variants?.[0].discount || item?.productId.variants?.[0].price - item?.productId.variants?.[0].discount}</td>
                <td className='border-none'>
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-300 flex items-center py-1 mt-1 w-fit space-x-5 px-3 rounded-md">
                      <GrSubtract className="cursor-pointer" onClick={() => handleSub(item)} />
                      <h1>{item.qty}</h1>
                      <FaPlus className="cursor-pointer" onClick={() => handlePlus(item)} />
                    </div>
                  </div>
                </td>
                <td className='border-none'>&#8377;{(item?.variants?.[0].price - item?.variants?.[0].discount) * item.qty || (item?.productId.variants?.[0].price - item?.productId.variants?.[0].discount) * item.qty}</td>
              </tr>
            ))}
          </table>
          <div className='col-span-4 space-y-5'>
            <div className="border border-dashed px-8 w-auto z-10 bg-white">
              <div className="flex items-center relative pt-8 bg-white">
                <h1 className="h-[6px] rounded-md w-[50%] bg-[red]"></h1>
                <h1 className="h-[6px] rounded-md w-[50%] bg-gray-300"></h1>
                <div className="absolute flex items-center justify-center w-full ">
                  <div className="py-[2px] bg-white text-[red] px-[10px] border border-[red] rounded-md">
                    <MdOutlineLocalShipping className="text-[22px] " />
                  </div>
                </div>
              </div>
              <h1 className="py-5 bg-white">Buy <span className="font-medium">&#8377;499</span> more to enjoy <span className="font-medium">Free Shipping</span></h1>
            </div>
            <div className='bg-gray-200 p-5 space-y-3'>
              <div className="flex items-center justify-between pb-3">
                <h1 className="text-xl">Subtotal</h1>
                {cart &&
                  <h1 className="text-2xl font-semibold">₹
                    {cart.reduce((acc, item) =>
                      acc + ((item.variants?.[0].price - item.variants?.[0].discount) * item.qty),
                      0) || cart.reduce((acc, item) =>
                        acc + ((item.productId.variants[0].price - item.productId.variants[0].discount) * item.qty),
                        0)}
                  </h1>
                }
              </div>
              <h1>Taxes and <span className='underline'>shipping</span> calculated at checkout</h1>
              <div className='flex items-center space-x-2'>
                <input type="checkbox" name="" id="" />
                <h1>I agree with the <span className='underline font-medium text-black'>terms and conditions</span></h1>
              </div>
              <Button className="check-btn w-full">Check out</Button>
              <h1 className='pt-5 font-medium text-center'>Guarantee Safe Checkout</h1>
              <div className="flex items-center justify-center pb-5 sm:space-x-3 space-x-1">
                <img src="https://themesflat.co/html/ecomus/images/payments/visa.png" alt="visa" />
                <img src="https://themesflat.co/html/ecomus/images/payments/img-1.png" alt="paypel" />
                <img src="https://themesflat.co/html/ecomus/images/payments/img-2.png" alt="mastercard" />
                <img src="https://themesflat.co/html/ecomus/images/payments/img-3.png" alt="amex" />
                <img src="https://themesflat.co/html/ecomus/images/payments/img-4.png" alt="amex" />
              </div>
            </div>
          </div>
        </div>
      </div >
      <Testimonial />
      <Seller />
      <Footer />
    </ >
  )
}

export default Cart