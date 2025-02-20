import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom'
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { BiSearch } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { Button, Divider, Menu } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { GrSubtract } from "react-icons/gr";
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import axios from 'axios'

function Header() {

    const [isOpenSearch, setIsOpenSearch] = React.useState(false);
    const [isOpenCart, setIsOpenCart] = React.useState(false);
    const [cart, setCart] = React.useState();
    const [wishlist, setWishlist] = React.useState();
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const [openItem, setOpenItem] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl1);

    const token = localStorage.getItem('userToken')
    const url = import.meta.env.VITE_SERVER_URL;
    const navigate = useNavigate()

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

    const toggleDrawerMenu = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsOpenMenu(open);
    };

    const handleToggle = (item) => {
        setOpenItem(openItem === item ? null : item);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl1(null);
    };


    React.useEffect(() => {
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
    });

    React.useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const { data } = await axios.get(`${url}/wishlist/${token}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (data?.success === 1 && Array.isArray(data?.data)) {
                    setWishlist(data?.data);
                } else {
                    console.error("Invalid wishlist data format:", data);
                }
            } catch (error) {
                console.error("Error fetching wishlist:", error);
            }
        };

        fetchWishlist();
    });

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
                    `${url}/cart/update/${id}`,
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
                const { data } = await axios.delete(`${url}/cart/delete/${item._id}`, {
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
                <div className="h-[100%] overflow-hidden relative xs:w-[450px] w-[300px] bg-white">
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
                        <h1 className="py-5 border-b bg-white">Buy <span className="font-medium">&#8377;499</span> more to enjoy <span className="font-medium">Free Shipping</span></h1>
                    </div>
                    <div className="overflow-y-auto scroll-hidden h-[465px] pt-[160px] px-8">
                        {cart?.map((item, index) => (
                            <div className="flex space-x-2 py-4 border-b" key={index}>
                                <img
                                    src={item?.images?.[0] || item?.productId?.images?.[0]}
                                    alt={item?.name || item?.productId?.name}
                                    className="h-24"
                                />
                                <div className="flex flex-col">
                                    <h1 className="pb-1">{item?.name || item?.productId?.name}</h1>
                                    <div>
                                        <del className="text-gray-800 pe-2">&#8377;{item?.variants?.[0].price || item?.productId?.variants?.[0].price}</del>
                                        <span className="text-[red]">&#8377;
                                            {item?.variants?.[0].price - item?.variants?.[0].discount || item?.productId?.variants?.[0].price - item?.productId?.variants?.[0].discount}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-gray-300 flex items-center py-1 mt-1 w-fit space-x-5 px-3 rounded-md">
                                            <GrSubtract className="cursor-pointer" onClick={() => handleSub(item)} />
                                            <h1>{item.qty}</h1>
                                            <FaPlus className="cursor-pointer" onClick={() => handlePlus(item)} />
                                        </div>
                                        <h1 className="text-gray-700 border-b w-fit cursor-pointer" onClick={() => handleRemove(item)}>Remove</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="fixed xs:w-[450px] w-[300px] bottom-0 z-20">
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
                                {cart &&
                                    <h1 className="text-2xl font-semibold">
                                        ₹{cart.reduce((acc, item) =>
                                            acc + ((item.variants?.[0].price - item.variants?.[0].discount) * item.qty),
                                            0) || cart.reduce((acc, item) =>
                                                acc + ((item.productId.variants[0].price - item.productId.variants[0].discount) * item.qty),
                                                0)}
                                    </h1>
                                }
                            </div>
                            <h1 className="text-gray-500 border-b-[2px] pb-3">Taxes and <span className="border-b border-gray-700 text-black">shipping</span> calculated at checkout</h1>
                            {/* <div className="flex items-center space-x-3 pt-3">
                                <input type="checkbox" name="" id="" />
                                <h1>I agree with the <span className="border-b border-black">terms and conditions</span></h1>
                            </div> */}
                            <div className="flex items-center pt-3 w-full space-x-3">
                                <div className="border w-full px-2 py-2 cursor-pointer text-xl text-center border-black rounded-md">
                                    <button className="text-black" onClick={() => navigate('/cart')}>View cart</button>
                                </div>
                                <Button className="check-btn w-full" onClick={() => navigate('/checkout')}>Check out</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </List>
        </Box>
    );

    const drawerMenuContent = (
        <Box
            role="presentation"
            sx={{ paddingTop: 0, padding: 0, margin: 0, overflowY: 'hidden' }}
        >
            <List>
                <div className="p-4 xs:w-[400px] w-[300px] bg-white">
                    <IoCloseSharp className="text-3xl font-semibold cursor-pointer bg-white" onClick={toggleDrawerMenu(false)} />
                    <div className="overflow-y-auto h-[480px] pe-2">
                        {/* Home Section */}
                        <div className="border-b pb-2">
                            <div className="flex items-center justify-between" onClick={() => handleToggle("home")}>
                                <h1>Home</h1>
                                {openItem === "home" ? (
                                    <GrSubtract className="text-xl font-bold cursor-pointer" />
                                ) : (
                                    <FaPlus className="text-xl font-bold cursor-pointer" />
                                )}
                            </div>
                            <div className={`${openItem === "home" ? "flex flex-col transition-all duration-300" : "hidden"} border-l my-3 mx-5 ps-5 space-y-2`}>
                                <h1>Home Fashion 01</h1>
                                <h1>Home Fashion 02</h1>
                                <h1>Home Fashion 03</h1>
                                <h1>Home Fashion 04</h1>
                                <h1>Home Fashion 05</h1>
                            </div>
                        </div>

                        {/* Shop Section */}
                        <div className="border-b py-2">
                            <div className="flex items-center justify-between" onClick={() => handleToggle("shop")}>
                                <h1>Shop</h1>
                                {openItem === "shop" ? (
                                    <GrSubtract className="text-xl font-bold cursor-pointer" />
                                ) : (
                                    <FaPlus className="text-xl font-bold cursor-pointer" />
                                )}
                            </div>
                            <div className={`${openItem === "shop" ? "flex flex-col transition-all duration-300" : "hidden"} border-l my-3 mx-5 ps-5 space-y-2`}>
                                <h1>Shop Layouts</h1>
                                <h1>Features</h1>
                                <h1>Product Style</h1>
                            </div>
                        </div>

                        {/* Products Section */}
                        <div className="border-b py-2">
                            <div className="flex items-center justify-between" onClick={() => handleToggle("products")}>
                                <h1>Products</h1>
                                {openItem === "products" ? (
                                    <GrSubtract className="text-xl font-bold cursor-pointer" />
                                ) : (
                                    <FaPlus className="text-xl font-bold cursor-pointer" />
                                )}
                            </div>
                            <div className={`${openItem === "products" ? "flex flex-col transition-all duration-300" : "hidden"} border-l my-3 mx-5 ps-5 space-y-2`}>
                                <h1>Product Layouts</h1>
                                <h1>Product Details</h1>
                                <h1>Product Swatches</h1>
                                <h1>Product Features</h1>
                            </div>
                        </div>

                        {/* Pages Section */}
                        <div className="border-b py-2">
                            <div className="flex items-center justify-between" onClick={() => handleToggle("pages")}>
                                <h1>Pages</h1>
                                {openItem === "pages" ? (
                                    <GrSubtract className="text-xl font-bold cursor-pointer" />
                                ) : (
                                    <FaPlus className="text-xl font-bold cursor-pointer" />
                                )}
                            </div>
                            <div className={`${openItem === "pages" ? "flex flex-col transition-all duration-300" : "hidden"} border-l my-3 mx-5 ps-5 space-y-2`}>
                                <h1>About Us</h1>
                                <h1>Brands</h1>
                                <h1>Contact</h1>
                            </div>
                        </div>

                        {/* Blog Section */}
                        <div className="border-b py-2">
                            <div className="flex items-center justify-between" onClick={() => handleToggle("blog")}>
                                <h1>Blog</h1>
                                {openItem === "blog" ? (
                                    <GrSubtract className="text-xl font-bold cursor-pointer" />
                                ) : (
                                    <FaPlus className="text-xl font-bold cursor-pointer" />
                                )}
                            </div>
                            <div className={`${openItem === "blog" ? "flex flex-col transition-all duration-300" : "hidden"} border-l my-3 mx-5 ps-5 space-y-2`}>
                                <h1>Grid Layout</h1>
                                <h1>Left Sidebar</h1>
                                <h1>Right Sidebar</h1>
                                <h1>Blog List</h1>
                            </div>
                        </div>

                        {/* Buy Now Section */}
                        <div className="border-b py-2">
                            <h1>Buy now</h1>
                        </div>

                        {/* Wishlist and Search */}
                        <div className="flex items-center pt-5 space-x-2">
                            <div className="flex items-center text-black px-4 py-2 space-x-3 text-xl bg-gray-200 rounded-md">
                                <FaRegHeart />
                                <h1>Wishlist</h1>
                            </div>
                            <div className="flex items-center text-black px-4 py-2 space-x-3 text-xl bg-gray-200 rounded-md">
                                <IoSearch />
                                <h1>Search</h1>
                            </div>
                        </div>

                        <div className="pt-3">
                            <h1 className="border-black border-b text-black w-fit font-semibold">Need help ?</h1>
                            <h1 className="pt-2">Address: <span>1234 Fashion Street, Suite 567, New York, NY 10001</span></h1>
                            <h1 className="pt-1">Email: <span className="font-semibold text-gray-700">info@fashionshop.com</span></h1>
                            <h1 className="pt-1">Phone: <span className="font-semibold text-gray-700">(212) 555-1234</span></h1>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center text-black px-4 py-2 space-x-3 text-xl bg-gray-200 rounded-md w-fit my-3">
                            <FiUser />
                            <h1>Login</h1>
                        </div>
                        <div className="flex items-center pt-2 border-t">
                            <div>
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick1}
                                    className="topbar-color"
                                >
                                    India
                                    <FaAngleDown className="topbar-angle" />
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl1}
                                    open={open1}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={handleClose}>India</MenuItem>
                                    <MenuItem onClick={handleClose}>United States</MenuItem>
                                    <MenuItem onClick={handleClose}>Germany</MenuItem>
                                    <MenuItem onClick={handleClose}>France</MenuItem>
                                </Menu>
                            </div>
                            <div>
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className="topbar-color"
                                >
                                    English
                                    <FaAngleDown className="topbar-angle" />
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={handleClose}>English</MenuItem>
                                    <MenuItem onClick={handleClose}>Hindi</MenuItem>
                                    <MenuItem onClick={handleClose}>Gujrati</MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </List>
        </Box >
    );

    return (
        <div className="flex items-center justify-between py-5 px-1 w-[95%] m-auto">
            <div className="lg:hidden flex cursor-pointer">
                <div onClick={toggleDrawerMenu(true)}>
                    <CgMenuLeft className="text-black text-3xl font-semibold" />
                </div>
                <Drawer anchor="left" open={isOpenMenu} onClose={toggleDrawerMenu(false)}>
                    {drawerMenuContent}
                </Drawer>
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
                    {token ? (
                        <Link to="http://localhost:5173/account">
                            <FiUser />
                        </Link>
                    ) : (
                        <Link to="http://localhost:5173/login">
                            <FiUser />
                        </Link>
                    )}
                </div>

                {/* Wishlist */}
                {token &&
                    <div className="relative sm:flex hidden">
                        {wishlist &&
                            <p className="absolute -top-2 left-3 h-4 w-4 flex items-center justify-center text-[15px] bg-[red] text-white rounded-full">
                                {wishlist?.length}
                            </p>
                        }
                        <Link to="http://localhost:5173/wishlist">
                            <FaRegHeart />
                        </Link>
                    </div>
                }

                {/* Shopping Cart */}
                <div className="relative cursor-pointer">
                    {cart &&
                        <p className="absolute -top-2 left-3 h-4 w-4 flex items-center justify-center text-[15px] bg-[red] text-white rounded-full">
                            {cart?.length}
                        </p>
                    }
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