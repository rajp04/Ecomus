import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { MyContext } from "..";
import { LuView } from "react-icons/lu";
import axios from "axios";

function Product() {

    const { setOpenProfile } = useContext(MyContext);
    const navigate = useNavigate()
    const [error, setError] = useState();
    const [productData, setProductData] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:7001/api/product`);
                if (data?.success === 1) {
                    setProductData(data?.data)
                }
            } catch (error) {
                setError(error)
            }
        }
        fetchProduct()
    })

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`http://localhost:7001/api/product/delete/${id}`)
        if (data?.success === 1) {
            console.log("Product deleted");
        } else {
            console.log(data?.message);
        }
    }

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Product</h1>
                <h1 className="text-red-500 font-semibold">{error}</h1>
                <button className="bg-[#43435e] px-4 py-2 rounded-md text-white" onClick={() => navigate('add')}>Add Product</button>
            </div>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" />
                </div>
                <div className="overflow-x-auto scroll-hidden-show whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <tr>
                            <th className="bg-[#43435e] text-white">Name</th>
                            <th className="bg-[#43435e] text-white">Description</th>
                            <th className="bg-[#43435e] text-white">Category</th>
                            <th className="bg-[#43435e] text-white">Brand</th>
                            <th className="bg-[#43435e] text-white">Price</th>
                            <th className="bg-[#43435e] text-white">Stock</th>
                            <th className="bg-[#43435e] text-white">Action</th>
                        </tr>
                        {productData && productData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name.length > 30 ? `${item.name.slice(0, 30)}...` : item.name}</td>
                                <td>{item.description.length > 40 ? `${item.description.slice(0, 40)}...` : item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                                <td>{item.variants[0].price}</td>
                                <td>{item.variants[0].stock}</td>
                                <td className="space-x-2">
                                    <button className="bg-blue-600 px-2 rounded-md py-1 text-white text-2xl" onClick={() => navigate('view', { state: item })}><LuView /></button>
                                    <button className="bg-green-600 px-2 rounded-md py-1 text-white text-2xl" onClick={() => navigate(`edit/${item._id}`)}><MdEditSquare /></button>
                                    <button className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl" onClick={() => handleDelete(item._id)}><MdDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Product