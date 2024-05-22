import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    userId: "",
    username: "guest",
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
        },
        removeUser: (state) => {
            state =  {
                userId: "",
                username: "guest",
            };
        }
    },
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;