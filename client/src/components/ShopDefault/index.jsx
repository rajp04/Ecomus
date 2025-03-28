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
import { useNavigate } from "react-router-dom";

function ShopDefault() {
  const [grid, setGrid] = useState(1);
  const [screenSize, setScreenSize] = useState("lg");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const [productData, setProductData] = useState([])
  const url = import.meta.env.VITE_SERVER_URL
  const token = localStorage.getItem('userToken');

  const navigate = useNavigate();

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
        const { data } = await axios.get(`${url}/product/users`);

        if (data?.success === 1 && Array.isArray(data?.data)) {
          setProductData(data?.data);
        } else {
          setProductData([]);
        }
      } catch (error) {
        console.log(error);
        setProductData([]);
      }
    };
    fetchProduct()
  }, [url])

  const handleWishlist = async (id) => {
    try {
      const { data } = await axios.post(
        `${url}/wishlist/create`,
        { productId: id, userId: token },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data?.success === 1) {
        console.log(data?.message);
      } else {
        console.error('Error:', data?.message || 'Something went wrong');
      }

    } catch (error) {
      console.error('Request failed:', error.response?.data?.message || error.message || error);
    }
  };

  const handleAddToCart = async (item) => {
    if (token) {
      try {
        const { data } = await axios.post(
          `${url}/cart/create`,
          { productId: item._id, userId: token },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (data?.success === 1) {
          console.log(data?.message);
        } else {
          console.error('Error:', data?.message || 'Something went wrong');
        }

      } catch (error) {
        console.error('Request failed:', error.response?.data?.message || error.message || error);
      }
    } else {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      if (!Array.isArray(cartItems)) {
        localStorage.setItem("cartItems", JSON.stringify([]));
      }

      const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        cartItems.push({ ...item, qty: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

    }
  }

  const [selectedFilter, setSelectedFilter] = useState("Featured");
  const [filteredData, setFilteredData] = useState([...productData]);

  useEffect(() => {
    let sortedData = [...productData];

    switch (selectedFilter) {
      case "Best Selling":
        sortedData = sortedData.sort((a, b) => b.totalSold - a.totalSold);
        break;
      case "Alphabetically, A-Z":
        sortedData = sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Alphabetically, Z-A":
        sortedData = sortedData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price, high to low":
        sortedData = sortedData.sort((a, b) => b.variants[0].price - a.variants[0].price);
        break;
      case "Price, low to high":
        sortedData = sortedData.sort((a, b) => a.variants[0].price - b.variants[0].price);
        break;
      case "Date, old to new":
        sortedData = sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case "Date, new to old":
        sortedData = sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    setFilteredData(sortedData);
  }, [selectedFilter, productData]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

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
              className="outline-none border sm:px-4 rounded-md hover:border-black py-2 xs:text-base text-sm"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="Featured">Featured</option>
              <option value="Best Selling">Best Selling</option>
              <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
              <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
              <option value="Price, high to low">Price, high to low</option>
              <option value="Price, low to high">Price, low to high</option>
              <option value="Date, old to new">Date, old to new</option>
              <option value="Date, new to old">Date, new to old</option>
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
              {currentProducts?.map((item, index) => (
                <div className=" space-y-2 col-span-1 pb-5" key={index}>
                  <div className="flex xs:space-x-5 space-x-3 w-[100%]">
                    <div className=" rounded-md md:w-auto w-[50%]">
                      <img
                        src={item.images[0]}
                        alt=""
                        className="rounded-md hover:scale-[1.12] transition-all duration-[2s] md:max-h-[450px] h-full md:w-auto w-[100%]"
                      />
                    </div>
                    <div className="xs:space-y-3 space-y-1 md:w-auto w-[50%]">
                      <h1 className="hover:text-[red]">{item.name}</h1>
                      <h1 className="font-semibold">₹ {item?.variants[0].price}</h1>
                      <p className="max-w-[1000px] md:flex hidden">{item.description}</p>
                      <div className="flex items-center space-x-3">
                        {item.variants.map((variant, index) => (
                          <div
                            key={index}
                            className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full"
                          >
                            <p
                              className={`h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full`}
                              style={{ backgroundColor: variant.color }}
                            ></p>
                          </div>
                        ))}
                      </div>
                      <div className="space-x-3 text-black font-semibold py-1 transition-all duration-1000">
                        <span>{item.variants[0].size}</span>
                      </div>
                      <div className="flex md:space-x-3 space-x-1 transition-all duration-1000 xs:pt-5 pt-7">
                        <div className="tooltip">
                          <div className="transition-all duration-1000 " onClick={() => handleAddToCart(item)}>
                            <CgShoppingBag className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            <span className="tooltiptext">Quick Add</span>
                          </div>
                        </div>
                        {token &&
                          <div className="tooltip">
                            <div className="transition-all duration-1000 md:flex hidden" onClick={() => handleWishlist(item._id)}>
                              <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                              <span className="tooltiptext">Add to Wishlist</span>
                            </div>
                          </div>
                        }
                        <div className="tooltip">
                          <div className="transition-all duration-1000 md:flex hidden">
                            <TbArrowsCross className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            <span className="tooltiptext">Add to Compare</span>
                          </div>
                        </div>
                        <div className="tooltip">
                          <div className="transition-all duration-1000" onClick={() => navigate(`${item?._id}`)}>
                            <MdOutlineRemoveRedEye className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            <span className="tooltiptext">Quick View</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {currentProducts?.map((item, index) => (
                <div className=" space-y-2 col-span-1 pb-5" key={index}>
                  <div className="flex flex-col xs:space-x-5 space-x-3">
                    <div className="overflow-hidden rounded-md relative transition-all duration-1000 group inline-flex items-center justify-center cursor-pointer">
                      <img
                        src={item.images[0]}
                        alt={item.productName || "Product"}
                        className="rounded-md hover:scale-[1.12] transition-all duration-[2s]"
                      />
                      <div className="absolute flex space-x-3 bottom-14 transition-all duration-1000">
                        <div className="tooltip">
                          <div className="hidden group-hover:block transition-all duration-1000" onClick={() => handleAddToCart(item)}>
                            <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            <span className="tooltiptext">Quick Add</span>
                          </div>
                        </div>
                        {token &&
                          <div className="tooltip">
                            <div className="hidden group-hover:block transition-all duration-1000" onClick={() => handleWishlist(item._id)}>
                              <IoIosHeartEmpty className="bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                              <span className="tooltiptext">Add to Wishlist</span>
                            </div>
                          </div>
                        }
                        <div className="tooltip">
                          <div className="hidden group-hover:block transition-all duration-1000">
                            <TbArrowsCross className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            <span className="tooltiptext">Add to Compare</span>
                          </div>
                        </div>
                        <div className="tooltip">
                          <div className="hidden group-hover:block transition-all duration-1000" onClick={() => navigate(`${item?._id}`)}>
                            <MdOutlineRemoveRedEye className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-md p-[8px] text-4xl transition-all duration-700" />
                            <span className="tooltiptext">Quick View</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute hidden group-hover:block bottom-0 w-full space-x-3 bg-[#0000004d] z-20 text-center text-white font-semibold py-1 transition-all duration-1000">
                        <span>{item.variants[0].size}</span>
                      </div>
                    </div>
                    <div className="xs:space-y-3 space-y-1">
                      <h1 className={`hover:text-[red] ${grid === 6 ? 'h-[45px]' : ''} ${grid === 5 ? 'h-[45px]' : ''}`}>{item?.name.length > 35 ? `${item?.name.slice(0, 35)}...` : item?.name}</h1>
                      <h1 className="font-semibold">₹ {item?.variants[0].price}</h1>
                      <div className="flex items-center space-x-3">
                        {item.variants.map((variant, index) => (
                          <div
                            key={index}
                            className="hover:border border-black h-7 cursor-pointer w-7 flex items-center justify-center rounded-full"
                          >
                            <p
                              className={`h-5 w-5 hover:w-3 hover:h-3 transition-all duration-500 rounded-full`}
                              style={{ backgroundColor: variant.color }}
                            ></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          <button
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-4 py-2 border">{currentPage}</span>
          <button
            className={`px-4 py-2 rounded-md ${indexOfLastProduct >= productData.length ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white"}`}
            onClick={() => setCurrentPage((prev) => (indexOfLastProduct < productData.length ? prev + 1 : prev))}
            disabled={indexOfLastProduct >= productData.length}
          >
            Next
          </button>
        </div>
      </div >
      <Footer />
    </>
  );
}

export default ShopDefault;