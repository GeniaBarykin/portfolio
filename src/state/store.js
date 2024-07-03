import {configureStore} from "@reduxjs/toolkit"
import languageReducer from "./language/languageSlice"
export const store = configureStore({
    reducer: {
        language: languageReducer,
    },
})

