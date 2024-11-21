import {createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            // state = Object.assign(state, action.payload); this is also valid
            return {...state, ...action.payload}
        },
    },
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;