import { MdOutlineShoppingBasket, MdOutlinePayment } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";

function ShopGram() {

  return (
    <div className="pt-10 pb-16 w-[95%] m-auto">
      <h1 className="text-5xl text-center">Shop Gram</h1>
      <p className="text-center pt-5">Inspire and let yourself be inspired, from one unique fashion to another.</p>
      <div className="pt-12 pb-16">
        <div className="flex overflow-x-auto gap-5 scrollbar-hidden">
          <div className="flex-shrink-0 w-[280px] h-[280px] overflow-hidden rounded-md hover:scale-[1.1] transition-all duration-1000">
            <div
              className="w-full h-full bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/gallery/gallery-7.jpg')`,
              }}
            >
              <div className="hover:bg-[#0000001a] transition-all duration-1000 rounded-md h-full w-full group inline-flex items-center justify-center">
                <div className="tooltip">
                  <div className="hidden group-hover:block transition-all duration-1000">
                    <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-full p-[8px] text-3xl transition-all duration-700" />
                    <span className="tooltiptext">Quick Add</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[280px] h-[280px] overflow-hidden rounded-md hover:scale-[1.1] transition-all duration-1000">
            <div
              className="w-full h-full bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/gallery/gallery-7.jpg')`,
              }}
            >
              <div className="hover:bg-[#0000001a] transition-all duration-1000 rounded-md h-full w-full group inline-flex items-center justify-center">
                <div className="hidden group-hover:block transition-all duration-1000">
                  <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-full p-[8px] text-3xl transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[280px] h-[280px] overflow-hidden rounded-md hover:scale-[1.1] transition-all duration-1000">
            <div
              className="w-full h-full bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/gallery/gallery-7.jpg')`,
              }}
            >
              <div className="hover:bg-[#0000001a] transition-all duration-1000 rounded-md h-full w-full group inline-flex items-center justify-center">
                <div className="hidden group-hover:block transition-all duration-1000">
                  <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-full p-[8px] text-3xl transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[280px] h-[280px] overflow-hidden rounded-md hover:scale-[1.1] transition-all duration-1000">
            <div
              className="w-full h-full bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/gallery/gallery-7.jpg')`,
              }}
            >
              <div className="hover:bg-[#0000001a] transition-all duration-1000 rounded-md h-full w-full group inline-flex items-center justify-center">
                <div className="hidden group-hover:block transition-all duration-1000">
                  <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-full p-[8px] text-3xl transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[280px] h-[280px] overflow-hidden rounded-md hover:scale-[1.1] transition-all duration-1000">
            <div
              className="w-full h-full bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/gallery/gallery-7.jpg')`,
              }}
            >
              <div className="hover:bg-[#0000001a] transition-all duration-1000 rounded-md h-full w-full group inline-flex items-center justify-center">
                <div className="hidden group-hover:block transition-all duration-1000">
                  <CgShoppingBag className=" bg-white cursor-pointer hover:bg-black hover:text-white rounded-full p-[8px] text-3xl transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-3 sm:gap-8 gap-3">
        <div className="col-span-1 border flex items-center justify-center flex-col py-7 rounded-md space-y-2">
          <MdOutlineShoppingBasket className="text-3xl" />
          <h1 className="font-semibold text-2xl pt-5">Free Shipping</h1>
          <p>Free shipping over order $120</p>
        </div>
        <div className="col-span-1 border flex items-center justify-center flex-col py-7 rounded-md space-y-2">
          <MdOutlinePayment className="text-3xl" />
          <h1 className="font-semibold text-2xl pt-5">Flexible Payment</h1>
          <p>Pay with Multiple Credit Cards</p>
        </div>
        <div className="col-span-1 border flex items-center justify-center flex-col py-7 rounded-md space-y-2">
          <IoMdReturnLeft className="text-3xl" />
          <h1 className="font-semibold text-2xl pt-5">14 Day Returns</h1>
          <p>Within 30 days for an exchange</p>
        </div>
        <div className="col-span-1 border flex items-center justify-center flex-col py-7 rounded-md space-y-2">
          <BiSupport className="text-3xl" />
          <h1 className="font-semibold text-2xl pt-5">Premium Support</h1>
          <p>Outstanding premium support</p>
        </div>
      </div>
    </div>
  )
}

export default ShopGram