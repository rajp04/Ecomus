import { useContext, useEffect, useState } from "react";
import { MyContext } from "..";
import axios from "axios";

function Order() {
    const { setOpenProfile } = useContext(MyContext);
    const [orderData, setOrderData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    
    const url = import.meta.env.VITE_SERVER_URL;

    useEffect(() => {
        const fetchProduct = async () => {
            const token = sessionStorage.getItem('token');
            
            try {
                const { data } = await axios.get(`${url}/order/order/admin`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (data?.success === 1) {
                    setOrderData(data?.result);
                } else {
                    setOrderData([]);
                }
            } catch (error) {
                console.log(error);
                setOrderData([]);
            }
        };
        fetchProduct();
    }, []);

    const handleStatusChange = async (orderId, newStatus) => {
        const token = sessionStorage.getItem('token');
        
        try {
            const { data } = await axios.put(
                `${url}/order/update/${orderId}`,
                { orderStatus: newStatus },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            if (data?.success === 1) {
                setOrderData(prevOrders => 
                    prevOrders.map(order => 
                        order._id === orderId ? { ...order, orderStatus: newStatus } : order
                    )
                );
            }
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredOrders = orderData.filter(order => {
        const searchLower = searchQuery.toLowerCase();
        return (
            (order?.productId?.sku?.toLowerCase().includes(searchLower)) ||
            (order?.productId?.name?.toLowerCase().includes(searchLower))
        );
    });

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <h1 className="text-3xl font-semibold">Orders</h1>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input
                        type="text"
                        className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg"
                        placeholder="Search by name or SKU"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="overflow-x-auto scroll-hidden-show whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <thead>
                            <tr>
                                <th className="bg-[#43435e] text-white">Order Id</th>
                                <th className="bg-[#43435e] text-white">User Id</th>
                                <th className="bg-[#43435e] text-white">SKU</th>
                                <th className="bg-[#43435e] text-white">Price</th>
                                <th className="bg-[#43435e] text-white">Color</th>
                                <th className="bg-[#43435e] text-white">Size</th>
                                <th className="bg-[#43435e] text-white">Quantity</th>
                                <th className="bg-[#43435e] text-white">Order Status</th>
                                <th className="bg-[#43435e] text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders?.map((item, index) => (
                                <tr key={index}>
                                    <td>#{item?._id?.slice(-4)}</td>
                                    <td>#{item?.userId._id?.slice(-4)}</td>
                                    <td>#{item?.productId.sku}</td>
                                    <td>{item?.priceAtOrder}</td>
                                    <td>{item?.color}</td>
                                    <td>{item?.size?.slice(0, 1)}</td>
                                    <td>{item?.quantity}</td>
                                    <td>
                                        <select
                                            value={item?.orderStatus}
                                            onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                        >
                                            <option>{item?.orderStatus}</option>
                                            <option>Pending</option>
                                            <option>Shipped</option>
                                            <option>Delivered</option>
                                            <option>Cancelled</option>
                                        </select>
                                    </td>
                                    <td className="space-x-2">
                                        <button className="bg-green-600 px-2 rounded-md py-1 text-white text-2xl">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Order;