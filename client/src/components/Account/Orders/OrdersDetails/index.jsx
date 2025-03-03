import { useState } from "react"
import Courier from "./Courier"
import Receiver from "./Receiver"
import History from "./History";
import Details from "./Details";
import { useLocation } from "react-router-dom";


function OrderDetails() {

  const { state } = useLocation();

  const [select, setSelect] = useState('history');

  const handleSelect = (selected) => {
    setSelect(selected)
  }

  const date = new Date(state?.createdAt);
  const formattedDate = date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <div className="border rounded-md p-5">
      <div className="flex items-center space-x-3 border-dashed border-b pb-5">
        <img src={state?.productId?.images?.[0]} alt="" className="h-24 border rounded-sm" />
        <div className="flex flex-col space-y-1">
          <h1 className="uppercase bg-[red] font-medium text-white px-2 py-1 rounded-md w-fit">In progress</h1>
          <h1 className="sm:text-2xl text-xl font-medium">Order #{state?._id?.slice(-4)}</h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5 pt-7">
        <div className="col-span-1 space-y-1">
          <h1 className="opacity-60 text-lg">Item</h1>
          <h1 className="font-semibold text-xl">{state?.productId?.category}</h1>
        </div>
        <div className="col-span-1 space-y-1">
          <h1 className="opacity-60 text-lg">Courier</h1>
          <h1 className="font-semibold text-xl">{state?.productId?.name}</h1>
        </div>
        <div className="col-span-1 space-y-1">
          <h1 className="opacity-60 text-lg">Start Time</h1>
          <h1 className="font-semibold text-xl">{formattedDate}</h1>
        </div>
        <div className="col-span-1 space-y-1">
          <h1 className="opacity-60 text-lg">Address</h1>
          <h1 className="font-semibold text-xl">{state?.address?.address}, {state?.address?.city}</h1>
        </div>
      </div>
      <div className="flex items-center space-x-7 pt-10 border-b">
        <h1 className={`font-medium text-xl cursor-pointer transition-colors duration-500 border-b-2 pb-3 ${select === 'history' ? 'text-[red] border-[red] border-b-2' : 'hover:border-[red] border-white hover:text-[red]'}`} onClick={() => handleSelect('history')}>Order History</h1>
        <h1 className={`font-medium text-xl cursor-pointer transition-colors duration-500 border-b-2 pb-3 ${select === 'details' ? 'text-[red] border-[red] border-b-2' : 'hover:border-[red] border-white hover:text-[red]'}`} onClick={() => handleSelect('details', { state: state })}>Item Details</h1>
        <h1 className={`font-medium text-xl cursor-pointer transition-colors duration-500 border-b-2 pb-3 ${select === 'courier' ? 'text-[red] border-[red] border-b-2' : 'hover:border-[red] border-white hover:text-[red]'}`} onClick={() => handleSelect('courier')}>Courier</h1>
        <h1 className={`font-medium text-xl cursor-pointer transition-colors duration-500 border-b-2 pb-3 ${select === 'receiver' ? 'text-[red] border-[red] border-b-2' : 'hover:border-[red] border-white hover:text-[red]'}`} onClick={() => handleSelect('receiver', { state: state })}>Receiver</h1>
      </div>
      <div className="pt-7">
        {select === 'history' ? <History /> : ''}
        {select === 'details' ? <Details /> : ''}
        {select === 'courier' ? <Courier /> : ''}
        {select === 'receiver' ? <Receiver /> : ''}
      </div>
    </div>
  )
}

export default OrderDetails