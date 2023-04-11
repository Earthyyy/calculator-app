import { createSlice } from "@reduxjs/toolkit";
import {evaluate, log} from "mathjs";

const initialState = {
    value: "",
};

export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        addInput: (state, action) => {
            state.value += action.payload;
        },
        resetInput: (state) => {
            state.value = "";
        },
        deleteInput: (state) => {
            if (state.value.length > 1 && state.value !== "Error" && state.value !== "Infinity" ) state.value = state.value.slice(0, -1);
            else state.value = "";

        },
        computeInput: (state) => {
            // Calculate the result of the operation
            if (state.value === "Error" || state.value === "Infinity" || state.value === '' ) {
                state.value = "";
                return;
            }
            let result;
            try {
                result = evaluate(state.value).toString();
                state.value = result;
            } catch (error) {
                state.value = "Error"
            }


            // Replace the input with the result

            // If the result is a decimal, round it to 2 decimal places

            // If the result is a whole number, remove the decimal point

            // If the result is a whole number, add a comma every 3 digits

            // If the result is a whole number, add a comma every 3 digits


        },


    }
});

export const { addInput, resetInput, deleteInput, computeInput } = inputSlice.actions;
export default inputSlice.reducer;