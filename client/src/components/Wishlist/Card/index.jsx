import { CgShoppingBag } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbArrowsCross } from "react-icons/tb";
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

function Card() {
    const [wishlist, setWishlist] = useState([]);
    const token = localStorage.getItem("userToken");
    const [selectedImage, setSelectedImage] = useState(null);
    const [hoverImage, setHoverImage] = useState(null);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const { data } = await axios.get(`http://localhost:7001/api/wishlist/${token}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (data.success === 1 && Array.isArray(data.data)) {
                    setWishlist(data.data);
                } else {
                    console.error("Invalid wishlist data format:", data);
                }
            } catch (error) {
                console.error("Error fetching wishlist:", error);
            }
        };

        fetchWishlist();
    }, [token]);


    return (
        <div className="w-[95%] m-auto grid lg:grid-cols-4 md:grid-cols-3 xxs:grid-cols-2 grid-cols-1 sm:gap-8 gap-3">
            {wishlist?.map((item, index) => (
                <div className="space-y-2 col-span-1 pb-5" key={index}>
                    <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                        <img
                            src={hoverImage || selectedImage || item.productId.images?.[0]}
                            alt={item.productName || "Product"}
                            className="rounded-md hover:scale-[1.12] transition-all duration-[2s]"
                        />
                        <div className="absolute flex space-x-3 top-14 left-3/4 transition-all duration-1000">
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000">
                                    <MdDeleteOutline className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Remove Wihslist</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex space-x-3 bottom-14 transition-all duration-1000">
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000">
                                    <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Quick Add</span>
                                </div>
                            </div>
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000">
                                    <IoIosHeartEmpty className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Add to Wishlist</span>
                                </div>
                            </div>
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000">
                                    <TbArrowsCross className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Add to Compare</span>
                                </div>
                            </div>
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000">
                                    <MdOutlineRemoveRedEye className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Quick View</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute hidden group-hover:block bottom-0 w-full space-x-3 bg-[#0000004d] z-20 text-center text-white font-semibold py-1 transition-all duration-1000">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <h1 className="hover:text-[red]">{item.productId.name}</h1>
                    <h1 className="font-semibold">${item.productId.variants[0].price}</h1>
                    <div className="flex items-center space-x-3">
                        {item.images?.map((image, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedImage(image)}
                                onMouseEnter={() => setHoverImage(image)}
                                onMouseLeave={() => setHoverImage(null)}
                                className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full"
                            >
                                <p
                                    style={{
                                        backgroundColor: ["#D3D3D3", "#000000", "#FFA500"][idx] || "#D3D3D3",
                                    }}
                                    className="h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"
                                ></p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;