import Header from "../Header"
import Footer from "../Footer"

function Checkout() {
    return (
        <>
            <Header />
            <div className="pt-5">
                <div className="flex items-center justify-center py-24" style={{
                    backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/file/page-title-blog.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} >
                    <h1 className="sm:text-5xl text-4xl">Check Out</h1>
                </div>
            </div>

            <div className="grid llg:grid-cols-12 xl:gap-10 gap-7 w-[95%] m-auto py-16">
                <div className="col-span-8 space-y-5">
                    <h1 className="text-3xl font-semibold">Billing details</h1>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="" className="font-medium">Name<span className="text-[red]">*</span></label>
                        <input type="text" className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="" className="font-medium">Country/Region<span className="text-[red]">*</span></label>
                        <input type="text" className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="" className="font-medium">Town/City<span className="text-[red]">*</span></label>
                        <input type="text" className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="" className="font-medium">Address<span className="text-[red]">*</span></label>
                        <input type="text" className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="" className="font-medium">Phone Number<span className="text-[red]">*</span></label>
                        <input type="text" className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="" className="font-medium">Email<span className="text-[red]">*</span></label>
                        <input type="text" className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="" className="font-medium">Order notes (optional)</label>
                        <textarea type="text" className="border border-gray-300 rounded-md py-3 px-4 opacity-60 outline-black w-full" />
                    </div>
                </div>
                <div className="llg:col-span-4 col-span-8">
                    <h1 className="text-3xl font-semibold sm:pb-0 pb-5">Your order</h1>
                    <div className="sm:p-6 space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 relative">
                                <img src="https://themesflat.co/html/ecomus/images/products/brown.jpg" alt="" className="h-20 border" />
                                <h1 className="absolute bg-gray-500 text-white rounded-full px-2 -top-3 left-8">1</h1>
                                <div>
                                    <h1>Ribbed modal T-shirt</h1>
                                    <p className="opacity-60">Brown / M</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-gray-800">$25.00</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 relative">
                                <img src="https://themesflat.co/html/ecomus/images/products/brown.jpg" alt="" className="h-20 border" />
                                <h1 className="absolute bg-gray-500 text-white rounded-full px-2 -top-3 left-8">1</h1>
                                <div>
                                    <h1>Ribbed modal T-shirt</h1>
                                    <p className="opacity-60">Brown / M</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-gray-800">$25.00</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 relative">
                                <img src="https://themesflat.co/html/ecomus/images/products/brown.jpg" alt="" className="h-20 border" />
                                <h1 className="absolute bg-gray-500 text-white rounded-full px-2 -top-3 left-8">1</h1>
                                <div>
                                    <h1>Ribbed modal T-shirt</h1>
                                    <p className="opacity-60">Brown / M</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-gray-800">$25.00</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 relative">
                                <img src="https://themesflat.co/html/ecomus/images/products/brown.jpg" alt="" className="h-20 border" />
                                <h1 className="absolute bg-gray-500 text-white rounded-full px-2 -top-3 left-8">1</h1>
                                <div>
                                    <h1>Ribbed modal T-shirt</h1>
                                    <p className="opacity-60">Brown / M</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-gray-800">$25.00</h1>
                            </div>
                        </div>
                        <div className="flex xs:flex-row flex-col items-center xs:space-x-3 xs:space-y-0 space-y-3">
                            <input type="text" placeholder="Discount Code" className="opacity-60 px-3 py-3 outline-none border border-gray-300 rounded-md w-full" />
                            <button className="add_btn rounded-md xs:w-auto w-full">Apply</button>
                        </div>
                        <div className="text-2xl font-semibold flex justify-between">
                            <h1>Total</h1>
                            <h1>$112.00</h1>
                        </div>
                        <div className="space-y-2">
                            <div className="space-x-5">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Direct bank transfer</label>
                            </div>
                            <div className="space-x-5">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Cash on delivery</label>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-black underline font-medium">privacy policy</span>.</p>
                        </div>
                        <div className="space-x-3 flex">
                            <input type="checkbox" name="" id="" />
                            <p className="text-gray-500 text-sm">I have read and agree to the website <span className="text-black underline font-medium">terms and conditions</span>.</p>
                        </div>
                        <button className="text-center w-full bg-black text-white rounded-md py-3">Place order</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout