import Header from "../Header";
import Footer from "../Footer";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Address from "./Address";
import Details from "./Details";
import Wishlist from "./Wishlist";
import { TbLayoutSidebar } from "react-icons/tb";
import { Box, Drawer, List } from "@mui/material";
import { IoClose } from "react-icons/io5";

function Account() {

    const [select, setSelect] = useState('dashboard');
    const [isOpenSearch, setIsOpenSearch] = React.useState(false);
    const navigate = useNavigate();

    const handleSelect = (selected) => {
        setSelect(selected)
        navigate('')
        setIsOpenSearch(false)
    }

    const toggleDrawerSearch = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsOpenSearch(open);
    };

    const drawerSearchContent = (
        <Box
            role="presentation"
            sx={{ paddingTop: 0, padding: 0, margin: 0, backgroundColor: "white", zIndex: 100, width: '300px' }}
        >
            <List>
                <>
                    <div className="flex justify-between items-center bg-[#f2f2f2] mb-8 py-4 px-3">
                        <h1 className="text-xl">Sidebar Account</h1>
                        <IoClose className="text-2xl" onClick={toggleDrawerSearch(false)} />
                    </div>
                    <div className="px-5 space-y-3">
                        <button className={`${select === 'dashboard' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('dashboard')}>Dashboard</button>
                        <button className={`${select === 'orders' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('orders')}>Orders</button>
                        <button className={`${select === 'address' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('address')}>Address</button>
                        <button className={`${select === 'accountdetails' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('accountdetails')}>Account Details</button>
                        <button className={`${select === 'wishlist' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('wishlist')}>Wishlist</button>
                        <button className={`${select === 'logout' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => {
                            handleSelect('logout')
                            localStorage.removeItem('userToken')
                            navigate('/login')
                        }}>Logout</button>
                    </div>
                </>
            </List>
        </Box >
    );


    return (
        <>
            <Header />
            <div className="pt-5 pb-10">
                <div className="flex items-center justify-center py-24" style={{
                    backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/file/page-title-blog.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} >
                    <h1 className="text-5xl">
                        {select === 'dashboard' ? 'My Account' : ''}
                        {select === 'orders' ? 'My Orders' : ''}
                        {select === 'address' ? 'Address' : ''}
                        {select === 'accountdetails' ? 'Account Details' : ''}
                        {select === 'wishlist' ? 'Wishlist' : ''}
                    </h1>
                </div>
            </div>
            <div className="w-[95%] m-auto">
                <div className="top-[33%] h-screen left-0 lg:hidden fixed cursor-pointer z-10" onClick={toggleDrawerSearch(true)}>
                    <TbLayoutSidebar className="border px-3 py-3 text-5xl bg-white" />
                </div>
                <Drawer anchor="left" open={isOpenSearch} onClose={toggleDrawerSearch(false)}>
                    {drawerSearchContent}
                </Drawer>
                <div className="grid grid-cols-4 pb-10 xl:gap-10 gap-5">
                    <div className="col-span-1 lg:flex hidden flex-col space-y-3">
                        <button className={`${select === 'dashboard' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('dashboard')}>Dashboard</button>
                        <button className={`${select === 'orders' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('orders')}>Orders</button>
                        <button className={`${select === 'address' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('address')}>Address</button>
                        <button className={`${select === 'accountdetails' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('accountdetails')}>Account Details</button>
                        <button className={`${select === 'wishlist' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => handleSelect('wishlist')}>Wishlist</button>
                        <button className={`${select === 'logout' ? 'bg-[#f2f2f2] text-[red]' : 'border'} w-full text-start px-3 py-3 rounded-md font-semibold`} onClick={() => {
                            handleSelect('logout')
                            localStorage.removeItem('userToken')
                            navigate('/login')
                        }}>Logout</button>
                    </div>
                    <div className="lg:col-span-3 col-span-4 space-y-2">
                        {select === 'dashboard' ? <Dashboard /> : ''}
                        {select === 'orders' ? <Orders /> : ''}
                        {select === 'address' ? <Address /> : ''}
                        {select === 'accountdetails' ? <Details /> : ''}
                        {select === 'wishlist' ? <Wishlist /> : ''}
                    </div>
                </div>
            </div >
            <Footer />
        </>

    )
}

export default Account