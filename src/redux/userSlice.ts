import { createSlice, nanoid } from '@reduxjs/toolkit'

const cookieValue = document.cookie
    .split("; ");

const userId = cookieValue
    .find((row) => row.startsWith("userid="))
    ?.split("=")[1];

const username = cookieValue
    .find((row) => row.startsWith("username="))
    ?.split("=")[1];

const confirmed = cookieValue
    .find((row) => row.startsWith("uconfirmed="))
    ?.split("=")[1];

const sub = cookieValue
    .find((row) => row.startsWith("sub="))
    ?.split("=")[1];

const exp = cookieValue
    .find((row) => row.startsWith("exp="))
    ?.split("=")[1];

const initialState = {
    userId: userId || "",
    username: username || "guest",
    confirmed: confirmed || "false",
    sub: sub || "",
    exp: exp || "",
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.confirmed = action.payload.confirmed;
            state.sub = action.payload.sub;
            state.exp = action.payload.exp;
        },
        removeUser: (state) => {
            state =  {
                userId: "",
                username: "guest",
                confirmed: "false",
                sub: "",
                exp: "",
            };
        }
    },
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;