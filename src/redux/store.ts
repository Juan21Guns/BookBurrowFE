import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './objectSlice';
import userReducer from './userSlice';
import bookRecsReducer from "./bookRecsSlice";

export default configureStore({
    reducer: {
        book: bookReducer,
        bookRec: bookRecsReducer,
        user: userReducer,
    }
})