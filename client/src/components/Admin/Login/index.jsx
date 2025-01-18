import { useState } from "react";
import { IoEye } from "react-icons/io5";
import Logo from "../../../assets/logo.svg"

function AdminLogin() {

    const [passwordHide, setPasswordHide] = useState(false);

    const handlePassword = () => {
        setPasswordHide(!passwordHide)
    }

    return (
        <div className="bg-[#43435e] h-[120vh] flex items-center justify-center">
            <div className="h-[80%] rounded-[50px] overflow-hidden w-[80%] bg-[#43435e] shadow-[0px_35px_60px_20px_rgba(0,0,0,0.3)] p-5 flex flex-col items-center text-white relative">

                <div className="min-w-[40%] py-10 z-50">
                    <div className="flex flex-col items-center">
                        <img src={Logo} alt="" />
                        <p className="text-center pt-2">Fast & Easy Product Management</p>
                    </div>
                    <h1 className="text-3xl pt-14 text-center">Welcome Back!</h1>
                    <div className="flex flex-col pt-16">
                        <label htmlFor="email" className="">Email</label>
                        <input type="text" className="bg-transparent outline-none border-b-2 py-2 border-white" />
                    </div>
                    <div className="flex flex-col pt-5 relative">
                        <label htmlFor="password" className="">Password</label>
                        <input type={`${passwordHide === true ? "text" : "password"}`} className="bg-transparent outline-none border-b-2 pe-9 py-2 border-white" />
                        <IoEye className="absolute text-[#27e7ef] right-2 text-2xl top-[54px] cursor-pointer" onClick={handlePassword} />
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-[#27e7ef] mt-14 cursor-pointer">
                        <button className="text-center py-2 text-gray-800 font-semibold text-2xl">Sign in</button>
                    </div>
                    <h1 className="text-center mt-10 cursor-pointer">Forget My Password</h1>
                    <div className="flex items-center justify-center space-x-4 opacity-60 mt-14">
                        <h1>Term of use</h1>
                        <p >|</p>
                        <h1>Privacy policy</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin