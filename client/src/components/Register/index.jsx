import { Box, Button, TextField } from "@mui/material"
import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/fi"


function Register() {
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
                        <TextField label="First name" variant="filled" fullWidth />
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
                        <TextField label="Last name" variant="filled" fullWidth />
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
                        <TextField label="Email *" variant="filled" fullWidth />
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
                        <TextField label="Password *" variant="filled" fullWidth />
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