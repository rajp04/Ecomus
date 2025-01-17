import { CgShoppingBag } from "react-icons/cg"
import { IoIosHeartEmpty } from "react-icons/io";
import { TbArrowsCross } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";


function Wishlist() {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xxs:grid-cols-2 grid-cols-1 sm:gap-8 gap-3">
                <div className="space-y-2 col-span-1 pb-5">
                    <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                        <img src="https://themesflat.co/html/ecomus/images/products/white-1.jpg" alt="" className="rounded-md hover:scale-[1.12] transition-all duration-[2s]" />
                        <div className="absolute flex space-x-3 bottom-14 transition-all duration-1000">
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000 ">
                                    <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Quick Add</span>
                                </div>
                            </div>
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000 ">
                                    <IoIosHeartEmpty className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Add to Wishlist</span>
                                </div>
                            </div>
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000 ">
                                    <TbArrowsCross className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Add to Compare</span>
                                </div>
                            </div>
                            <div className="tooltip">
                                <div className="hidden group-hover:block transition-all duration-1000 ">
                                    <MdOutlineRemoveRedEye className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                                    <span className="tooltiptext">Quick View</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute hidden group-hover:block bottom-0 w-full space-x-3 bg-[#0000004d] z-20 text-center text-white font-semibold py-1 transition-all duration-1000">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <h1 className="hover:text-[red]">Ribbed Tank Top</h1>
                    <h1 className="font-semibold">$16.95</h1>
                    <div className="flex items-center space-x-3">
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-[yellow] h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-[black] h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-gray-200 h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 col-span-1 pb-5">
                    <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                        <img src="https://themesflat.co/html/ecomus/images/products/white-1.jpg" alt="" className="rounded-md hover:scale-[1.12] transition-all duration-[2s]" />
                        <div className="absolute flex space-x-3 bottom-14 transition-all duration-1000">
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <IoIosHeartEmpty className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <TbArrowsCross className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <MdOutlineRemoveRedEye className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                        </div>
                        <div className="absolute hidden group-hover:block bottom-0 w-full space-x-3 bg-[#0000004d] z-20 text-center text-white font-semibold py-1 transition-all duration-1000">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <h1>Ribbed Tank Top</h1>
                    <h1 className="font-semibold">$16.95</h1>
                    <div className="flex items-center space-x-3">
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-[yellow] h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-[black] h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-gray-200 h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 col-span-1 pb-5">
                    <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                        <img src="https://themesflat.co/html/ecomus/images/products/white-1.jpg" alt="" className="rounded-md hover:scale-[1.12] transition-all duration-[2s]" />
                        <div className="absolute flex space-x-3 bottom-14 transition-all duration-1000">
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <IoIosHeartEmpty className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <TbArrowsCross className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <MdOutlineRemoveRedEye className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                        </div>
                        <div className="absolute hidden group-hover:block bottom-0 w-full space-x-3 bg-[#0000004d] z-20 text-center text-white font-semibold py-1 transition-all duration-1000">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <h1>Ribbed Tank Top</h1>
                    <h1 className="font-semibold">$16.95</h1>
                    <div className="flex items-center space-x-3">
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-[yellow] h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-[black] h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-gray-200 h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 col-span-1 pb-5">
                    <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                        <img src="https://themesflat.co/html/ecomus/images/products/white-1.jpg" alt="" className="rounded-md hover:scale-[1.12] transition-all duration-[2s]" />
                        <div className="absolute flex space-x-3 bottom-14 transition-all duration-1000">
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <IoIosHeartEmpty className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <TbArrowsCross className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                            <div className="hidden group-hover:block transition-all duration-1000">
                                <MdOutlineRemoveRedEye className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            </div>
                        </div>
                        <div className="absolute hidden group-hover:block bottom-0 w-full space-x-3 bg-[#0000004d] z-20 text-center text-white font-semibold py-1 transition-all duration-1000">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <h1>Ribbed Tank Top</h1>
                    <h1 className="font-semibold">$16.95</h1>
                    <div className="flex items-center space-x-3">
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-[yellow] h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-[black] h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                        <div className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full">
                            <p className="bg-gray-200 h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full"></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Wishlist