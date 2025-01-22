


function Order() {
    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5">
            <h1 className="text-3xl font-semibold">Orders</h1>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" />
                </div>
                <div className="overflow-x-auto scroll-hidden-show whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <tr>
                            <th className="bg-[#43435e] text-white">Order Id</th>
                            <th className="bg-[#43435e] text-white">User Id</th>
                            <th className="bg-[#43435e] text-white">Product Id</th>
                            <th className="bg-[#43435e] text-white">Product Image</th>
                            <th className="bg-[#43435e] text-white">Product Name</th>
                            <th className="bg-[#43435e] text-white">Price</th>
                            <th className="bg-[#43435e] text-white">Color</th>
                            <th className="bg-[#43435e] text-white">Size</th>
                            <th className="bg-[#43435e] text-white">Quantity</th>
                            <th className="bg-[#43435e] text-white">Payment Status</th>
                            <th className="bg-[#43435e] text-white">Action</th>
                        </tr>
                        <tr>
                            <td>858548462848</td>
                            <td>858548462848</td>
                            <td>858548462848</td>
                            <td>Maria Anders</td>
                            <td>Maria Anders</td>
                            <td>500</td>
                            <td>White</td>
                            <td>42</td>
                            <td>20</td>
                            <td>Pending</td>
                            <td className="space-x-2">
                                <button className="bg-green-600 px-2 rounded-md py-1 text-white text-2xl">
                                    View
                                </button>
                                <button className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl">
                                    Reject
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>858548462848</td>
                            <td>858548462848</td>
                            <td>858548462848</td>
                            <td>Maria Anders</td>
                            <td>Maria Anders</td>
                            <td>500</td>
                            <td>White</td>
                            <td>42</td>
                            <td>20</td>
                            <td>Pending</td>
                            <td className="space-x-2">
                                <button className="bg-green-600 px-2 rounded-md py-1 text-white text-2xl">
                                    View
                                </button>
                                <button className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl">
                                    Reject
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Order