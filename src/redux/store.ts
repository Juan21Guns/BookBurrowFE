import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './objectSlice';

export default configureStore({
    reducer: {
        book: bookReducer,
    }
})