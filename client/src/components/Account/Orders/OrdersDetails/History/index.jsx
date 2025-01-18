

function History() {
  return (
    <div className="pb-14 relative">

      <div className="absolute top-0 left-4 h-full border-l-2 border-dotted border-gray-300"></div>

      <div className="flex space-x-6 items-start pb-10 relative">

        <div className="relative z-10 border-green-600 bg-white border p-2 rounded-full">
          <div className="bg-green-500 border-4 border-green-500 rounded-full w-4 h-4"></div>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Product Shipped</h1>
          <p className="text-sm">10/07/2024 4:30pm</p>
          <p className="font-semibold text-sm">
            Courier Service: <span className="font-normal">FedEx World Service Center</span>
          </p>
          <p className="font-semibold text-sm">
            Estimated Delivery Date: <span className="font-normal">12/07/2024</span>
          </p>
        </div>
      </div>
      <div className="flex space-x-6 items-start pb-10 relative">
        <div className="relative z-10 border-green-600 bg-white border p-2 rounded-full">
          <div className="bg-green-500 border-4 border-green-500 rounded-full w-4 h-4"></div>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Product Shipped</h1>
          <p className="text-sm">10/07/2024 4:30pm</p>
          <p className="font-semibold text-sm">
            Tracking Number: <span className="font-normal">2307-3215-6759</span>
          </p>
          <p className="font-semibold text-sm">
            Warehouse: <span className="font-normal">T-Shirt 10b</span>
          </p>
        </div>
      </div>
      <div className="flex space-x-6 items-start pb-10 relative">
        <div className="relative z-10 border-gray-300 bg-white border p-2 rounded-full">
          <div className="bg-gray-300 border-4 border-gray-300 rounded-full w-4 h-4"></div>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Product Packaging</h1>
          <p className="text-sm">12/07/2024 4:34pm</p>
        </div>
      </div>
      <div className="flex space-x-6 items-start relative">
        <div className="relative z-10 border-gray-300 bg-white border p-2 rounded-full">
          <div className="bg-gray-300 border-4 border-gray-300 rounded-full w-4 h-4"></div>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Order Placed</h1>
          <p className="text-sm">10/07/2024 4:30pm</p>
        </div>
      </div>
    </div>

  )
}

export default History