import { useLocation } from "react-router-dom"


function Receiver() {

    const { state } = useLocation();

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
        <div className="pb-8">
            <h1 className="text-[#31a56d]">Thank you Your order has been received</h1>
            <h1 className="pt-5">Order Number : <span className="font-bold">#{state?._id?.slice(-4)}</span></h1>
            <h1 className="">Date : <span className="font-bold">{formattedDate}</span></h1>
            <h1 className="">Total : <span className="font-bold">₹{state?.priceAtOrder - state?.discount}</span></h1>
            <h1 className="">Payment Methods : <span className="font-bold">Cash on Delivery</span></h1>
        </div>
    )
}

export default Receiver