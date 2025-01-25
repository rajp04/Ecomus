import { useState } from "react";
import { IoEye } from "react-icons/io5";
import Logo from "../../../assets/logo.svg"
import Tree from "../../../assets/tree-removebg-preview.png"
import Main from "../../../assets/main.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {

    const [passwordHide, setPasswordHide] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const url = import.meta.env.VITE_SERVER_URL

    const navigate = useNavigate();

    const handlePassword = () => {
        setPasswordHide(!passwordHide)
    }

    const handleSubmit = async () => {
        try {
            const user = { email, password }

            const result = await axios.post(`${url}/admin/login`, user);
            if (result?.data.success === 1) {
                sessionStorage.setItem('token', result?.data.token);
                navigate('/admin');
                window.location.reload();
            } else {
                console.log(result?.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-[#43435e] md:h-[120vh] h-auto md:flex items-center justify-center">
            <div className="md:h-[80%] h-[100%] md:rounded-[50px] md:w-[80%] overflow-hidden bg-[#43435e] shadow-[0px_35px_60px_20px_rgba(0,0,0,0.3)] p-5 flex flex-col items-center text-white relative">
                <img src={Main} alt="" className="absolute top-0 left-0 w-[30%]" />
                <img src={Main} alt="" className="absolute bottom-0 right-0 rotate-180 w-[30%]" />
                <div className="min-w-[35%] py-7 z-50">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-1">
                            <img src={Tree} alt="" className="h-12" />
                            <img src={Logo} alt="" className="w-44" />
                        </div>
                        <p className="text-center pt-2">Fast & Easy Product Management</p>
                    </div>
                    <h1 className="text-3xl md:pt-14 pt-8 text-center">Welcome Back!</h1>
                    <div className="flex flex-col md:pt-16 pt-10">
                        <label htmlFor="email" className="">Email</label>
                        <input type="text" className="bg-transparent outline-none border-b-2 py-2 border-white"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col pt-5 relative">
                        <label htmlFor="password" className="">Password</label>
                        <input type={`${passwordHide === true ? "text" : "password"}`} className="bg-transparent outline-none border-b-2 pe-9 py-2 border-white" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <IoEye className="absolute text-[#27e7ef] right-2 text-2xl top-[54px] cursor-pointer" onClick={handlePassword} />
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-[#27e7ef] mt-14 cursor-pointer" onClick={handleSubmit}>
                        <button className="text-center py-2 text-gray-800 font-semibold text-2xl">Sign in</button>
                    </div>
                    <h1 className="text-center mt-10 cursor-pointer">Forget My Password</h1>
                    <div className="flex items-center justify-center space-x-4 opacity-60 mt-10">
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