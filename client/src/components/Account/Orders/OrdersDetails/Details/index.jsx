import { useLocation } from "react-router-dom"


function Details() {

  const { state } = useLocation();

  return (
    <div>
      <div className="flex items-center space-x-3 border-dashed border-b pb-5">
        <img src={state?.productId?.images?.[0]} alt="" className="h-24 border" />
        <div className="flex flex-col space-y-1">
          <h1 className="font-medium text-black rounded-md text-xl">{state?.productId?.name}</h1>
          <h1 className="font-medium">Price : <span className="font-normal">₹{state?.priceAtOrder}</span></h1>
          <h1 className="font-medium">Size : <span className="font-normal">{state?.size}</span></h1>
        </div>
      </div>
      <div className="pt-5 border-b space-y-1 pb-1">
        <div className="flex justify-between items-center">
          <h1 className="text-xl opacity-80">Total Price</h1>
          <h1 className="font-semibold text-xl">₹{state?.priceAtOrder}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl opacity-80">Total Discounts</h1>
          <h1 className="font-semibold text-xl">₹{state?.discount}</h1>
        </div>
      </div>
      <div className="flex justify-between items-center pt-1 pb-8">
        <h1 className="text-xl opacity-80">Order Total</h1>
        <h1 className="font-semibold text-xl">₹{state?.priceAtOrder - state?.discount}</h1>
      </div>
    </div>
  )
}

export default Details