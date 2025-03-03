import { useContext, useEffect, useState } from "react";
import { MyContext } from "..";
import { TbTrendingUp } from "react-icons/tb";
import { TbShoppingCartCopy } from "react-icons/tb";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../slices/UserSlice";

const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

function Dashboard() {
  const dispatch = useDispatch();
  const { setOpenProfile } = useContext(MyContext);
  const { users, status } = useSelector((state) => state.user);
  const [orderData, setOrderData] = useState()
  const [newData, setNewData] = useState()
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

  const total = orderData?.reduce((sum, item) => sum + item.totalPrice, 0);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (orderData?.length > 0) {
      const sortedData = orderData?.sort((a, b) => new Date(b.date) - new Date(a.date));

      const latest5Data = sortedData?.slice(0, 5);
      setNewData(latest5Data)
    }
  }, [orderData]);

  return (
    <div className="pt-[98px] overflow-y-auto px-5 pb-5 " onClick={() => setOpenProfile(false)}>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div className="col-span-1 flex items-center justify-between bg-green-500 p-5 rounded-md">
          <div className="bg-white p-3 rounded-full">
            <TbTrendingUp className="text-3xl text-green-500 " />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg">Total Sales</h1>
            <h1 className="text-2xl font-bold">&#8377;{total}</h1>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-red-500 p-5 rounded-md">
          <div className="bg-white p-3 rounded-full">
            <TbShoppingCartCopy className="text-3xl text-red-500 opacity-70" />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg">Total Orders</h1>
            {orderData && <h1 className="text-2xl font-bold">{orderData?.length}</h1>}
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-blue-500 p-5 rounded-md">
          <div className="bg-white p-3 rounded-full">
            <LuUserRoundPlus className="text-3xl text-blue-500 opacity-70" />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg">Total User</h1>
            <h1 className="text-2xl font-bold">{users?.result?.length}</h1>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-yellow-500 p-5 rounded-md">
          <div className="bg-white p-3 rounded-full">
            <FaUsers className="text-3xl text-yellow-500 opacity-70" />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg">Total Visiter</h1>
            <h1 className="text-2xl font-bold">3000</h1>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-9 sm:grid-cols-6 grid-cols-3 mt-5 gap-7">
        <div className="col-span-6 bg-white rounded-md p-5">
          <h1 className="font-bold text-xl">Users Statistics</h1>
          <LineChart
            height={300}
            series={[
              { data: [2400, 1398, 4800, 3908, 4200, 3200, 5000, 4500, 7000, 6500, 9000, 7000] }
            ]}
            xAxis={[{
              scaleType: 'point', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }]}
          />
        </div>
        <div className="sm:col-span-3 col-span-6 bg-white rounded-md p-5 flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl pb-5">Product Categories</h1>
          <PieChart
            series={[
              {
                outerRadius: 100,
                data,
                arcLabel: getArcLabel,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                fontSize: 14,
              },
            }}
            {...sizing}
          />
        </div>
        <div className="sm:col-span-3 col-span-6 bg-white rounded-md w-full">
          <h1 className="font-bold text-xl p-5">Total Orders</h1>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['Mar', 'Jun', 'Sep', 'Dec'] }]}
            series={[{ data: [30, 50, 80, 60] }]}
            height={300}
          />
        </div>
        <div className="col-span-6 bg-white rounded-md p-5">
          <h1 className="font-bold text-xl">Totel Sales</h1>
          <LineChart
            height={300}
            series={[{ data: [2400, 1398, 4800, 3908, 4200, 3200, 5000, 4500, 7000, 6500, 9000, 7000], area: true, showMark: false }]}
            xAxis={[{ scaleType: 'point', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }]}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                display: 'none',
              },
            }}
          />
        </div>
      </div>
      <div className="bg-white rounded-md p-5 mt-8">
        <h1 className="text-3xl font-semibold">Recent Order</h1>
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
              {newData?.map((item, index) => (
                <tr key={index}>
                  <td>#{item?._id?.slice(-4)}</td>
                  <td>#{item?.userId._id?.slice(-4)}</td>
                  <td>#{item?.productId.sku}</td>
                  <td>{item?.priceAtOrder}</td>
                  <td>{item?.color}</td>
                  <td>{item?.size?.slice(0, 1)}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.orderStatus}</td>
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
  )
}

export default Dashboard