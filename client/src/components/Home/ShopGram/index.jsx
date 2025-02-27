import { MdOutlineShoppingBasket, MdOutlinePayment } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { useEffect, useState } from "react";
import axios from 'axios'

function ShopGram() {

  const [productData, setProductData] = useState()
  const url = import.meta.env.VITE_SERVER_URL
  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${url}/product/users`);

        if (data?.success === 1) {
          setProductData(data?.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [url])

  const handleAddToCart = async (item) => {
    if (token) {
      try {
        const { data } = await axios.post(
          `${url}/cart/create`,
          { productId: item._id, userId: token },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (data?.success === 1) {
          console.log(data?.message);
        } else {
          console.error('Error:', data?.message || 'Something went wrong');
        }

      } catch (error) {
        console.error('Request failed:', error.response?.data?.message || error.message || error);
      }
    } else {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      if (!Array.isArray(cartItems)) {
        localStorage.setItem("cartItems", JSON.stringify([]));
      }

      const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        cartItems.push({ ...item, qty: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

    }
  }


  return (
    <div className="pt-10 pb-16 w-[95%] m-auto">
      <h1 className="text-5xl text-center">Shop Gram</h1>
      <p className="text-center pt-5">Inspire and let yourself be inspired, from one unique fashion to another.</p>
      <div className="pt-12 pb-16">
        <div className="flex overflow-x-auto gap-5 scrollbar-hidden">
          {productData?.map((item, index) => (
            <div className="flex-shrink-0 w-[280px] h-[280px] overflow-hidden rounded-md hover:scale-[1.1] transition-all duration-1000" key={index}>
              <div
                className="w-full h-full bg-cover bg-center rounded-md"
                style={{
                  backgroundImage: `url(${item.images?.[0]})`,
                }}
              >
                <div className="hover:bg-[#0000001a] transition-all duration-1000 rounded-md h-full w-full group inline-flex items-center justify-center">
                  <div className="tooltip">
                    <div className="hidden group-hover:block transition-all duration-1000">
                      <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-full p-[8px] text-3xl transition-all duration-700" onClick={() => handleAddToCart(item)} />
                      <span className="tooltiptext">Quick Add</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-3 sm:gap-8 gap-3">
        <div className="col-span-1 border flex items-center justify-center flex-col py-7 rounded-md space-y-2">
          <MdOutlineShoppingBasket className="text-3xl" />
          <h1 className="font-semibold text-2xl pt-5">Free Shipping</h1>
          <p>Free shipping over order $120</p>
        </div>
        <div className="col-span-1 border flex items-center justify-center flex-col py-7 rounded-md space-y-2">
          <MdOutlinePayment className="text-3xl" />
          <h1 className="font-semibold text-2xl pt-5">Flexible Payment</h1>
          <p>Pay with Multiple Credit Cards</p>
        </div>
        <div className="col-span-1 border flex items-center justify-center flex-col py-7 rounded-md space-y-2">
          <IoMdReturnLeft className="text-3xl" />
          <h1 className="font-semibold text-2xl pt-5">14 Day Returns</h1>
          <p>Within 30 days for an exchange</p>
        </div>
        <div className="col-span-1 border flex items-center justify-center flex-col py-7 rounded-md space-y-2">
          <BiSupport className="text-3xl" />
          <h1 className="font-semibold text-2xl pt-5">Premium Support</h1>
          <p>Outstanding premium support</p>
        </div>
      </div>
    </div>
  )
}

export default ShopGram