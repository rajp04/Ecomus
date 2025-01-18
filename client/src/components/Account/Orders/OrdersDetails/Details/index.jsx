

function Details() {
  return (
    <div>
      <div className="flex items-center space-x-3 border-dashed border-b pb-5">
        <img src="https://themesflat.co/html/ecomus/images/products/brown.jpg" alt="" className="h-24 border" />
        <div className="flex flex-col space-y-1">
          <h1 className="font-medium text-black rounded-md text-xl">Ribbed modal T-shirt</h1>
          <h1 className="font-medium">Price : <span className="font-normal">$28.95</span></h1>
          <h1 className="font-medium">Size : <span className="font-normal">XL</span></h1>
        </div>
      </div>
      <div className="pt-5 border-b space-y-1 pb-1">
        <div className="flex justify-between items-center">
          <h1 className="text-xl opacity-80">Total Price</h1>
          <h1 className="font-semibold text-xl">$28.95</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl opacity-80">Total Discounts</h1>
          <h1 className="font-semibold text-xl">$10</h1>
        </div>
      </div>
      <div className="flex justify-between items-center pt-1 pb-8">
        <h1 className="text-xl opacity-80">Order Total</h1>
        <h1 className="font-semibold text-xl">$18.95</h1>
      </div>
    </div>
  )
}

export default Details