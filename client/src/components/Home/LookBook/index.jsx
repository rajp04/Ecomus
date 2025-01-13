import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LookBook() {
    const [openMenu, setOpenMenu] = useState(null); 

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

    const images = [
        {
            src: "https://themesflat.co/html/ecomus/images/shop/file/lookbook-4.jpg",
            dots: [
                {
                    top: "50%",
                    left: "50%",
                    menu: {
                        image: "https://themesflat.co/html/ecomus/images/shop/products/img-p4.png",
                        title: "Ribbed modal T-shirt",
                        price: "$20.00",
                    },
                },
            ],
        },
        {
            src: "https://themesflat.co/html/ecomus/images/shop/file/lookbook-3.jpg",
            dots: [
                {
                    top: "40%",
                    left: "40%",
                    menu: {
                        image: "https://themesflat.co/html/ecomus/images/shop/products/img-p4.png",
                        title: "Ribbed modal T-shirt",
                        price: "$20.00",
                    },
                },
                {
                    top: "70%",
                    left: "60%",
                    menu: {
                        image: "https://themesflat.co/html/ecomus/images/shop/products/img-p4.png",
                        title: "Ribbed modal T-shirt",
                        price: "$20.00",
                    },
                },
            ],
        },
    ];

    return (
        <div className="pb-10">
            <div className="text-center">
                <h1 className="text-4xl pb-4">Shop the look</h1>
                <p>Inspire and let yourself be inspired, from one unique fashion to another.</p>
            </div>

            <Slider {...sliderSettings} className="flex items-center pt-16">
                {images.map((image, index) => (
                    <div className="relative" key={index}>
                        <img src={image.src} alt={`Lookbook ${index + 1}`} className="w-full" />
                        {image.dots.map((dot, dotIndex) => (
                            <div key={dotIndex}>
                                {/* Dot */}
                                <div
                                    className="absolute hover:animate-ping bg-white rounded-full h-8 w-8 cursor-pointer flex items-center justify-center"
                                    style={{ top: dot.top, left: dot.left }}
                                    onClick={() => handleOpen(`${index}-${dotIndex}`)}
                                >
                                    <p className="bg-black rounded-full h-2 w-2"></p>
                                </div>
                                {/* Menu */}
                                <div
                                    className={`${
                                        openMenu === `${index}-${dotIndex}` ? "flex" : "hidden"
                                    } absolute px-3 py-2 space-x-3 bg-white items-center justify-center`}
                                    style={{ top: `calc(${dot.top} + 6%)`, left: `calc(${dot.left} - 18%)` }}
                                >
                                    <img src={dot.menu.image} alt={dot.menu.title} />
                                    <div>
                                        <h1>{dot.menu.title}</h1>
                                        <p className="font-semibold">{dot.menu.price}</p>
                                    </div>
                                    <MdOutlineRemoveRedEye className="cursor-pointer hover:bg-black bg-gray-100 hover:text-white rounded-full p-[7px] text-4xl transition-all duration-700" />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default LookBook;