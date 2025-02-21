import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
    const [data, setData] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const url = import.meta.env.VITE_SERVER_URL;
    const token = localStorage.getItem("userToken");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get(`${url}/users/user`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (data?.success === 1) {
                    setData(data.result);
                    setFirstName(data.result.firstName);
                    setLastName(data.result.lastName);
                    setEmail(data.result.email);
                } else {
                    console.log(data?.message);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [url, token]);

    const handleUpdate = async () => {
        if (newPassword && newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        const updatedData = {
            firstName,
            lastName,
            email,
            currentPassword,
            newPassword
        };

        if (newPassword) {
            if (!currentPassword) {
                alert("Please enter your current password to change it.");
                return;
            }
            updatedData.currentPassword = currentPassword;
            updatedData.newPassword = newPassword;
        }

        try {
            const result = await axios.put(
                `${url}/users/update`,
                updatedData,
                { headers: { Authorization: `Bearer ${token}` } }
            );


            if (result.data.success === 1) {
                setConfirmPassword('')
                setCurrentPassword('')
                setNewPassword('')
            } else {
                console.log(result.data.message);
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div>
            <Box sx={{ m: 1 }}>
                <TextField
                    label="First Name"
                    variant="filled"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={data?.firstName}
                />
            </Box>
            <Box sx={{ m: 1 }}>
                <TextField
                    label="Last Name"
                    variant="filled"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={data?.lastName}
                />
            </Box>
            <Box sx={{ m: 1 }}>
                <TextField
                    label="Email"
                    variant="filled"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={data?.email}
                />
            </Box>

            <h1 className="text-2xl py-2">Change Password</h1>
            <Box sx={{ m: 1 }}>
                <TextField
                    label="Current Password"
                    type="password"
                    variant="filled"
                    fullWidth
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </Box>
            <Box sx={{ m: 1 }}>
                <TextField
                    label="New Password"
                    type="password"
                    variant="filled"
                    fullWidth
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </Box>
            <Box sx={{ m: 1 }}>
                <TextField
                    label="Confirm New Password"
                    type="password"
                    variant="filled"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Box>

            <div className="pt-3">
                <Button className="add_btn w-full" onClick={handleUpdate}>
                    Save Changes
                </Button>
            </div>
        </div>
    );
}

export default Details;