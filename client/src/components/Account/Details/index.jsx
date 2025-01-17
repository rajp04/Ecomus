import { Box, Button, TextField } from "@mui/material"


function Details() {
    return (
        <div>
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
                <TextField label="Email" variant="filled" fullWidth />
            </Box>
            <h1 className="text-2xl py-2">Password Change</h1>
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
                <TextField label="Current password" variant="filled" fullWidth />
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
                <TextField label="New password" variant="filled" fullWidth />
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
                <TextField label="Confirm password" variant="filled" fullWidth />
            </Box>
            <div className="pt-3">
                <Button className="add_btn w-full">Save Changes</Button>
            </div>
        </div>
    )
}

export default Details