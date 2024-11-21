import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import trendingVideosSlice from "./trendingVideosSlice";
import searchResultsSlice from "./searchResultsSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        trendingVideos: trendingVideosSlice,
        searchResults: searchResultsSlice,
    },
});

export default store;
