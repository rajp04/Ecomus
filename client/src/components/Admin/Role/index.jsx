import { useContext, useEffect, useState } from 'react';
import { MdEditSquare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'
import { MyContext } from '..';
import axios from 'axios'

function Role() {

    const { setOpenProfile } = useContext(MyContext);
    const [roleData, setRoleData] = useState();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_SERVER_URL

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
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchRoles()
    }, [])


    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Role</h1>
                <button className="bg-[#43435e] px-4 py-2 rounded-md text-white" onClick={() => navigate('add')}>Add Role</button>
            </div>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" />
                </div>
                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <tr>
                            <th className="bg-[#43435e] text-white">Role Name</th>
                            <th className="bg-[#43435e] text-white">Email</th>
                            <th className="bg-[#43435e] text-white">Action</th>
                        </tr>
                        {roleData && roleData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.role?.name}</td>
                                <td>{item.email}</td>
                                <td className='space-x-2'>
                                    <button className="bg-green-600 px-2 rounded-md py-1 text-white text-2xl" onClick={() => navigate('edit', { state: item })}><MdEditSquare /></button>
                                    {/* <button className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl"><MdDelete /></button> */}
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Role