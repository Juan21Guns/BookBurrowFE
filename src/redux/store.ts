import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './objectSlice';
import userReducer from './userSlice';
import bookRecsReducer from "./bookRecsSlice";
import friendReducer from "./friendSlice";

export default configureStore({
    reducer: {
        book: bookReducer,
        bookRec: bookRecsReducer,
        user: userReducer,
        friend: friendReducer,
    }
})