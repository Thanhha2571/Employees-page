import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { sidebarSlice } from "./slices/sidebarSlice";
const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        sidebar: sidebarSlice.reducer
    }
})

export default store;