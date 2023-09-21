import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const StudentInfoSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        addName(state ,action){
            state.push(action.payload)
        },
        addAge(state, action){
            state.push(action.payload)
        },
        clearArray(state, action){
             return []
        }
    }
})

export const { addName, addAge, clearArray} = StudentInfoSlice.actions;
export default StudentInfoSlice.reducer