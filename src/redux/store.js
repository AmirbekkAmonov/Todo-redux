import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./slices/addSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        add: addReducer,
        search: searchReducer,
    },
});

export default store;
