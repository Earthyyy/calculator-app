import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import inputReducer from "../features/inputSlice";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        input: inputReducer,
    },
});