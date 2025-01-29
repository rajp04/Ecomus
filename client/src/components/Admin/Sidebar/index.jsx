import { useContext, useEffect, useState } from 'react';
import { MyContext } from '..';
import Logo from '../../../assets/logo.svg'
import { FaArrowLeft } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { IoIosContact } from "react-icons/io";
import { TbShoppingCartCopy } from "react-icons/tb";
import { LuUserRoundCheck } from "react-icons/lu";
import axios from 'axios'

function Sidebar() {

    const [select, setSelect] = useState('dashboard')
    const [permissions, setPermissions] = useState()
    const [error, setError] = useState()
    const { setSidebar } = useContext(MyContext)
    const url = import.meta.env.VITE_SERVER_URL
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPermission = async () => {
            try {
                const token = sessionStorage.getItem('token');

                const { data } = await axios.get(`${url}/admin/role`, {
                    headers: { Authorization: `Bearer ${token}` },
                });


                if (data?.success === 1) {
                    setPermissions(data?.result?.role?.permissions);
                } else {
                    setError(data?.message)
                }

            } catch (error) {
                console.log(error.message);
            }
        };
        fetchPermission();
    }, []);

    return (
        <div className="text-white px-4">
            <div className='h-[90px] flex items-center justify-between'>
                <img src={Logo} alt="" className='w-[200px] cursor-pointer' onClick={() => navigate('/admin')} />
                <FaArrowLeft className='text-3xl cursor-pointer lg:hidden' onClick={() => setSidebar(false)} />
            </div>
            <h1 className="text-red-500 font-medium">{error}</h1>
            <div className='pt-3 space-y-2'>
                {permissions?.dashboard?.includes('view') &&
                    <div className={`flex items-center space-x-4 text-2xl ${select === 'dashboard' ? 'bg-gray-500' : 'cursor-pointer'} px-4 rounded-md py-2`} onClick={() => { setSelect('dashboard'); navigate('/admin') }}>
                        <RxDashboard />
                        <h1>Dashboard</h1>
                    </div>
                }

                {permissions?.users?.includes('view') &&
                    <div className={`flex items-center space-x-4 text-2xl ${select === 'users' ? 'bg-gray-500' : 'cursor-pointer'} px-4 rounded-md py-2`} onClick={() => { setSelect('users'); navigate('/admin/users') }}>
                        <FaRegUser />
                        <h1>User</h1>
                    </div>
                }

                {permissions?.products?.includes('view') &&
                    <div className={`flex items-center space-x-4 text-2xl ${select === 'product' ? 'bg-gray-500' : 'cursor-pointer'} px-4 rounded-md py-2`} onClick={() => { setSelect('product'); navigate('/admin/product') }}>
                        <AiOutlineProduct />
                        <h1>Product</h1>
                    </div>
                }

                {permissions?.orders?.includes('view') &&
                    <div className={`flex items-center space-x-4 text-2xl ${select === 'order' ? 'bg-gray-500' : 'cursor-pointer'} px-4 rounded-md py-2`} onClick={() => { setSelect('order'); navigate('/admin/order') }}>
                        <TbShoppingCartCopy />
                        <h1>Order</h1>
                    </div>
                }

                {permissions?.role?.includes('view') &&
                    <div className={`flex items-center space-x-4 text-2xl ${select === 'role' ? 'bg-gray-500' : 'cursor-pointer'} px-4 rounded-md py-2`} onClick={() => { setSelect('role'); navigate('/admin/role') }}>
                        <LuUserRoundCheck />
                        <h1>Role</h1>
                    </div>
                }

                {permissions?.inquiry?.includes('view') &&
                    <div className={`flex items-center space-x-4 text-2xl ${select === 'contact' ? 'bg-gray-500' : 'cursor-pointer'} px-4 rounded-md py-2`} onClick={() => { setSelect('contact'); navigate('/admin/contact') }}>
                        <IoIosContact />
                        <h1>Inquiry</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default Sidebar