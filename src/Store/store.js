import { configureStore } from "@reduxjs/toolkit";
import StudentInfoSlice from "./StudentInfoSlice";

const store = configureStore({
    reducer: {
        details: StudentInfoSlice
    }
})

export default store