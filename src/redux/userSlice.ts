import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    userId: "",
    username: "guest",
    confirmed: false,
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.confirmed = action.payload.confirmed;
        },
        removeUser: (state) => {
            state =  {
                userId: "",
                username: "guest",
                confirmed: false,
            };
        }
    },
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;