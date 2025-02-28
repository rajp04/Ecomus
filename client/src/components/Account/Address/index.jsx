import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

function Address() {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [addressData, setAddressData] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const token = localStorage.getItem('userToken');
    const url = import.meta.env.VITE_SERVER_URL;

    const [formData, setFormData] = useState({
        name: "",
        country: "",
        city: "",
        address: "",
        email: "",
        mobile: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOpen = () => {
        setOpen(true);
        setEdit(false);
        setSelectedAddress(null);
        setFormData({
            name: "",
            country: "",
            city: "",
            address: "",
            email: "",
            mobile: "",
        });
    };

    const handleEdit = (item) => {
        setEdit(true);
        setSelectedAddress(item);
        setFormData({
            name: item.name,
            country: item.country,
            city: item.city,
            address: item.address,
            email: item.email,
            mobile: item.mobile,
        });
        setOpen(true);
    };

    const addAddress = async () => {
        try {
            const { data } = await axios.post(`${url}/address/create`, formData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (data?.success === 1) {
                setOpen(false);
                setFormData({
                    name: "",
                    country: "",
                    city: "",
                    address: "",
                    email: "",
                    mobile: "",
                });
            }
        } catch (error) {
            console.error("Error adding address:", error);
        }
    };

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const { data } = await axios.get(`${url}/address/${token}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (data?.success === 1) {
                    setAddressData(data?.result);
                } else {
                    console.log(data?.message);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAddress();
    });

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${url}/address/delete/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (data?.success === 1) {
                console.log(data?.message);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const updateAddress = async () => {
        try {
            const { data } = await axios.put(`${url}/address/update/${selectedAddress._id}`, formData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (data?.success === 1) {
                setEdit(false);
                setSelectedAddress(null);
                setOpen(false);
            }
        } catch (error) {
            console.error("Error updating address:", error);
        }
    };

    return (
        <>
            <div className="flex justify-center mb-8">
                <Button className="add_btn" onClick={handleOpen}>Add a new address</Button>
            </div>

            {/* Add or Edit Address Form */}
            {open && (
                <div className="border rounded-md p-5 flex flex-col w-full">
                    <h1 className="text-3xl text-center pb-5">{edit ? "Edit Address" : "Add a new address"}</h1>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, border: 1, borderColor: '#ebebeb', width: '100%', borderRadius: '5px' } }} noValidate autoComplete="off">
                        <TextField label="Name" variant="filled" fullWidth name="name" value={formData.name} onChange={handleChange} />
                    </Box>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, border: 1, borderColor: '#ebebeb', width: '100%', borderRadius: '5px' } }} noValidate autoComplete="off">
                        <TextField label="Country/Region" variant="filled" fullWidth name="country" value={formData.country} onChange={handleChange} />
                    </Box>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, border: 1, borderColor: '#ebebeb', width: '100%', borderRadius: '5px' } }} noValidate autoComplete="off">
                        <TextField label="City" variant="filled" fullWidth name="city" value={formData.city} onChange={handleChange} />
                    </Box>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, border: 1, borderColor: '#ebebeb', width: '100%', borderRadius: '5px' } }} noValidate autoComplete="off">
                        <TextField label="Address" variant="filled" fullWidth name="address" value={formData.address} onChange={handleChange} />
                    </Box>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, border: 1, borderColor: '#ebebeb', width: '100%', borderRadius: '5px' } }} noValidate autoComplete="off">
                        <TextField label="Email" variant="filled" fullWidth name="email" value={formData.email} onChange={handleChange} />
                    </Box>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, border: 1, borderColor: '#ebebeb', width: '100%', borderRadius: '5px' } }} noValidate autoComplete="off">
                        <TextField label="Phone" variant="filled" fullWidth name="mobile" value={formData.mobile} onChange={handleChange} />
                    </Box>
                    <div className="flex items-center justify-center space-x-5 pt-3">
                        <Button className="add_btn" onClick={edit ? updateAddress : addAddress}>{edit ? "Update address" : "Add address"}</Button>
                        <Button className="add_btn" onClick={() => setOpen(false)}>Cancel</Button>
                    </div>
                </div>
            )}

            {/* Address List */}
            <div className="grid grid-cols-2 gap-10 justify-between text-center pt-10">
                {addressData?.map((item, index) => (
                    <div key={index}>
                        <div className="w-[80%] m-auto">
                            <p>{item?.name}</p>
                            <p>{item?.address} {item?.city}</p>
                            <p>{item?.email}</p>
                            <p>{item?.mobile}</p>
                            <div className="space-x-3 pt-3 flex items-center justify-center">
                                <Button className="add_btn" onClick={() => handleEdit(item)}>Edit</Button>
                                <button className="border rounded-md px-5 py-[10px] font-medium border-gray-800" onClick={() => handleDelete(item?._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Address;