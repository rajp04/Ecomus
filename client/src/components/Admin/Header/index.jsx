import { useContext } from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { MyContext } from "..";
import { ImSearch } from "react-icons/im";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircleHeart } from "react-icons/lu";
import { MdOutlineLockReset } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Header() {

  const { setSidebar, sidebar, openProfile, setOpenProfile } = useContext(MyContext);
  const navigate = useNavigate()

  return (
    <div className={`h-[90px] w-full ${sidebar === true ? 'lg:pe-[320px]' : ''} text-black fixed z-10 flex items-center justify-between px-5 bg-white`}>
      <div className="flex items-center lg:space-x-0 space-x-5 text-gray-700">
        <RiMenuUnfold4Line className="lg:hidden text-3xl cursor-pointer" onClick={() => setSidebar(true)} />
        <div className="sm:flex hidden items-center space-x-2 border-b border-gray-300 pb-1 lg:min-w-96">
          <ImSearch className=" cursor-pointer" />
          <input type="text" className="outline-none font-semibold" placeholder="Search here" />
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <LuMessageCircleHeart className="bg-gray-400 text-white rounded-full p-2 h-10 w-10 cursor-pointer hover:text-blue-800 transition-all duration-200" />
        <IoMdNotificationsOutline className="bg-gray-400 text-white rounded-full p-2 h-10 w-10 cursor-pointer hover:text-blue-800 transition-all duration-200" />
        <div className="flex items-center xs:space-x-3 relative cursor-pointer" onClick={() => setOpenProfile(!openProfile)}>
          <h1 className="xs:flex hidden text-2xl">Admin</h1>
          <img src="https://res.cloudinary.com/dtdlad1ud/image/upload/v1703938887/y18sqhaus4snghlhcscm.jpg" alt="" className="h-12 w-12 rounded-full" />
          <div className={`bg-white text-black top-16 p-5 right-0 ${openProfile === true ? "absolute" : "hidden"}`}>
            <div className="whitespace-nowrap flex items-center font-semibold space-x-3 py-2 cursor-pointer" onClick={() => { navigate('/admin/profile'); setOpenProfile(false) }}>
              <CgProfile className="text-3xl" />
              <h1 className="text-xl">My Profile</h1>
            </div>
            <div className="whitespace-nowrap border-t flex items-center font-semibold space-x-3 py-2 cursor-pointer" onClick={() => { navigate('/admin'); setOpenProfile(false) }}>
              <MdOutlineLockReset className="text-3xl" />
              <h1 className="text-xl">Reset Password</h1>
            </div>
            <div className="whitespace-nowrap border-t flex items-center font-semibold space-x-3 py-2 cursor-pointer" onClick={() => { sessionStorage.removeItem('token'); navigate('/admin/login') }}>
              <BiLogOut className="text-3xl" />
              <h1 className="text-xl">Logout</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header