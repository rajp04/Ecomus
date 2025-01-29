import { useContext, useState } from "react";
import { MyContext } from "../..";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

function EditRole() {

    const { state } = useLocation();

    const { setOpenProfile } = useContext(MyContext);
    const navigate = useNavigate();
    const url = import.meta.env.VITE_SERVER_URL

    const [name, setName] = useState(state?.role?.name || "");
    const [email, setEmail] = useState(state?.email || "");
    const [userName, setUserName] = useState(state?.userName || "");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [permissions, setPermissions] = useState({
        dashboard: { all: false, view: false, edit: false, add: false, delete: false },
        users: { all: false, view: false, edit: false, add: false, delete: false },
        products: { all: false, view: false, edit: false, add: false, delete: false },
        inquiry: { all: false, view: false, edit: false, add: false, delete: false },
        orders: { all: false, view: false, edit: false, add: false, delete: false },
        role: { all: false, view: false, edit: false, add: false, delete: false },
    });

    const handleAllCheck = (section) => {
        const allChecked = !permissions[section].all;
        setPermissions((prev) => ({
            ...prev,
            [section]: {
                all: allChecked,
                view: allChecked,
                edit: allChecked,
                add: allChecked,
                delete: allChecked,
            },
        }));
    };

    const handleIndividualCheck = (section, key) => {
        setPermissions((prev) => {
            const updatedSection = {
                ...prev[section],
                [key]: !prev[section][key],
            };

            updatedSection.all =
                updatedSection.view &&
                updatedSection.edit &&
                updatedSection.add &&
                updatedSection.delete;

            return { ...prev, [section]: updatedSection };
        });
    };

    const handleSubmit = async () => {
        const formattedPermissions = Object.keys(permissions).reduce((acc, section) => {
            acc[section] = Object.keys(permissions[section])
                .filter((key) => key !== "all" && permissions[section][key]);
            return acc;
        }, {});

        const payload = {
            name,
            permissions: formattedPermissions,
        };

        try {
            const token = sessionStorage.getItem("token");

            // Update role
            const roleResponse = await axios.put(
                `${url}/role/update/${state?.role?._id}`,
                payload,
                { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } }
            );

            // Update admin
            const adminPayload = {
                email,
                password,
                userName
            };

            const adminResponse = await axios.put(
                `${url}/admin/update/${state?._id}`,
                adminPayload,
                { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } }
            );

            console.log(adminResponse);
            console.log(roleResponse);
            console.log(state?._id);

            if (roleResponse?.data?.success === 1 && adminResponse?.data?.success === 1) {
                navigate("/admin/role");
            } else {
                setError(adminResponse?.data?.message)
            }

        } catch (error) {
            console.error("Error updating role or admin:", error.response?.data || error.message);
        }
    };

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <h1 className="text-3xl font-semibold">Edit Role</h1>
            <h1 className="text-red-500 font-medium">{error}</h1>
            <div className="bg-white p-5 mt-5 rounded-md space-y-4">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold pb-3">Permissions:-</h1>
                    {Object.keys(permissions).map((section) => (
                        <div key={section} className='flex sm:flex-row flex-col sm:items-center sm:space-x-5 sm:space-y-0 space-y-2'>
                            <h1 className="text-xl font-medium min-w-40">
                                {section.charAt(0).toUpperCase() + section.slice(1)} :-
                            </h1>
                            <div className='grid xs:grid-cols-5 grid-cols-3 gap-5'>
                                {['all', 'view', 'edit', 'add', 'delete'].map((key) => (
                                    <div key={key} className='flex items-center space-x-2'>
                                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                        <input
                                            type="checkbox"
                                            checked={permissions[section][key]}
                                            onChange={() =>
                                                key === 'all'
                                                    ? handleAllCheck(section)
                                                    : handleIndividualCheck(section, key)
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 pt-5">
                    <div className="col-span-1 flex flex-col space-y-1 w-full">
                        <label htmlFor="" className="font-medium text-xl">Name:-</label>
                        <input type="text" className="outline-none border rounded-md bg-gray-200 px-4 py-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-span-1 flex flex-col space-y-1 w-full">
                        <label htmlFor="" className="font-medium text-xl">User Name:-</label>
                        <input type="text" className="outline-none border rounded-md bg-gray-200 px-4 py-2 w-full" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="col-span-1 flex flex-col space-y-1 w-full">
                        <label htmlFor="" className="font-medium text-xl">Email:-</label>
                        <input type="text" className="outline-none border rounded-md bg-gray-200 px-4 py-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-span-1 flex flex-col space-y-1 w-full">
                        <label htmlFor="" className="font-medium text-xl">Password:-</label>
                        <input type="password" className="outline-none border rounded-md bg-gray-200 px-4 py-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button className="px-8 py-2 rounded-md mt-5 text-white text-xl font-semibold bg-[#43435e]" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default EditRole