import { useContext } from "react";
import { MyContext } from "..";


function Profile() {

  const {setOpenProfile } = useContext(MyContext);

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <h1 className="text-3xl font-semibold">My Profile</h1>
            <div className="bg-white p-5 mt-5 rounded-md flex xs:flex-row flex-col xs:items-center xs:space-x-5 space-y-3">
                <img src="https://res.cloudinary.com/dtdlad1ud/image/upload/v1703938887/y18sqhaus4snghlhcscm.jpg" alt="" className="xs:h-32 h-20 xs:w-32 w-20 rounded-full" />
                <div>
                    <h1 className="text-3xl font-semibold ">Admin</h1>
                    <h1>admin_ecomus</h1>
                    <h1>Admin@ecomus.com</h1>
                </div>
            </div>
            <div className="bg-white p-5 mt-5 rounded-md">
                <h1 className="text-xl font-semibold">Personal Information</h1>
                <div className="mt-5 grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5">
                    <div className="w-full col-span-1 flex flex-col">
                        <label htmlFor="" className="text-lg font-medium pb-1">User Name:</label>
                        <input type="text" className="border outline-none px-4 py-2 rounded-md col-span-1" />
                    </div>
                    <div className="w-full col-span-1 flex flex-col">
                        <label htmlFor="" className="text-lg font-medium pb-1">Role Name:</label>
                        <input type="text" className="border outline-none px-4 py-2 rounded-md col-span-1" />
                    </div>
                    <div className="w-full col-span-1 flex flex-col">
                        <label htmlFor="" className="text-lg font-medium pb-1">Email:</label>
                        <input type="text" className="border outline-none px-4 py-2 rounded-md col-span-1" />
                    </div>
                </div>
                <button className="px-20 py-2 sm:w-auto w-full bg-[#43435e] rounded-md text-white mt-5 text-xl font-semibold">Submit</button>
            </div>
        </div>
    )
}

export default Profile