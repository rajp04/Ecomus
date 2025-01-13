import { Button } from "@mui/material";
import Header from "../Header"
import Footer from "../Footer"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Login() {

    const location = useLocation();
    const isRecover = location.hash === '#recover';

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
                    <h1 className="text-5xl">Log in</h1>
                </div>
                <div className="w-[80%] m-auto pt-5 grid md:grid-cols-2 grid-cols-1 md:gap-14 gap-8">
                    {isRecover ? (
                        <div className="space-y-3 col-span-1 w-full">
                            <h1 className="text-3xl">Reset your password</h1>
                            <p>We will send you an email to reset your password</p>
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
                                <TextField label="Email**" variant="filled" fullWidth />
                            </Box>
                            <div className="pb-4">
                                <Link
                                    to="/login"
                                    className="font-semibold border-b border-black w-fit pb-1 hover:text-red-600 hover:border-red-600 cursor-pointer"
                                >
                                    Cancel
                                </Link>
                            </div>
                            <Button
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '14px',
                                    padding: '12px 90px',
                                }}
                            >
                                Reset password
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-3 col-span-1 w-full">
                            <h1 className="text-3xl">Log in</h1>
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

                            <div className="pb-3">
                                <Link
                                    to="#recover"
                                    className="font-semibold border-b border-black w-fit pb-1 hover:text-red-600 hover:border-red-600 cursor-pointer"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Button
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '14px',
                                    padding: '12px 90px',
                                }}
                            >
                                Log in
                            </Button>
                        </div>
                    )}

                    <div className="space-y-5">
                        <h1 className="text-4xl">I&apos;m new here</h1>
                        <p className="md:pt-7">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
                        <Link to='/register' className="flex items-center font-medium hover:text-[red] cursor-pointer border-b w-fit border-black pb-1 hover:border-[red] text-xl">
                            <h1>Register</h1>
                            <FiArrowUpRight />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Login