import { useLocation, useNavigate } from "react-router-dom"
import OrderDetails from "./OrdersDetails";


function Orders() {

    const navigate = useNavigate();

    const location = useLocation();
    const isRecover = location.hash === '#product-details';

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
                            <tr className="w-full py-3 flex justify-between px-10 border-t items-center">
                                <td>#123</td>
                                <td>August 1, 2024</td>
                                <td>On hold</td>
                                <td>$200.0 for 1 items</td>
                                <td className="bg-black py-2 px-4 rounded-sm text-white w-fit cursor-pointer" onClick={() => navigate('#product-details')}>View</td>
                            </tr>
                            <tr className="w-full py-3 flex justify-between px-10 border-t items-center">
                                <td>#123</td>
                                <td>August 1, 2024</td>
                                <td>On hold</td>
                                <td>$200.0 for 1 items</td>
                                <td className="bg-black py-2 px-4 rounded-sm text-white w-fit cursor-pointer">View</td>
                            </tr>
                            <tr className="w-full py-3 flex justify-between px-10 border-t items-center">
                                <td>#123</td>
                                <td>August 1, 2024</td>
                                <td>On hold</td>
                                <td>$200.0 for 1 items</td>
                                <td className="bg-black py-2 px-4 rounded-sm text-white w-fit cursor-pointer">View</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default Orders