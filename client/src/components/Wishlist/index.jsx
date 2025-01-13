import Header from "../Header";
import TopBar from "../TopBar";
import Footer from "../Footer";
import { CgShoppingBag } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbArrowsCross } from "react-icons/tb";
import { MdOutlineRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import PropTypes from "prop-types";

function ProductCard({ images, productName, price }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [hoverImage, setHoverImage] = useState(null);

    const handleImageChange = (image) => {
        setSelectedImage(image);
    };

    const handleHoverImage = (image) => {
        setHoverImage(image);
    };

    const handleMouseLeave = () => {
        setHoverImage(null);
    };

    return (
        <div className="space-y-2 col-span-1 pb-5">
            <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                <img
                    src={hoverImage || selectedImage}
                    alt="Product"
                    className="rounded-md hover:scale-[1.12] transition-all duration-[2s]"
                />
                <div className="absolute flex space-x-3 top-14 left-3/4 transition-all duration-1000">
                    <div className="tooltip">
                        <div className="hidden group-hover:block transition-all duration-1000">
                            <MdDeleteOutline className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            <span className="tooltiptext">Remove Wishlist</span>
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
            <h1 className="hover:text-[red]">{productName}</h1>
            <h1 className="font-semibold">${price}</h1>
            <div className="flex items-center space-x-3">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleImageChange(image)}
                        onMouseEnter={() => handleHoverImage(image)}
                        onMouseLeave={handleMouseLeave}
                        className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full"
                    >
                        <p
                            style={{
                                backgroundColor:
                                    index === 0 ? "#D3D3D3" : index === 1 ? "#000000" : "#FFA500",
                            }}
                            className="h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"
                        ></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Wishlist() {
    const products = [
        {
            images: [
                "https://themesflat.co/html/ecomus/images/products/white-1.jpg",
                "https://themesflat.co/html/ecomus/images/products/black-1.jpg",
                "https://themesflat.co/html/ecomus/images/products/orange-1.jpg",
            ],
            productName: "Ribbed Tank Top",
            price: "16.95",
        },
        {
            id: 2,
            name: "Ribbed Tank Top",
            price: "$16.95",
            images: [
                "https://themesflat.co/html/ecomus/images/products/white-1.jpg",
                "https://themesflat.co/html/ecomus/images/products/black-1.jpg",
                "https://themesflat.co/html/ecomus/images/products/orange-1.jpg",
            ],
            selectedImage: "https://themesflat.co/html/ecomus/images/products/white-1.jpg",
        },
        {
            id: 3,
            name: "Ribbed Tank Top",
            price: "$16.95",
            images: [
                "https://themesflat.co/html/ecomus/images/products/white-1.jpg",
                "https://themesflat.co/html/ecomus/images/products/black-1.jpg",
                "https://themesflat.co/html/ecomus/images/products/orange-1.jpg",
            ],
            selectedImage: "https://themesflat.co/html/ecomus/images/products/white-1.jpg",
        },
    ];

    return (
        <>
            <TopBar />
            <Header />
            <div className="pt-16 w-[95%] m-auto grid lg:grid-cols-4 md:grid-cols-3 xxs:grid-cols-2 grid-cols-1 sm:gap-8 gap-3">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        images={product.images}
                        productName={product.productName}
                        price={product.price}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

ProductCard.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default Wishlist;