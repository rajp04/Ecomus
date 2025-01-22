import { MdDelete } from "react-icons/md"


function Users() {
    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5">
            <h1 className="text-3xl font-semibold">Users</h1>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" />
                </div>
                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <tr>
                            <th className="bg-[#43435e] text-white">First Name</th>
                            <th className="bg-[#43435e] text-white">Last Name</th>
                            <th className="bg-[#43435e] text-white">Email</th>
                            <th className="bg-[#43435e] text-white">Action</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>user@users.com</td>
                            <td>
                                <button className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl"><MdDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>example@example.com</td>
                            <td>
                                <button className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl"><MdDelete /></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users