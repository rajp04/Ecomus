import Header from "../Header";
import Footer from "../Footer";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbArrowsCross } from "react-icons/tb";
import { IoIosHeartEmpty } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import { BiGridSmall, BiGridHorizontal } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ShopDefault() {
  const [grid, setGrid] = useState(4);
  const [productData, setProductData] = useState()
  const [screenSize, setScreenSize] = useState("lg");
  const url = import.meta.env.VITE_SERVER_URL
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setScreenSize("2xl");
      else if (width >= 1024) setScreenSize("xl");
      else if (width >= 768) setScreenSize("lg");
      else if (width >= 640) setScreenSize("md");
      else setScreenSize("sm");
    };

    updateScreenSize()
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleGrid = (cols) => setGrid(cols);

  const visibleButtons = {
    "2xl": [1, 2, 3, 4, 5, 6],
    xl: [1, 2, 3, 4, 5],
    lg: [1, 2, 3, 4],
    md: [1, 2, 3],
    sm: [1, 2],
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {

        const data = await axios.get(`${url}/product/users`);
        console.log(data);

        if (data?.success === 1) {
          setProductData(data?.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  })

  console.log(productData);


  return (
    <>
      <Header />
      <div className="pt-5 pb-10 w-[95%] m-auto">
        <div
          className="flex flex-col items-center justify-center py-20"
          style={{
            backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/file/page-title-blog.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-5xl pb-3">New Arrival</h1>
          <p className="opacity-80 text-center">Shop through our latest selection of Fashion</p>
        </div>

        <div className="flex items-center justify-between pt-10">
          <div className="border py-2 sm:px-4 px-1 flex items-center space-x-2 rounded-md hover:border-black transition-all duration-500 xs:text-xl font-medium cursor-pointer">
            <IoFilterSharp />
            <h1>Filter</h1>
          </div>

          {/* Buttons for Grid Layout */}
          <div className="flex items-center space-x-2 text-3xl">
            {visibleButtons[screenSize]?.map((item) => (
              <React.Fragment key={item}>
                {item % 2 === 1 ? (
                  <BiGridSmall className="cursor-pointer" onClick={() => handleGrid(item)} />
                ) : (
                  <BiGridHorizontal className="cursor-pointer" onClick={() => handleGrid(item)} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div>
            <select
              name=""
              id=""
              className="outline-none border sm:px-4 rounded-md hover:border-black py-2 xs:text-base text-sm"
            >
              <option value="">Featured</option>
              <option value="">Best Selling</option>
              <option value="">Alphabetically, A-Z</option>
              <option value="">Alphabetically, Z-A</option>
              <option value="">Price, high to low</option>
              <option value="">Price, low to high</option>
              <option value="">Date, old to new</option>
              <option value="">Date, new to old</option>
            </select>
          </div>
        </div>

        {/* Dynamic Grid Section */}
        <div
          className={`pt-16 grid xs:gap-5 gap-2`}
          style={{
            gridTemplateColumns: `repeat(${grid}, minmax(0, 1fr))`,
          }}
        >


          {/* Example Product Card */}
          {grid === 1 ? (
            <div>
              <div className=" space-y-2 col-span-1 pb-5">
                <div className="flex xs:space-x-5 space-x-3">
                  <div className="overflow-hidden rounded-md lg:w-auto md:w-[70%] w-[50%]">
                    <img
                      src="https://themesflat.co/html/ecomus/images/products/white-1.jpg"
                      alt=""
                      className="rounded-md hover:scale-[1.12] transition-all duration-[2s] md:max-h-[450px] h-full"
                    />
                  </div>
                  <div className="xs:space-y-3 space-y-1">
                    <h1 className="hover:text-[red]">Ribbed Tank Top</h1>
                    <h1 className="font-semibold">$16.95</h1>
                    <p className="max-w-[1000px] md:flex hidden">Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...</p>
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
                    <div className="space-x-3 text-black font-semibold py-1 transition-all duration-1000">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                    <div className="flex md:space-x-3 space-x-1 transition-all duration-1000 xs:pt-5 pt-7">
                      <div className="tooltip">
                        <div className="transition-all duration-1000 ">
                          <CgShoppingBag className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Quick Add</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 md:flex hidden">
                          <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Add to Wishlist</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 md:flex hidden">
                          <TbArrowsCross className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Add to Compare</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 ">
                          <MdOutlineRemoveRedEye className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Quick View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" space-y-2 col-span-1 pb-5">
                <div className="flex xs:space-x-5 space-x-3">
                  <div className="overflow-hidden rounded-md lg:w-auto md:w-[70%] w-[50%]">
                    <img
                      src="https://themesflat.co/html/ecomus/images/products/white-1.jpg"
                      alt=""
                      className="rounded-md hover:scale-[1.12] transition-all duration-[2s] md:max-h-[450px] h-full"
                    />
                  </div>
                  <div className="xs:space-y-3 space-y-1">
                    <h1 className="hover:text-[red]">Ribbed Tank Top</h1>
                    <h1 className="font-semibold">$16.95</h1>
                    <p className="max-w-[1000px] md:flex hidden">Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...</p>
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
                    <div className="space-x-3 text-black font-semibold py-1 transition-all duration-1000">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                    <div className="flex md:space-x-3 space-x-1 transition-all duration-1000 xs:pt-5 pt-7">
                      <div className="tooltip">
                        <div className="transition-all duration-1000 ">
                          <CgShoppingBag className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Quick Add</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 md:flex hidden">
                          <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Add to Wishlist</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 md:flex hidden">
                          <TbArrowsCross className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Add to Compare</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 ">
                          <MdOutlineRemoveRedEye className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Quick View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" space-y-2 col-span-1 pb-5">
                <div className="flex xs:space-x-5 space-x-3">
                  <div className="overflow-hidden rounded-md lg:w-auto md:w-[70%] w-[50%]">
                    <img
                      src="https://themesflat.co/html/ecomus/images/products/white-1.jpg"
                      alt=""
                      className="rounded-md hover:scale-[1.12] transition-all duration-[2s] md:max-h-[450px] h-full"
                    />
                  </div>
                  <div className="xs:space-y-3 space-y-1">
                    <h1 className="hover:text-[red]">Ribbed Tank Top</h1>
                    <h1 className="font-semibold">$16.95</h1>
                    <p className="max-w-[1000px] md:flex hidden">Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...</p>
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
                    <div className="space-x-3 text-black font-semibold py-1 transition-all duration-1000">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                    <div className="flex md:space-x-3 space-x-1 transition-all duration-1000 xs:pt-5 pt-7">
                      <div className="tooltip">
                        <div className="transition-all duration-1000 ">
                          <CgShoppingBag className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Quick Add</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 md:flex hidden">
                          <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Add to Wishlist</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 md:flex hidden">
                          <TbArrowsCross className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Add to Compare</span>
                        </div>
                      </div>
                      <div className="tooltip">
                        <div className="transition-all duration-1000 ">
                          <MdOutlineRemoveRedEye className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                          <span className="tooltiptext">Quick View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-2 col-span-1 pb-5">
                <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                  <img
                    src="https://themesflat.co/html/ecomus/images/products/white-1.jpg"
                    alt=""
                    className="rounded-md hover:scale-[1.12] transition-all duration-[2s]"
                  />
                  <div className="absolute flex xs:space-x-3 space-x-1 bottom-14 transition-all duration-1000">
                    <div className="tooltip">
                      <div className="hidden group-hover:block transition-all duration-1000 ">
                        <CgShoppingBag className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Quick Add</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden xs:group-hover:block transition-all duration-1000 ">
                        <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Add to Wishlist</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden xs:group-hover:block transition-all duration-1000 ">
                        <TbArrowsCross className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Add to Compare</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden group-hover:block transition-all duration-1000 ">
                        <MdOutlineRemoveRedEye className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
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
                  <img
                    src="https://themesflat.co/html/ecomus/images/products/white-1.jpg"
                    alt=""
                    className="rounded-md hover:scale-[1.12] transition-all duration-[2s]"
                  />
                  <div className="absolute flex xs:space-x-3 space-x-1 bottom-14 transition-all duration-1000">
                    <div className="tooltip">
                      <div className="hidden group-hover:block transition-all duration-1000 ">
                        <CgShoppingBag className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Quick Add</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden xs:group-hover:block transition-all duration-1000 ">
                        <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Add to Wishlist</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden xs:group-hover:block transition-all duration-1000 ">
                        <TbArrowsCross className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Add to Compare</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden group-hover:block transition-all duration-1000 ">
                        <MdOutlineRemoveRedEye className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
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
                  <img
                    src="https://themesflat.co/html/ecomus/images/products/white-1.jpg"
                    alt=""
                    className="rounded-md hover:scale-[1.12] transition-all duration-[2s]"
                  />
                  <div className="absolute flex xs:space-x-3 space-x-1 bottom-14 transition-all duration-1000">
                    <div className="tooltip">
                      <div className="hidden group-hover:block transition-all duration-1000 ">
                        <CgShoppingBag className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Quick Add</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden xs:group-hover:block transition-all duration-1000 ">
                        <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Add to Wishlist</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden xs:group-hover:block transition-all duration-1000 ">
                        <TbArrowsCross className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                        <span className="tooltiptext">Add to Compare</span>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="hidden group-hover:block transition-all duration-1000 ">
                        <MdOutlineRemoveRedEye className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
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
            </>
          )}
        </div>
      </div >
      <Footer />
    </>
  );
}

export default ShopDefault;