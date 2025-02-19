import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function AdditionalInfo() {

  const [product, setProduct] = useState()
  const url = import.meta.env.VITE_SERVER_URL

  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {

        const { data } = await axios.get(`${url}/product/${id}`);

        if (data?.success === 1) {
          setProduct(data?.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  })

  return (
    <div className="border rounded-md border-gray-400 opacity-50">
      <div className="flex items-center border-b border-gray-400 ">
        <h1 className="font-bold text-lg w-[30%] border-r border-gray-400 py-2 sm:px-5 px-2">Color:</h1>
        {product?.variants.map((item, index) => (
          <h1 className="sm:px-5 px-2" key={index}>{item.color},</h1>
        ))}
      </div>
      <div className="flex items-center border-gray-400 ">
        <h1 className="font-bold text-lg w-[30%] border-r border-gray-400 py-2 sm:px-5 px-2">Size:</h1>
        <h1 className="sm:px-5 px-2">S, M, L, XL</h1>
      </div>
    </div>
  )
}

export default AdditionalInfo