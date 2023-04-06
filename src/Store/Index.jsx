import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/UserSlice";

const store = configureStore({
    reducer:{
        users : usersReducer,
    }
})

export default store