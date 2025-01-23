import { useContext } from "react";
import { MyContext } from "..";


function AdminContact() {

    const {setOpenProfile } = useContext(MyContext);

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <h1 className="text-3xl font-semibold">Users Inquiry</h1>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" />
                </div>
                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <tr>
                            <th className="bg-[#43435e] text-white">Name</th>
                            <th className="bg-[#43435e] text-white">Email</th>
                            <th className="bg-[#43435e] text-white">Message</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>user@users.com</td>
                            
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>example@example.com</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminContact