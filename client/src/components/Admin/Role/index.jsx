import { useContext, useEffect, useState } from 'react';
import { MdEditSquare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'
import { MyContext } from '..';
import axios from 'axios'

function Role() {

    const { setOpenProfile } = useContext(MyContext);
    const [roleData, setRoleData] = useState();
    const [error, setError] = useState();
    const [errors, setErrors] = useState();
    const [permissions, setPermissions] = useState();
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    const url = import.meta.env.VITE_SERVER_URL

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
                    setErrors(data?.message)
                }

            } catch (error) {
                console.log(error.message);
            }
        };
        fetchPermission();
    }, []);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const token = sessionStorage.getItem('token');

                const { data } = await axios.get(`${url}/admin`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (data?.success === 1) {
                    setRoleData(data?.result)
                } else {
                    setError(data?.message)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchRoles()
    }, [])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredOrders = roleData?.filter(order => {
        const searchLower = searchQuery.toLowerCase();
        return (
            (order?.role?.name?.toLowerCase().includes(searchLower)) 
        );
    });

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Role</h1>
                {permissions?.role?.includes('add') &&
                    <button className="bg-[#43435e] px-4 py-2 rounded-md text-white" onClick={() => navigate('add')}>Add Role</button>
                }
            </div>
            <h1 className="text-red-500 font-medium">{error}</h1>
            <h1 className="text-red-500 font-medium">{errors}</h1>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" value={searchQuery} onChange={handleSearchChange}/>
                </div>
                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <tr>
                            <th className="bg-[#43435e] text-white">Role Name</th>
                            <th className="bg-[#43435e] text-white">Email</th>
                            {permissions?.role?.includes('edit') &&
                                <th className="bg-[#43435e] text-white">Action</th>
                            }
                        </tr>
                        {filteredOrders && filteredOrders.map((item, index) => (
                            <tr key={index}>
                                <td>{item.role?.name}</td>
                                <td>{item.email}</td>
                                {permissions?.role?.includes('edit') &&
                                    <td className='space-x-2'>
                                        <button className="bg-green-600 px-2 rounded-md py-1 text-white text-2xl" onClick={() => navigate('edit', { state: item })}><MdEditSquare /></button>
                                    </td>
                                }
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Role