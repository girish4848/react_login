import authSlice from "../feactures/auth/authSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
})

export default store