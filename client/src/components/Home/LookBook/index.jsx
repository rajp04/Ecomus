import { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function LookBook() {
    const [openMenu, setOpenMenu] = useState(null);
    const [productData, setProductData] = useState([]);
    const url = import.meta.env.VITE_SERVER_URL;

    const navigate = useNavigate()

    const handleOpen = (menuIndex) => {
        setOpenMenu(openMenu === menuIndex ? null : menuIndex);
    };

    const sliderSettings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`${url}/product/users`);

                if (data?.success === 1 && Array.isArray(data?.data)) {
                    setProductData(data?.data);
                } else {
                    setProductData([]);
                }
            } catch (error) {
                console.log(error);
                setProductData([]);
            }
        };
        fetchProduct();
    }, [url]);

    const topSoldProducts = productData
        ?.filter((item) => item?.totalSold)
        .sort((a, b) => b.totalSold - a.totalSold)
        .slice(0, 2);

    return (
        <div className="pb-10">
            <div className="text-center">
                <h1 className="text-4xl pb-4">Shop the look</h1>
                <p>Inspire and let yourself be inspired, from one unique fashion to another.</p>
            </div>

            <Slider {...sliderSettings} className="flex items-center pt-16">
                {topSoldProducts?.map((product, index) => (
                    <div className="relative" key={index}>
                        <img
                            src={product?.images?.[0]}
                            alt={`Product ${index + 1}`}
                            className="w-full h-screen"
                        />
                        <div
                            className="absolute hover:animate-ping bg-white rounded-full h-8 w-8 cursor-pointer flex items-center justify-center"
                            style={{ top: "50%", left: "50%" }}
                            onClick={() => handleOpen(`${index}`)}
                        >
                            <p className="bg-black rounded-full h-2 w-2 fixed"></p>
                        </div>

                        {/* Menu */}
                        <div
                            className={`${openMenu === `${index}` ? "flex" : "hidden"
                                } absolute px-3 py-2 space-x-3 bg-white items-center justify-center`}
                            style={{ top: "calc(50% + 6%)", left: "calc(50% - 18%)" }}
                        >
                            <img src={product?.images?.[0]} alt={product?.name} className="h-24" />
                            <div>
                                <h1 className="w-40">{product?.name}</h1>
                                <p className="font-semibold">
                                    ₹{product?.variants?.[0].price - product?.variants?.[0].discount}
                                </p>
                            </div>
                            <MdOutlineRemoveRedEye className="cursor-pointer hover:bg-black bg-gray-100 hover:text-white rounded-full p-[7px] text-4xl transition-all duration-700" onClick={() => navigate(`shop-default/${product._id}`)} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default LookBook;