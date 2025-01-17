import { useState } from 'react';
import Header from '../Header'
import { FaAngleLeft, FaChevronRight, FaPlus } from "react-icons/fa6";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsLightningChargeFill } from "react-icons/bs";
import { GrSubtract } from 'react-icons/gr';
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { TbArrowsCross } from 'react-icons/tb';
// import { RiDeleteBin5Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuShip } from "react-icons/lu";
import { RiExchangeCnyLine } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import Description from './Description';
import AdditionalInfo from './AdditionalInfo';
import Return from './Return';
import Review from './Review';
import Shipping from './Shipping';
import Slider from "react-slick";
import { CgShoppingBag } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";
// import { TbArrowsCross } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function ProductDetails() {

    const [selectMenu, setSelectMenu] = useState('description')

    const images = [
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod13.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod14.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod15.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod16.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod17.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod18.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod19.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod20.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod21.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod22.jpg",
        "https://themesflat.co/html/ecomus/images/shop/products/hmgoepprod23.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [number, setNumber] = useState(1);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setActiveIndex(index);
    };

    const handlePlus = () => {
        setNumber(number + 1)
    }

    const handleSubTract = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    const handleDisplay = (menu) => {
        setSelectMenu(menu)
    }

    const settings = {
        dots: false, // Hides the dots
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Only show one slide at a time
        slidesToScroll: 1,
        arrows: true, // Shows the navigation arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Shows 2 slides on medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Shows 1 slide on smaller screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Header />
            <div className='w-[95%] m-auto pt-10'>
                <div className='xs:flex items-center justify-between xs:space-y-0 space-y-2'>
                    <div className='flex items-center xs:space-x-5 space-x-2'>
                        <h1>Home</h1>
                        <FaChevronRight className='cursor-pointer text-sm' />
                        <h1>women</h1>
                        <FaChevronRight className='cursor-pointer text-sm' />
                        <h1 className='opacity-60'>Cotton jersey top</h1>
                    </div>
                    <div className='flex items-center space-x-2 text-xl'>
                        <FaAngleLeft className='cursor-pointer' />
                        <HiOutlineViewGrid className='cursor-pointer' />
                        <FaChevronRight className='cursor-pointer' />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 pt-8">
                    <div className="col-span-1 llg:grid-cols-7 flex llg:flex-row flex-col-reverse gap-2 llg:h-screen llg:grid overflow-hidden">
                        <div className="col-span-1 flex llg:flex-col overflow-y-auto llg:space-x-0  llg:space-y-2 space-x-2 scroll-hidden">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleImageClick(image, index)}
                                    className={`rounded-md border-2 h-40 w-24 ${activeIndex === index ? "border-black" : "border-gray-300"
                                        } cursor-pointer`}
                                />
                            ))}
                        </div>
                        <div className="col-span-6 ">
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="rounded-md overflow-hidden md:h-screen h-auto w-full"
                            />
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='md:h-screen w-full px-2 transition-all duration-300 overflow-x-hidden scroll-hidden'>
                            <h1 className='font-medium text-3xl pb-4'>Cotton jersey top</h1>
                            <div className='flex lg:flex-row flex-col lg:items-center lg:space-x-3 lg:space-y-0 space-y-2'>
                                <button className='border rounded-md text-xs font-semibold border-black px-5 py-2 w-fit'>Best seller</button>
                                <div className='flex items-center space-x-3'>
                                    <BsLightningChargeFill className='text-[red]' />
                                    <h1 className='font-semibold'>Selling fast! 56 people have this in their carts.</h1>
                                </div>
                            </div>
                            <div className='flex items-center space-x-4 pt-3'>
                                <h1 className='text-[red] text-3xl'>$8.00</h1>
                                <del className='text-xl text-gray-700'>$30.00</del>
                                <h1 className='text-white text-sm font-semibold bg-[#fc5732] px-3 py-1 rounded-full'>20% OFF</h1>
                            </div>
                            <div className='flex flex-col space-y-3 pt-4'>
                                <div className='flex items-center space-x-1'>
                                    <h1>Color :- </h1>
                                    <h1 className='font-semibold text-xl'>Beige</h1>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <div className='p-1 border border-black rounded-full '>
                                        <p className='bg-[#c8ad7f] h-5 w-5 rounded-full'></p>
                                    </div>
                                    <div className='p-1 border border-black rounded-full '>
                                        <p className='bg-[#000] h-5 w-5 rounded-full'></p>
                                    </div>
                                    <div className='p-1 border border-black rounded-full '>
                                        <p className='bg-[#a8bcd4] h-5 w-5 rounded-full'></p>
                                    </div>
                                    <div className='p-1 border border-black rounded-full '>
                                        <p className='bg-[#ffffffbe] h-5 w-5 rounded-full'></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-3 pt-4'>
                                <div className='flex items-center space-x-1'>
                                    <h1>Size :- </h1>
                                    <h1 className='font-semibold text-xl'>S</h1>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <div className='border border-black bg-[#000] rounded-md '>
                                        <p className=' text-center text-white px-4 py-1 text-xl'>S</p>
                                    </div>
                                    <div className='border border-black bg-[#000] rounded-md '>
                                        <p className=' text-center text-white px-4 py-1 text-xl'>M</p>
                                    </div>
                                    <div className='border border-black bg-[#000] rounded-md '>
                                        <p className=' text-center text-white px-4 py-1 text-xl'>L</p>
                                    </div>
                                    <div className='border border-gray-400 rounded-md '>
                                        <p className=' text-center text-black px-4 py-1 text-xl'>XL</p>
                                    </div>
                                </div>
                                <h1 className='font-medium'>Quantity</h1>
                                <div className="bg-gray-300 flex items-center py-1 w-fit space-x-7 px-3 rounded-md">
                                    <GrSubtract className="cursor-pointer" onClick={handleSubTract} />
                                    <h1 className='font-semibold text-xl'>{number}</h1>
                                    <FaPlus className="cursor-pointer" onClick={handlePlus} />
                                </div>
                                <div className='flex items-center w-full sm:space-x-3 space-x-1 pt-3'>
                                    <Button className='cart-button'>Add to cart - $8.00</Button>
                                    <div className='tooltip'>
                                        <div className='sm:px-5 px-2 py-[10px] border rounded-md border-gray-400 hover:border-gray-900 cursor-pointer'>
                                            <FaRegHeart className='sm:text-2xl text-xl' />
                                            {/* <RiDeleteBin5Line className='text-2xl' /> */}
                                            <span className="tooltiptext">Add to wishlist</span>
                                        </div>
                                    </div>
                                    <div className='tooltip'>
                                        <div className='sm:px-5 px-2 py-[10px] border rounded-md border-gray-400 hover:border-gray-900 cursor-pointer'>
                                            <TbArrowsCross className='sm:text-2xl text-xl' />
                                            <span className="tooltiptext">Add to Compare</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#ffc520] flex items-center mt-4 py-3 rounded-md justify-center space-x-2 cursor-pointer'>
                                <h1 className='text-[blue]'>Buy with </h1>
                                <img src="https://themesflat.co/html/ecomus/images/payments/paypal.png" alt="paypal" />
                            </div>
                            <h1 className='underline text-center text-gray-500 pt-2 cursor-pointer'>More payment options</h1>
                            <div className='xs:flex xl:items-center md:items-start xs:items-center items-start xs:space-x-5 pt-4'>
                                <div className='flex xl:flex-row md:flex-col sm:flex-row flex-col sm:items-center xl:space-x-5 md:space-x-0 xs:space-x-3 xl:space-y-0 space-y-2'>
                                    <div className='space-x-2 flex items-center'>
                                        <img src="https://themesflat.co/html/ecomus/images/item/compare.svg" alt="" />
                                        <h1 className='font-medium hover:text-[red]'>Compare color</h1>
                                    </div>
                                    <div className='space-x-2 flex items-center'>
                                        <FaRegQuestionCircle className='text-xl' />
                                        <h1 className='font-medium hover:text-[red]'>Ask a question</h1>
                                    </div>
                                </div>
                                <div className='flex lg:flex-row md:flex-col xs:flex-row flex-col lg:items-center lg:space-x-5 md:space-x-0 xs:space-x-3 xl:space-y-0 md:space-y-2 space-y-0'>
                                    <div className='space-x-2 flex items-center'>
                                        <TbTruckDelivery className='text-xl' />
                                        <h1 className='font-medium hover:text-[red]'>Delivery & Return</h1>
                                    </div>
                                    <div className='space-x-2 flex items-center'>
                                        <FiShare2 className='text-xl' />
                                        <h1 className='font-medium hover:text-[red]'>Share</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-5 pt-5'>
                                <div className='col-span-1 border rounded-md py-8 px-5 flex items-center flex-col space-y-2'>
                                    <LuShip className='text-3xl' />
                                    <h1 className='text-center'>Estimate delivery times: <span className='font-medium'>12-26 days</span> (International), <span className='font-medium'>3-6 days</span> (United States).</h1>
                                </div>
                                <div className='col-span-1 border rounded-md py-8 px-5 flex items-center flex-col space-y-2'>
                                    <RiExchangeCnyLine className='text-3xl' />
                                    <h1 className='text-center'>Return within <span className='font-medium'>30 days</span> of purchase. Duties & taxes are non-refundable.</h1>
                                </div>
                            </div>
                            <div className='flex xl:flex-row md:flex-col sm:flex-row flex-col xl:items-center pt-5 space-x-5'>
                                <div className='flex items-center space-x-2'>
                                    <AiOutlineSafety className='text-xl' />
                                    <h1 className='font-semibold'>Guarantee Safe Checkout</h1>
                                </div>
                                <div className='flex items-center xl:pt-0 pt-3'>
                                    <img src="https://themesflat.co/html/ecomus/images/payments/visa.png" alt="" />
                                    <img src="https://themesflat.co/html/ecomus/images/payments/img-1.png" alt="" />
                                    <img src="https://themesflat.co/html/ecomus/images/payments/img-2.png" alt="" />
                                    <img src="https://themesflat.co/html/ecomus/images/payments/img-3.png" alt="" />
                                    <img src="https://themesflat.co/html/ecomus/images/payments/img-4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border rounded-md mt-24 mb-10 px-8 py-3 border-gray-300'>
                    <div className='flex items-center md:space-x-10 space-x-5 border-b border-gray-300 overflow-x-auto lg:text-xl '>
                        <h1 className={`font-bold pb-4 cursor-pointer ${selectMenu === 'description' ? 'border-b-2 border-black' : ''}`} onClick={() => handleDisplay('description')}>Description</h1>
                        <h1 className={`font-bold pb-4 cursor-pointer whitespace-nowrap ${selectMenu === 'additinalInfo' ? 'border-b-2 border-black' : ''}`} onClick={() => handleDisplay('additinalInfo')}>Additional Information</h1>
                        <h1 className={`font-bold pb-4 cursor-pointer ${selectMenu === 'review' ? 'border-b-2 border-black' : ''}`} onClick={() => handleDisplay('review')}>Review</h1>
                        <h1 className={`font-bold pb-4 cursor-pointer ${selectMenu === 'shipping' ? 'border-b-2 border-black' : ''}`} onClick={() => handleDisplay('shipping')}>Shipping</h1>
                        <h1 className={`font-bold pb-4 cursor-pointer whitespace-nowrap ${selectMenu === 'return' ? 'border-b-2 border-black' : ''}`} onClick={() => handleDisplay('return')}>Return Policies</h1>
                    </div>

                    <div className='pt-10 pb-5'>
                        {selectMenu === 'description' ? <Description /> : ''}
                        {selectMenu === 'additinalInfo' ? <AdditionalInfo /> : ''}
                        {selectMenu === 'review' ? <Review /> : ''}
                        {selectMenu === 'shipping' ? <Shipping /> : ''}
                        {selectMenu === 'return' ? <Return /> : ''}
                    </div>
                </div>

                <div className='pt-14'>
                    <h1 className='text-5xl text-center'>People Also Bought</h1>
                    
            </div>
        </div >
        </>
    )
}

export default ProductDetails