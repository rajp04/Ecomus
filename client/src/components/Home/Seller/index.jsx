import { CgShoppingBag } from "react-icons/cg"
import { IoIosHeartEmpty } from "react-icons/io";
import { TbArrowsCross } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Seller() {

    const [productData, setProductData] = useState()
    const url = import.meta.env.VITE_SERVER_URL
    const token = localStorage.getItem('userToken');
    const navigate = useNavigate();

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
    })

    const topSoldProducts = productData
        ?.filter(item => item?.totalSold)
        .sort((a, b) => b.totalSold - a.totalSold)
        .slice(0, 12);
console.log(topSoldProducts);

    const handleWishlist = async (id) => {
        try {
            const { data } = await axios.post(
                `${url}/wishlist/create`,
                { productId: id, userId: token },
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
    };

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
        <div className="w-[95%] m-auto pt-10 pb-20">
            <h1 className="text-center text-5xl pb-5">Best Seller</h1>
            <p className="text-center">Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
            <div className="pt-16 grid lg:grid-cols-4 md:grid-cols-3 xxs:grid-cols-2 grid-cols-1 sm:gap-8 gap-3">
                {topSoldProducts && topSoldProducts?.map((item, index) => (
                    <div className=" space-y-2 col-span-1 pb-5" key={index}>
                        <div className="flex flex-col xs:space-x-5 space-x-3">
                            <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                                <img
                                    src={item?.images?.[0]}
                                    alt={item.name || "Product"}
                                    className="rounded-md hover:scale-[1.12] transition-all duration-[2s]"
                                />
                                <div className="absolute flex space-x-3 bottom-14 transition-all duration-1000">
                                    <div className="tooltip">
                                        <div className="hidden group-hover:block transition-all duration-1000" onClick={() => handleAddToCart(item)}>
                                            <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                            <span className="tooltiptext">Quick Add</span>
                                        </div>
                                    </div>
                                    {token &&
                                        <div className="tooltip">
                                            <div className="hidden group-hover:block transition-all duration-1000" onClick={() => handleWishlist(item._id)}>
                                                <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                                <span className="tooltiptext">Add to Wishlist</span>
                                            </div>
                                        </div>
                                    }
                                    <div className="tooltip">
                                        <div className="hidden group-hover:block transition-all duration-1000">
                                            <TbArrowsCross className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                            <span className="tooltiptext">Add to Compare</span>
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <div className="hidden group-hover:block transition-all duration-1000" onClick={() => navigate(`${item?.productId?._id}`)}>
                                            <MdOutlineRemoveRedEye className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                            <span className="tooltiptext">Quick View</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute hidden group-hover:block bottom-0 w-full space-x-3 bg-[#0000004d] z-20 text-center text-white font-semibold py-1 transition-all duration-1000">
                                    <span>{item.variants[0].size}</span>
                                </div>
                            </div>
                            <div className="xs:space-y-3 space-y-1">
                                <h1 className={`hover:text-[red] `}>{item?.name.length > 35 ? `${item?.name.slice(0, 35)}...` : item?.name}</h1>
                                <h1 className="font-semibold">₹ {item?.variants[0].price}</h1>
                                <div className="flex items-center space-x-3">
                                    {item.variants.map((variant, index) => (
                                        <div
                                            key={index}
                                            className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full"
                                        >
                                            <p
                                                className={`h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full`}
                                                style={{ backgroundColor: variant.color }}
                                            ></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center pt-5">
                <button className="border text-lg font-semibold border-black px-10 py-3 rounded-lg">Load more</button>
            </div>
        </div>
    )
}

export default Seller