import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MyContext } from "..";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchDelete } from "../../../slices/UserSlice";
import axios from "axios";

function Users() {
    const dispatch = useDispatch();
    const { setOpenProfile } = useContext(MyContext);
    const { users, status, error } = useSelector((state) => state.user);
    const [permissions, setPermissions] = useState()
    const [errors, setErrors] = useState()
    const url = import.meta.env.VITE_SERVER_URL

    useEffect(() => {
        const fetchPermission = async () => {
            try {
                const token = sessionStorage.getItem('token');

                const { data } = await axios.get(`${url}/admin/role`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log(data);


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
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    const handleDelete = (userId) => {
        dispatch(fetchDelete(userId));
    };

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <h1 className="text-3xl font-semibold">Users</h1>
            <h1 className="text-red-500 font-medium">{errors}</h1>
            {status === 'loading' && <p></p>}
            {status === 'failed' && <p className="text-red-500 font-medium">Error: {error}</p>}
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" />
                </div>
                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <thead>
                            <tr>
                                <th className="bg-[#43435e] text-white">First Name</th>
                                <th className="bg-[#43435e] text-white">Last Name</th>
                                <th className="bg-[#43435e] text-white">Email</th>
                                {permissions?.users?.includes('delete') &&
                                    <th className="bg-[#43435e] text-white">Action</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {users?.result?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    {permissions?.users?.includes('delete') &&
                                        <td>
                                            <button
                                                className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl"
                                                onClick={() => handleDelete(item._id)}
                                            >
                                                <MdDelete />
                                            </button>
                                        </td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;