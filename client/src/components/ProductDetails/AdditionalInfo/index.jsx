

function AdditionalInfo() {
  return (
    <div className="border rounded-md border-gray-400 opacity-50">
      <div className="flex items-center border-b border-gray-400 ">
        <h1 className="font-bold text-lg w-[30%] border-r border-gray-400 py-2 sm:px-5 px-2">Color:</h1>
        <h1 className="sm:px-5 px-2">White, Pink, Black</h1>
      </div>
      <div className="flex items-center border-gray-400 ">
        <h1 className="font-bold text-lg w-[30%] border-r border-gray-400 py-2 sm:px-5 px-2">Size:</h1>
        <h1 className="sm:px-5 px-2">S, M, L, XL</h1>
      </div>
    </div>
  )
}

export default AdditionalInfo