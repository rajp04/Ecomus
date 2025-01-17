import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"


function Address() {

    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleEdit = (props) => {
        setEdit(props);
    };


    return (
        <>
            <div className="flex justify-center mb-8">
                <Button className="add_btn" onClick={handleOpen}>Add a new address</Button>
            </div>
            {open === true ? <div className="border rounded-md p-5 flex flex-col w-full">
                <h1 className="text-3xl text-center pb-5">Add a new address</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            m: 1,
                            border: 1,
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
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
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
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
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Company" variant="filled" fullWidth />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            m: 1,
                            border: 1,
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Address" variant="filled" fullWidth />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            m: 1,
                            border: 1,
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="City" variant="filled" fullWidth />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            m: 1,
                            border: 1,
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Country/Region" variant="filled" fullWidth />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            m: 1,
                            border: 1,
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="postal/Zip code" variant="filled" fullWidth />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            m: 1,
                            border: 1,
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Email" variant="filled" fullWidth />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            m: 1,
                            border: 1,
                            borderColor: '#ebebeb',
                            width: '100%',
                            borderRadius: '5px'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Phone" variant="filled" fullWidth />
                </Box>
                <div className="flex items-center justify-center space-x-5 pt-3">
                    <Button className="add_btn">Add address</Button>
                    <Button className="add_btn" onClick={handleOpen}>Cancle</Button>
                </div>
            </div> : ''}
            <div className="grid grid-cols-2 gap-10 justify-between text-center pt-10">
                <div className="">
                    <div className="w-[80%] m-auto">
                        <p> themesflat</p>
                        <p> 1234 Fashion Street, Suite 567 New York</p>
                        <p>info@fashionshop.com</p>
                        <p>(212) 555-1234</p>
                        <div className="space-x-3 pt-3 flex items-center justify-center">
                            <Button className="add_btn" onClick={() => handleEdit(1)}>Edit</Button>
                            <button className="border rounded-md px-5 py-[10px] font-medium border-gray-800">Delete</button>
                        </div>
                    </div>
                    {edit && <div className="border rounded-md p-5 mt-8">
                        <h1 className="text-2xl pb-2">Edit Address</h1>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
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
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
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
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Company" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Address" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="City" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Country/Region" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="postal/Zip code" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Email" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Phone" variant="filled" fullWidth />
                        </Box>
                        <div className="flex items-center justify-center space-x-5 pt-3">
                            <Button className="add_btn">Update address</Button>
                            <Button className="add_btn" onClick={handleEdit}>Cancle</Button>
                        </div>
                    </div>}
                </div>
                <div className="">
                    <div className="w-[80%] m-auto">
                        <p> themesflat</p>
                        <p> 1234 Fashion Street, Suite 567 New York</p>
                        <p>info@fashionshop.com</p>
                        <p>(212) 555-1234</p>
                        <div className="space-x-3 pt-3 flex items-center justify-center">
                            <Button className="add_btn" onClick={() => handleEdit(2)}>Edit</Button>
                            <button className="border rounded-md px-5 py-[10px] font-medium border-gray-800">Delete</button>
                        </div>
                    </div>
                    {edit && <div className="border rounded-md p-5 mt-8">
                        <h1 className="text-2xl pb-2">Edit Address</h1>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
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
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
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
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Company" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Address" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="City" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Country/Region" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="postal/Zip code" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Email" variant="filled" fullWidth />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    border: 1,
                                    borderColor: '#ebebeb',
                                    width: '100%',
                                    borderRadius: '5px'
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Phone" variant="filled" fullWidth />
                        </Box>
                        <div className="flex items-center justify-center space-x-5 pt-3">
                            <Button className="add_btn">Update address</Button>
                            <Button className="add_btn" onClick={handleEdit}>Cancle</Button>
                        </div>
                    </div>}
                </div>


            </div>
        </>
    )
}

export default Address