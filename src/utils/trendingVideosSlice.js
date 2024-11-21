import {createSlice} from "@reduxjs/toolkit";

const trendingVideosSlice = createSlice({
    name: 'trendingVideos',
    initialState: {
        videos: [],
    },
    reducers: {
        addVideos: (state, action) => {
            state.videos.push(...action.payload);
        }
    }

})

export const {addVideos} = trendingVideosSlice.actions;
export default trendingVideosSlice.reducer;