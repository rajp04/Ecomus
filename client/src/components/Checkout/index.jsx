import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function Checkout() {
    const [cart, setCart] = useState();
    const [addressData, setAddressData] = useState();
    const [id, setId] = useState();

    const [userData, setUserData] = useState({
        name: '',
        country: '',
        city: '',
        address: '',
        mobile: '',
        email: '',
    });

    const [totalPrice, setTotalPrice] = useState(0);
    const token = localStorage.getItem('userToken');
    const url = import.meta.env.VITE_SERVER_URL;

    useEffect(() => {
        const fetchCart = async () => {
            if (token) {
                try {
                    const { data } = await axios.get(`${url}/cart/${token}`, {
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
    }, [token, url]);

    useEffect(() => {
        const total = cart?.reduce((acc, item) =>
            acc + ((item.productId.variants?.[0].price - item.productId.variants?.[0].discount) * item.qty),
            0
        );
        setTotalPrice(total);
    }, [cart]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleOrder = async () => {
        try {
            const { data } = await axios.post(`${url}/address/create`, userData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (data?.success === 1 || id) {
                const orderPromises = cart.map(async (item) => {
                    if (!item.productId || !item.productId._id) {
                        throw new Error("Product data is incomplete.");
                    }

                    const orderData = {
                        productId: item.productId._id,
                        quantity: item.qty,
                        priceAtOrder: item.productId.variants?.[0].price,
                        color: item.productId.variants?.[0].color,
                        size: item.productId.variants?.[0].size?.[0],
                        discount: item.productId.variants?.[0].discount,
                        address: data?.result?._id || id,
                    };

                    const { data: orderDataResponse } = await axios.post(`${url}/order/create`, orderData, {
                        headers: { Authorization: `Bearer ${token}` },
                    });


                    if (orderDataResponse?.success !== 1) {
                        throw new Error("Order creation failed.");
                    }

                    return orderDataResponse.order;
                });

                const createdOrders = await Promise.all(orderPromises);
                console.log("Created Orders:", createdOrders);

                const cartDelete = await axios.delete(`${url}/cart/delete/all/${token}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log(cartDelete);
                setUserData({
                    name: '',
                    country: '',
                    city: '',
                    address: '',
                    mobile: '',
                    email: '',
                });

            } else {
                throw new Error("Failed to save address.");
            }
        } catch (error) {
            console.error('Error placing order:', error.message);
        }
    };

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const { data } = await axios.get(`${url}/address/${token}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (data?.success === 1) {
                    setAddressData(data?.result);
                } else {
                    console.log(data?.message);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAddress();
    });

    return (
        <>
            <Header />
            <div className="pt-5">
                <div className="flex items-center justify-center py-24" style={{
                    backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/file/page-title-blog.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                    <h1 className="sm:text-5xl text-4xl">Check Out</h1>
                </div>
            </div>

            <div className="grid llg:grid-cols-12 xl:gap-10 gap-7 w-[95%] m-auto py-16">
                <div className="col-span-8 space-y-5">
                    <h1 className="text-3xl font-semibold">Billing details</h1>
                    <div className="flex flex-col space-y-3">
                        <label className="font-medium">Name<span className="text-[red]">*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full"
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label className="font-medium">Country/Region<span className="text-[red]">*</span></label>
                        <input
                            type="text"
                            name="country"
                            value={userData.country}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full"
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label className="font-medium">Town/City<span className="text-[red]">*</span></label>
                        <input
                            type="text"
                            name="city"
                            value={userData.city}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full"
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label className="font-medium">Address<span className="text-[red]">*</span></label>
                        <input
                            type="text"
                            name="address"
                            value={userData.address}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full"
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label className="font-medium">Phone Number<span className="text-[red]">*</span></label>
                        <input
                            type="text"
                            name="mobile"
                            value={userData.mobile}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full"
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label className="font-medium">Email<span className="text-[red]">*</span></label>
                        <input
                            type="text"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-10 justify-between text-center pt-10 ">
                        {addressData?.map((item, index) => (
                            <div key={index}>
                                <div className="w-[80%] m-auto">
                                    <p>{item?.name}</p>
                                    <p>{item?.address} {item?.city}</p>
                                    <p>{item?.email}</p>
                                    <p>{item?.mobile}</p>
                                    <div className="space-x-3 pt-3 flex items-center justify-center">
                                        <Button className="add_btn" onClick={() => setId(item._id)}>Select Address</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="llg:col-span-4 col-span-8">
                    <h1 className="text-3xl font-semibold sm:pb-0 pb-5">Your order</h1>
                    <div className="sm:p-6 space-y-5">
                        {cart?.map((item, index) => (
                            <div className="flex items-center justify-between gap-5" key={index}>
                                <div className="flex items-center space-x-3 relative">
                                    <img src={item.productId.images?.[0]} alt="" className="h-20 border" />
                                    <h1 className="absolute bg-gray-500 text-white rounded-full px-2 -top-3 left-8">{item.qty}</h1>
                                    <div>
                                        <h1>{item?.productId?.name}</h1>
                                        <p className="opacity-60">{item.productId.variants?.[0].color} / {String(item.productId?.variants?.[0]?.size || "").split(" ").map(word => word.charAt(0)).join("")}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-gray-800">&#8377;{item.productId.variants?.[0].price - item.productId.variants[0].discount}</h1>
                                </div>
                            </div>
                        ))}
                        <div className="text-2xl font-semibold flex justify-between">
                            <h1>Total</h1>
                            <h1>₹{totalPrice || 0}</h1>
                        </div>
                        <button className="text-center w-full bg-black text-white rounded-md py-3" onClick={handleOrder}>
                            Place order
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Checkout;