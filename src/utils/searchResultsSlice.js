import {createSlice} from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
    name: "searchResults",
    initialState: {
        searchResponse: [],
    },
    reducers: {
        addSearchResponse: (state, action) => {
            const newVideos = action.payload;
            const allVideos = [...state.searchResponse, ...newVideos];
            state.searchResponse = allVideos.reduce((acc, video) => {
                if (!acc.some(item => item.id.videoId === video.id.videoId)) {
                    acc.push(video);
                }
                return acc;
            }, []);
        },
    }
})

export const {addSearchResponse} = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
