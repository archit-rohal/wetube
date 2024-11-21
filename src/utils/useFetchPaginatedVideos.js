import {
    NEXT_PAGE_POPULAR_VIDEOS_URL,
    YOUTUBE_SEARCH_RESULTS_URL,
    NEXT_PAGE_SEARCH_RESULTS_URL, YOUTUBE_VIDEOS_API,
} from "./constants";
import {addVideos} from "./trendingVideosSlice";
import {addSearchResponse} from "./searchResultsSlice";
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";

const useFetchPaginatedVideos = (searchTerm) => {
    const dispatch = useDispatch();

    const totalResultsRef = useRef(0);
    const nextPageTokenRef = useRef("");
    const videosLengthRef = useRef(0);

    let isFetching = false;

    const getInitialVideos = async () => {
        try {
            const data = await fetch(
                searchTerm
                    ? YOUTUBE_SEARCH_RESULTS_URL(searchTerm)
                    : YOUTUBE_VIDEOS_API
            );
            if (!data.ok) {
                throw new Error(data.status);
            }
            const json = await data.json();
            totalResultsRef.current = json.pageInfo.totalResults;
            nextPageTokenRef.current = json.nextPageToken;
            videosLengthRef.current = json.items.length;
            if (searchTerm) {
                dispatch(addSearchResponse(json.items));
            } else {
                dispatch(addVideos(json.items));
            }
        } catch (e) {
            console.error(e);
        }
    };

    const getNextPageVideos = async () => {
        try {
            const data = await fetch(
                searchTerm
                    ? NEXT_PAGE_SEARCH_RESULTS_URL(searchTerm, nextPageTokenRef.current)
                    : NEXT_PAGE_POPULAR_VIDEOS_URL(nextPageTokenRef.current)
            );
            if (!data.ok) {
                throw new Error("Failed to fetch next page results");
            }
            const json = await data.json();
            nextPageTokenRef.current = json.nextPageToken;
            videosLengthRef.current += json.items.length;
            if (searchTerm) {
                dispatch(addSearchResponse(json.items));
            } else {
                dispatch(addVideos(json.items));
            }
        } catch (e) {
            console.error(e);
        }
    };

    function handleScroll() {
        // Guard clause - return early if already fetching
        if (isFetching) return;

        // Calculate scroll position
        const buffer = 100; // pixels before bottom to trigger load
        const atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - buffer;

        // Return if not at bottom or no more results to fetch
        if (!atBottom || videosLengthRef.current >= totalResultsRef.current) return;

        // Start fetch and reset flag when done
        isFetching = true;
        getNextPageVideos().finally(() => {
            isFetching = false;
        });
    }

    useEffect(() => {
        totalResultsRef.current = 0;
        nextPageTokenRef.current = "";
        videosLengthRef.current = 0;
        getInitialVideos();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [searchTerm]);
};

export default useFetchPaginatedVideos;