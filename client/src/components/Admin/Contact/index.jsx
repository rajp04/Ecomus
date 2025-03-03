import { useContext, useEffect, useState } from "react";
import { MyContext } from "..";
import axios from "axios";

function AdminContact() {

    const { setOpenProfile } = useContext(MyContext);
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchInquiry = async () => {
            try {
                const token = sessionStorage.getItem('token');

                const { data } = await axios.get(`http://localhost:7001/api/inquiry`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (data?.success === 1) {
                    setData(data?.result)
                } else {
                    setError(data?.message)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchInquiry()
    }, [])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredOrders = data?.filter(order => {
        const searchLower = searchQuery.toLowerCase();
        return (
            (order?.name?.toLowerCase().includes(searchLower)) 
        );
    });

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <h1 className="text-3xl font-semibold">Users Inquiry</h1>
            <h1 className="text-red-500 font-medium">{error}</h1>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" value={searchQuery} onChange={handleSearchChange}/>
                </div>
                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <tr>
                            <th className="bg-[#43435e] text-white">Name</th>
                            <th className="bg-[#43435e] text-white">Email</th>
                            <th className="bg-[#43435e] text-white">Message</th>
                        </tr>
                        {filteredOrders?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.message}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminContact