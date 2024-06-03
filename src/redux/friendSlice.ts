import { createSlice } from '@reduxjs/toolkit'

interface friend {
    userId: number,
    firstName: string,
    lastName: string,
    friendStatus: number | "no friend",
}

const initialState: any = { friends: [] };

const friendSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        addFriends: (state, action) => {
            console.log(action);
            action.payload.forEach((friend: friend) => {
                console.log(friend);
               state.friends.push(friend); 
            });
        },
        removeFriends: (state) => {
            state.friends = [];
        }
    },
})

export const { addFriends, removeFriends } = friendSlice.actions;
export default friendSlice.reducer;