import { MdDelete, MdEditSquare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'

function Role() {

    const navigate = useNavigate();
    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Role</h1>
                <button className="bg-[#43435e] px-4 py-2 rounded-md text-white" onClick={() => navigate('add')}>Add Role</button>
            </div>
            <div className="bg-white mt-5 rounded-md p-5 w-full">
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Search</h1>
                    <input type="text" className="outline-none bg-gray-200 w-full rounded-md py-2 px-4 font-medium text-lg" />
                </div>
                <div className="overflow-x-auto whitespace-nowrap">
                    <table className="w-full border-collapse mt-5">
                        <tr>
                            <th className="bg-[#43435e] text-white">Role Name</th>
                            <th className="bg-[#43435e] text-white">Email</th>
                            <th className="bg-[#43435e] text-white">Action</th>
                        </tr>
                        <tr>
                            <td>Maria Anders</td>
                            <td>user@users.com</td>
                            <td className='space-x-2'>
                                <button className="bg-green-600 px-2 rounded-md py-1 text-white text-2xl"><MdEditSquare /></button>
                                <button className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl"><MdDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Francisco Chang</td>
                            <td>example@example.com</td>
                            <td className='space-x-2'>
                                <button className="bg-green-600 px-2 rounded-md py-1 text-white text-2xl"><MdEditSquare /></button>
                                <button className="bg-red-600 px-2 rounded-md py-1 text-white text-2xl"><MdDelete /></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Role