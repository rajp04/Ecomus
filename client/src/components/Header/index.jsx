import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from 'react-router-dom'
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { BiSearch } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { Button, Divider } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { GrSubtract } from "react-icons/gr";

function Header() {

    const [number, setNumber] = React.useState(1);
    const [isOpenSearch, setIsOpenSearch] = React.useState(false);
    const [isOpenCart, setIsOpenCart] = React.useState(false);

    const toggleDrawerSearch = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsOpenSearch(open);
    };
    const toggleDrawerCart = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsOpenCart(open);
    };

    const handlePlus = () => {
        setNumber(number + 1)
    }

    const handleSubTract = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    const drawerSearchContent = (
        <Box
            role="presentation"
            sx={{ paddingTop: 0, padding: 0, margin: 0, backgroundColor: "white", zIndex: 100 }}
        >
            <List>
                <div className="h-[100%] relative xs:w-[450px] w-auto bg-white">
                    <div className="px-5 pt-7 fixed xs:w-[450px] w-auto border-b z-10 bg-white">
                        <div className="flex items-center justify-between xs:space-x-0 space-x-10">
                            <h1 className="text-3xl font-semibold whitespace-nowrap">Search our site</h1>
                            <IoCloseSharp className="text-3xl cursor-pointer" onClick={toggleDrawerSearch(false)} />
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md mt-3 py-2 px-2 mb-5">
                            <BiSearch className="text-xl cursor-pointer" />
                            <input type="text" placeholder="Search" className="outline-none" />
                        </div>
                    </div>
                    <div className="px-5 xs:pt-[32%] pt-[48%]">
                        <h1 className="text-2xl font-semibold">Quick link</h1>
                        <div className="flex flex-col pt-3 space-y-1">
                            <h1>Fashion</h1>
                            <h1>Men</h1>
                            <h1>Women</h1>
                            <h1>Accessories</h1>
                        </div>

                        <h1 className="text-2xl py-5 font-medium">Need some inspiration?</h1>
                        <>
                            <div className="flex space-x-2 py-2">
                                <img src="https://themesflat.co/html/ecomus/images/products/white-3.jpg" alt="" className="h-24" />
                                <div className="">
                                    <h1 className="pb-1">Cotton jersey top</h1>
                                    <span className="text-gray-800 pe-2">$10.00</span><span className="text-[red]">$8.00</span>
                                </div>
                            </div>
                            <Divider />
                        </>
                        <>
                            <div className="flex space-x-2 py-2">
                                <img src="https://themesflat.co/html/ecomus/images/products/white-3.jpg" alt="" className="h-24" />
                                <div className="">
                                    <h1 className="pb-1">Cotton jersey top</h1>
                                    <span className="text-gray-800 pe-2">$10.00</span><span className="text-[red]">$8.00</span>
                                </div>
                            </div>
                            <Divider />
                        </>
                        <>
                            <div className="flex space-x-2 py-2">
                                <img src="https://themesflat.co/html/ecomus/images/products/white-3.jpg" alt="" className="h-24" />
                                <div className="">
                                    <h1 className="pb-1">Cotton jersey top</h1>
                                    <span className="text-gray-800 pe-2">$10.00</span><span className="text-[red]">$8.00</span>
                                </div>
                            </div>
                            <Divider />
                        </>
                        <>
                            <div className="flex space-x-2 py-2">
                                <img src="https://themesflat.co/html/ecomus/images/products/white-3.jpg" alt="" className="h-24" />
                                <div className="">
                                    <h1 className="pb-1">Cotton jersey top</h1>
                                    <span className="text-gray-800 pe-2">$10.00</span><span className="text-[red]">$8.00</span>
                                </div>
                            </div>
                            <Divider />
                        </>
                        <>
                            <div className="flex space-x-2 py-2">
                                <img src="https://themesflat.co/html/ecomus/images/products/white-3.jpg" alt="" className="h-24" />
                                <div className="">
                                    <h1 className="pb-1">Cotton jersey top</h1>
                                    <span className="text-gray-800 pe-2">$10.00</span><span className="text-[red]">$8.00</span>
                                </div>
                            </div>
                            <Divider />
                        </>
                    </div>
                </div>
            </List>
        </Box>
    );

    const drawerCartContent = (
        <Box
            role="presentation"
            sx={{ paddingTop: 0, padding: 0, margin: 0 }}
        >
            <List>
                <div className="h-[100%] overflow-hidden relative xs:w-[450px] w-auto bg-white">
                    <div className="fixed px-8 h-[150px] xs:w-[450px] w-auto z-10 bg-white">
                        <div className="flex items-center border-b py-3 justify-between xs:space-x-0 space-x-10">
                            <h1 className="text-3xl font-semibold whitespace-nowrap">Shopping cart</h1>
                            <IoCloseSharp className="text-3xl cursor-pointer" onClick={toggleDrawerCart(false)} />
                        </div>
                        <div className="flex items-center relative pt-8 bg-white">
                            <h1 className="h-[6px] rounded-md w-[50%] bg-[red]"></h1>
                            <h1 className="h-[6px] rounded-md w-[50%] bg-gray-300"></h1>
                            <div className="absolute flex items-center justify-center w-full ">
                                <div className="py-[2px] bg-white text-[red] px-[10px] border border-[red] rounded-md">
                                    <MdOutlineLocalShipping className="text-[22px] " />
                                </div>
                            </div>
                        </div>
                        <h1 className="py-5 border-b bg-white">Buy <span className="font-medium">$75.00</span> more to enjoy <span className="font-medium">Free Shipping</span></h1>
                    </div>
                    <div className="overflow-y-auto scroll-hidden h-[425px] pt-[160px] px-8">
                        <div className="flex space-x-2 py-4 border-b">
                            <img src="https://themesflat.co/html/ecomus/images/products/white-3.jpg" alt="" className="h-24" />
                            <div className="flex flex-col">
                                <h1 className="pb-1">Cotton jersey top</h1>
                                <div>
                                    <span className="text-gray-800 pe-2">$10.00</span><span className="text-[red]">$8.00</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-gray-300 flex items-center py-1 mt-1 w-fit space-x-5 px-3 rounded-md">
                                        <GrSubtract className="cursor-pointer" onClick={handleSubTract} />
                                        <h1>{number}</h1>
                                        <FaPlus className="cursor-pointer" onClick={handlePlus} />
                                    </div>
                                    <h1 className="text-gray-700 border-b w-fit cursor-pointer">Remove</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 py-4 border-b">
                            <img src="https://themesflat.co/html/ecomus/images/products/white-3.jpg" alt="" className="h-24" />
                            <div className="flex flex-col">
                                <h1 className="pb-1">Cotton jersey top</h1>
                                <div>
                                    <span className="text-gray-800 pe-2">$10.00</span><span className="text-[red]">$8.00</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-gray-300 flex items-center py-1 mt-1 w-fit space-x-5 px-3 rounded-md">
                                        <GrSubtract className="cursor-pointer" onClick={handleSubTract} />
                                        <h1>{number}</h1>
                                        <FaPlus className="cursor-pointer" onClick={handlePlus} />
                                    </div>
                                    <h1 className="text-gray-700 border-b w-fit cursor-pointer">Remove</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 py-4 border-b">
                            <img src="https://themesflat.co/html/ecomus/images/products/white-3.jpg" alt="" className="h-24" />
                            <div className="flex flex-col">
                                <h1 className="pb-1">Cotton jersey top</h1>
                                <div>
                                    <span className="text-gray-800 pe-2">$10.00</span><span className="text-[red]">$8.00</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-gray-300 flex items-center py-1 mt-1 w-fit space-x-5 px-3 rounded-md">
                                        <GrSubtract className="cursor-pointer" onClick={handleSubTract} />
                                        <h1>{number}</h1>
                                        <FaPlus className="cursor-pointer" onClick={handlePlus} />
                                    </div>
                                    <h1 className="text-gray-700 border-b w-fit cursor-pointer">Remove</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed w-[450px] bottom-0 z-20">
                        <div className="bg-gray-200 px-8 py-5 flex items-center justify-center space-x-3">
                            <div className="bg-white hover:bg-[red] hover:text-white transition-all duration-300 rounded-md px-6 py-2 cursor-pointer">
                                <MdOutlineEditCalendar className="text-2xl" />
                            </div>
                            <div className="bg-white hover:bg-[red] hover:text-white transition-all duration-300 rounded-md px-6 py-2 cursor-pointer">
                                <FiGift className="text-2xl" />
                            </div>
                            <div className="bg-white hover:bg-[red] hover:text-white transition-all duration-300 rounded-md px-6 py-2 cursor-pointer">
                                <LiaShippingFastSolid className="text-2xl" />
                            </div>
                        </div>
                        <div className="px-8 pt-3 pb-7 bg-white">
                            <div className="flex items-center justify-between pb-3">
                                <h1 className="text-xl">Subtotal</h1>
                                <h1 className="text-2xl font-semibold">$49.99 USD</h1>
                            </div>
                            <h1 className="text-gray-500 border-b-[2px] pb-3">Taxes and <span className="border-b border-gray-700 text-black">shipping</span> calculated at checkout</h1>
                            <div className="flex items-center space-x-3 pt-3">
                                <input type="checkbox" name="" id="" />
                                <h1>I agree with the <span className="border-b border-black">terms and conditions</span></h1>
                            </div>
                            <div className="flex items-center pt-3 w-full space-x-3">
                                <div className="border w-full px-2 py-2 cursor-pointer text-xl text-center border-black rounded-md">
                                    <button className="text-black">View cart</button>
                                </div>
                                <Button className="check-btn w-full">Check out</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </List>
        </Box>
    );

    return (
        <div className="flex items-center justify-between py-5 px-1 w-[95%] m-auto">
            <div className="lg:hidden flex">
                <CgMenuLeft className="text-black text-3xl font-semibold" />
            </div>
            <Link to='/'>
                <img src={`https://themesflat.co/html/ecomus/images/logo/logo.svg`} alt="Logo" />
            </Link>
            <div className="lg:flex hidden items-center space-x-7">
                <div className="flex items-center space-x-1 border-b-0 hover:border-b transition-all duration-150 border-black cursor-pointer fom">
                    <h1 className="text-xl font-medium">Home</h1>
                    <FaAngleDown />
                </div>
                <div className="flex items-center space-x-1 border-b-0 hover:border-b transition-all duration-150 border-black cursor-pointer">
                    <h1 className="text-xl font-medium">Shop</h1>
                    <FaAngleDown />
                </div>
                <div className="flex items-center space-x-1 border-b-0 hover:border-b transition-all duration-150 border-black cursor-pointer">
                    <h1 className="text-xl font-medium">Products</h1>
                    <FaAngleDown />
                </div>
                <div className="flex items-center space-x-1 border-b-0 hover:border-b transition-all duration-150 border-black cursor-pointer">
                    <h1 className="text-xl font-medium">Pages</h1>
                    <FaAngleDown />
                </div>
                <div className="flex items-center space-x-1 border-b-0 hover:border-b transition-all duration-150 border-black cursor-pointer">
                    <h1 className="text-xl font-medium">Blog</h1>
                    <FaAngleDown />
                </div>
                <div className="flex items-center space-x-1 border-b-0 hover:border-b transition-all duration-150 border-black cursor-pointer">
                    <h1 className="text-xl font-medium">Buy now</h1>
                    <FaAngleDown />
                </div>
            </div>
            <div className="flex items-center text-black font-medium text-2xl xs:space-x-5 space-x-3">
                {/* Search Icon */}
                <div className="cursor-pointer">
                    <div onClick={toggleDrawerSearch(true)}>
                        <IoSearch />
                    </div>
                    <Drawer anchor="right" open={isOpenSearch} onClose={toggleDrawerSearch(false)}>
                        {drawerSearchContent}
                    </Drawer>
                </div>

                {/* User Login */}
                <div className="sm:flex hidden">
                    <Link to="http://localhost:5173/login">
                        <FiUser />
                    </Link>
                </div>

                {/* Wishlist */}
                <div className="relative sm:flex hidden">
                    <p className="absolute -top-2 left-3 h-5 w-5 text-[16px] bg-[red] text-white rounded-full flex items-center justify-center">
                        0
                    </p>
                    <Link to="http://localhost:5173/wishlist">
                        <FaRegHeart />
                    </Link>
                </div>

                {/* Shopping Cart */}
                <div className="relative cursor-pointer">
                    <p className="absolute -top-2 left-3 h-4 w-4 flex items-center justify-center text-[15px] bg-[red] text-white rounded-full">
                        0
                    </p>
                    <div onClick={toggleDrawerCart(true)}>
                        <RiShoppingBag2Line />
                    </div>
                    <Drawer anchor="right" open={isOpenCart} onClose={toggleDrawerCart(false)}>
                        {drawerCartContent}
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default Header