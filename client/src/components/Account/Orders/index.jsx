import { useLocation, useNavigate } from "react-router-dom"
import OrderDetails from "./OrdersDetails";
import { useEffect, useState } from "react";
import axios from "axios";


function Orders() {

    const navigate = useNavigate();

    const location = useLocation();
    const isRecover = location.hash === '#product-details';

    const [orderData, setOrderData] = useState()
    const url = import.meta.env.VITE_SERVER_URL
    const token = localStorage.getItem('userToken');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`${url}/order/${token}`, {
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
        fetchProduct()
    }, [url, token])

    return (
        <>
            {isRecover ? <OrderDetails /> : (
                <div className="border rounded-md w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#f2f2f2] py-3 w-full flex justify-between px-10 items-center">
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData?.map((item, index) => (
                                <tr className="w-full py-3 flex justify-between px-10 border-t items-center" key={index}>
                                    <td>#{item._id?.slice(-4)}</td>
                                    <td>{item.createdAt
                                        ? new Date(item.createdAt).toLocaleDateString()
                                        : 'N/A'}</td>
                                    <td>{item.orderStatus}</td>
                                    <td>₹{item?.priceAtOrder - item?.discount} for 1 item</td>
                                    <td
                                        className="bg-black py-2 px-4 rounded-sm text-white w-fit cursor-pointer"
                                        onClick={() => navigate('#product-details', { state: item })}
                                    >
                                        View
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default Orders