import { Box, Button, TextField } from "@mui/material"
import Header from "../Header"
import Footer from "../Footer"
import { Link, useNavigate } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/fi"
import { useState } from "react"
import axios from 'axios'

function Register() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const url = import.meta.env.VITE_SERVER_URL
    const navigate = useNavigate()

    const handleRegister = async () => {
        try {
            const register = { firstName, lastName, email, password };
            const { data } = await axios.post(`${url}/users/register`, register);

            if (data?.success === 1) {
                navigate('/login')
            } else {
                setError(data?.message);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <div className="pt-5 pb-10">
                <div className="flex items-center justify-center py-24" style={{
                    backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/file/page-title-blog.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} >
                    <h1 className="text-5xl">Register</h1>
                </div>

                <div className="max-w-2xl m-auto px-5">
                    <h1 className="text-3xl pb-4">Register</h1>
                    <p className="md:pb-10 mb-4 text-gray-700">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {
                                m: 1,
                                border: 1,
                                bgcolor: '#ffffff',
                                borderColor: '#ebebeb',
                                width: '100%',
                            },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="First name" variant="filled" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {
                                m: 1,
                                border: 1,
                                bgcolor: '#ffffff',
                                borderColor: '#ebebeb',
                                width: '100%',
                            },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Last name" variant="filled" fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {
                                m: 1,
                                border: 1,
                                bgcolor: '#ffffff',
                                borderColor: '#ebebeb',
                                width: '100%',
                            },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Email *" variant="filled" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Box>
                    <h1 className="text-red-500 ps-2 font-medium">{error}</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {
                                m: 1,
                                border: 1,
                                bgcolor: '#ffffff',
                                borderColor: '#ebebeb',
                                width: '100%',
                            },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Password *" type="password" variant="filled" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Box>
                    <Button
                        sx={{
                            bgcolor: 'black',
                            color: 'white',
                            fontSize: '14px',
                            padding: '10px 0px',
                            width: '100%',
                            marginTop: '20px'
                        }}
                        onClick={handleRegister}
                    >
                        Register
                    </Button>

                    <Link to='/login' className="pt-7 flex items-center justify-center font-medium hover:text-[red] cursor-pointer border-b w-fit m-auto border-black pb-1 hover:border-[red]">
                        <h1 className="text-center">Already have an account? Log in here</h1>
                        <FiArrowUpRight />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register