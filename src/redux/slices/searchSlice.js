import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
    },
    reducers: {
        searchInformation: (state, action) => {
            state.query = action.payload; 
        },
    },
});

export const { searchInformation } = searchSlice.actions;
export default searchSlice.reducer;
