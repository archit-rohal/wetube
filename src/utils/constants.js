// export const GOOGLE_API_KEY = "AIzaSyBUagqKvqGwJZdszxu-DG7PVlTHjByECmM";

// export const GOOGLE_API_KEY = "AIzaSyDYDj8HiIJtcwepyJBESow6i0F_-qoWex0";
export const GOOGLE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// export const GOOGLE_API_KEY = "AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4"

export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=17&key=" +
    GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const YOUTUBE_SEARCH_API="https://api.allorigins.win/raw?url=http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

// export const YOUTUBE_SEARCH_RESULTS_API = "https://www.googleapis.com/youtube/v3/search";

export const YOUTUBE_SEARCH_RESULTS_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

// + SEARCH_TEXT + "&type=video&key=" + GOOGLE_API_KEY;

export const OFFSET_LIVE_CHAT = 20;

// yt search results api (replace api key at the end) = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCvjgXvBlbQiydffZU7m1_aw&order=date&type=video&key=AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4"

// youtube live streaming details api (replace api key and video id ) = "https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&id=jfKfPfyJRdk&key=AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4"

// export const NEXT_PAGE_SEARCH_RESULTS = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${GOOGLE_API_KEY}&q=${searchTerm}&pageToken=${nextPageTokenRef.current}`;
// &q=click&pageToken=CBQQAA

export const NEXT_PAGE_SEARCH_RESULTS_URL = (searchTerm, pageToken) =>
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${GOOGLE_API_KEY}&q=${searchTerm}&pageToken=${pageToken}`;

export const nextPopularVideosURL = `https://youtube.googleapis.com/youtube/v3/videos&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4?`

// https://youtube.googleapis.com/youtube/v3/videos?pageToken=${nextPageTokenRef.current}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4
// `https://youtube.googleapis.com/youtube/v3/videos?pageToken=${nextPageTokenRef.current}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`

export const NEXT_PAGE_POPULAR_VIDEOS_URL = (nextPageToken) =>
    `https://youtube.googleapis.com/youtube/v3/videos?pageToken=${nextPageToken}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;


export const YOUTUBE_SEARCH_RESULTS_URL = (searchTerm) =>
    `${YOUTUBE_SEARCH_RESULTS_API}${searchTerm}&type=video&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_COMMENTS_API = (videoId, pageToken) => `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet,replies&videoId=${videoId}&maxResults=50`

//https://www.youtube.com/watch?v=XF6GM_e2KXc