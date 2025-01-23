import { createContext, useEffect, useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet, useNavigate } from "react-router-dom";

const MyContext = createContext();

function Admin() {

    const [sidebar, setSidebar] = useState(null);
    const [openProfile, setOpenProfile] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            return navigate('/admin/login')
        }
    },)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebar(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const value = { setSidebar, sidebar, openProfile, setOpenProfile }

    return (
        <MyContext.Provider value={value}>
            <div className="h-screen w-screen overflow-hidden flex">
                <div className={`bg-[#43435e] w-[300px] z-20 fixed transition-all duration-500 h-full overflow-x-auto scroll-hidden ${sidebar === true ? ' left-0' : '-left-full w-[0px]'}`}>
                    <Sidebar />
                </div>
                <div className={`w-full overflow-y-auto overflow-x-hidden bg-gray-200 ${sidebar === true ? 'lg:ps-[300px]' : ''}`}>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </MyContext.Provider>
    )
}

export default Admin
export { MyContext }