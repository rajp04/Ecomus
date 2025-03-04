import { FiArrowUpRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaSquarePinterest, FaAngleDown } from "react-icons/fa6";
import { Button, Menu, MenuItem } from '@mui/material';
import React from "react";
import Fade from '@mui/material/Fade';
import { FaPlus } from "react-icons/fa6";
import axios from 'axios'

function Footer() {

    const [email, setEmail] = React.useState()
    const [openPlus1, setOpenPlus1] = React.useState(false)
    const [openPlus2, setOpenPlus2] = React.useState(false)
    const [openPlus3, setOpenPlus3] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl1);

    const url = import.meta.env.VITE_SERVER_URL
    const token = localStorage.getItem('userToken')
    const navigate = useNavigate();

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

    const handleOpen1 = () => {
        setOpenPlus1(!openPlus1)
    }
    const handleOpen2 = () => {
        setOpenPlus2(!openPlus2)
    }
    const handleOpen3 = () => {
        setOpenPlus3(!openPlus3)
    }

    const handleSubscribe = async () => {
        const { data } = await axios.post(`${url}/users/subscribe`, email);
        if (data?.success === 1) {
            setEmail('')
        }
    }

    return (
        <div className="w-[95%] m-auto border-t-2  pt-8">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 pb-10">
                <div className="col-span-1 space-y-3">
                    <img src="https://themesflat.co/html/ecomus/images/logo/logo.svg" alt="Logo" className="pb-5" />
                    <h1>Address: <span className="text-gray-800 font-semibold">1234 Fashion Street, Suite 567,
                        New York, NY 10001</span></h1>
                    <h1>Email: <span className="text-gray-800 font-semibold cursor-pointer">info@fashionshop.com</span></h1>
                    <h1>Phone: <span className="text-gray-800 font-semibold cursor-pointer">(212) 555-1234</span></h1>
                    <Link to='/contact' className="flex items-center pt-4 hover:text-[red] cursor-pointer border-b w-fit border-black pb-1 hover:border-[red] text-xl">
                        <h1>Get direction</h1>
                        <FiArrowUpRight />
                    </Link>

                    <div className="xlg:flex hidden items-center space-x-3 pt-4">
                        <div className="bg-[#ebebeb] hover:bg-[#0d6efd] hover:text-white transition-all duration-150 rounded-full p-2">
                            <FaFacebookF className="text-sm " />
                        </div>
                        <div className="bg-[#ebebeb] hover:bg-[#000000] hover:text-white transition-all duration-150 rounded-full p-2">
                            <FaXTwitter className="text-sm " />
                        </div>
                        <div className="bg-[#ebebeb] hover:bg-[orange] hover:text-white transition-all duration-150 rounded-full p-2">
                            <FaInstagram className="text-sm " />
                        </div>
                        <div className="bg-[#ebebeb] hover:bg-[#000000] hover:text-white transition-all duration-150 rounded-full p-2">
                            <FaTiktok className="text-sm " />
                        </div>
                        <div className="bg-[#ebebeb] hover:bg-[red] hover:text-white transition-all duration-150 rounded-full p-2">
                            <FaSquarePinterest className="text-sm " />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-medium">Help</h1>
                        <FaPlus className="text-2xl md:hidden flex" onClick={handleOpen1} />
                    </div>
                    <div className={`${openPlus1 || 'md:block hidden'
                        } space-y-2`}>
                        <h1 className="pt-[13px] cursor-pointer w-fit hover:text-[red]">Privacy Policy</h1>
                        <h1 className="cursor-pointer w-fit hover:text-[red]">Returns + Exchanges</h1>
                        <h1 className="cursor-pointer  w-fit hover:text-[red]">Shipping</h1>
                        <h1 className="cursor-pointer  w-fit hover:text-[red]">Terms & Conditions</h1>
                        <h1 className="cursor-pointer  w-fit hover:text-[red]">FAQ’s</h1>
                        <h1 className="cursor-pointer  w-fit hover:text-[red]">Compare</h1>
                        <h1 className="cursor-pointer w-fit hover:text-[red]" onClick={()=> navigate('/wishlist')}>My Wishlist</h1>
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-medium">About</h1>
                        <FaPlus className="text-2xl md:hidden flex" onClick={handleOpen2} />
                    </div>
                    <div className={`${openPlus2 || 'md:block hidden'
                        } space-y-2`}>
                        <h1 className="pt-[13px] cursor-pointer w-fit hover:text-[red]">Our Story</h1>
                        <h1 className="cursor-pointer w-fit hover:text-[red]" onClick={()=> navigate('/shop-default')}>Visit Our Store</h1>
                        <h1 className="cursor-pointer w-fit hover:text-[red]" onClick={()=> navigate('/contact')}>Contact Us</h1>
                        <h1 className="cursor-pointer w-fit hover:text-[red]" onClick={()=> navigate(`${token ? '/account' :"/login"}`)}>Account</h1>
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-medium">Sign Up for Email</h1>
                        <FaPlus className="text-2xl md:hidden flex" onClick={handleOpen3} />
                    </div>
                    <div className={`${openPlus3 || 'md:block hidden'
                        } space-y-2`}>
                        <h1 className="pt-[13px] pb-8">Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</h1>
                        <div className="relative">
                            <input type="text" className="w-full outline-none rounded-md border border-gray-300 py-4 ps-4 pe-36" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Button
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '14px',
                                    padding: '12px 20px',
                                    position: 'absolute',
                                    top: '4px',
                                    right: '4px'
                                }}
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </Button>
                        </div>
                        <div className="flex items-center pt-5">
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
            </div>


            <div className="flex md:flex-row flex-col space-y-4 md:justify-between items-center py-5 border-t">
                <div>
                    <h1 className="text-center">© 2025 Ecomus Store. All Rights Reserved</h1>
                </div>
                <div className="flex items-center sm:space-x-3 space-x-1">
                    <img src="https://themesflat.co/html/ecomus/images/payments/visa.png" alt="visa" />
                    <img src="https://themesflat.co/html/ecomus/images/payments/img-1.png" alt="paypel" />
                    <img src="https://themesflat.co/html/ecomus/images/payments/img-2.png" alt="mastercard" />
                    <img src="https://themesflat.co/html/ecomus/images/payments/img-3.png" alt="amex" />
                    <img src="https://themesflat.co/html/ecomus/images/payments/img-4.png" alt="amex" />
                </div>
            </div>
        </div>
    )
}

export default Footer