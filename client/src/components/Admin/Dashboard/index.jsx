import { useContext } from "react";
import { MyContext } from "..";
import { TbTrendingUp } from "react-icons/tb";
import { TbShoppingCartCopy } from "react-icons/tb";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';


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

  const { setOpenProfile } = useContext(MyContext);

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
            <h1 className="text-2xl font-bold">$508</h1>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-red-500 p-5 rounded-md">
          <div className="bg-white p-3 rounded-full">
            <TbShoppingCartCopy className="text-3xl text-red-500 opacity-70" />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg">Total Orders</h1>
            <h1 className="text-2xl font-bold">500</h1>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between bg-blue-500 p-5 rounded-md">
          <div className="bg-white p-3 rounded-full">
            <LuUserRoundPlus className="text-3xl text-blue-500 opacity-70" />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg">Total User</h1>
            <h1 className="text-2xl font-bold">1000</h1>
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
            <tr>
              <th className="bg-[#43435e] text-white">Order Id</th>
              <th className="bg-[#43435e] text-white">Product Name</th>
              <th className="bg-[#43435e] text-white">SKU</th>
              <th className="bg-[#43435e] text-white">Price</th>
              <th className="bg-[#43435e] text-white">Color</th>
              <th className="bg-[#43435e] text-white">Size</th>
              <th className="bg-[#43435e] text-white">Quantity</th>
              <th className="bg-[#43435e] text-white">Payment Status</th>
              <th className="bg-[#43435e] text-white">Action</th>
            </tr>
            <tr>
              <td>858548462848</td>
              <td>Maria Anders</td>
              <td>SK8574205</td>
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
              <td>Maria Anders</td>
              <td>SK8574205</td>
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

export default Dashboard