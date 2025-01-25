import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    status: 'idle',
    error: null,
};

// Fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const token = sessionStorage.getItem('token');
    const { data } = await axios.get(`http://localhost:7001/api/users`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
});

// Delete user
export const fetchDelete = createAsyncThunk(
    'users/fetchDelete',
    async (userId, { dispatch }) => {
        const token = sessionStorage.getItem('token');
        await axios.delete(`http://localhost:7001/api/users/delete/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        dispatch(removeUser(userId));
        return userId;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        removeUser(state, action) {
            state.users = state.users.filter(user => user._id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                // console.log("Users fetched:", action.payload); 
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;