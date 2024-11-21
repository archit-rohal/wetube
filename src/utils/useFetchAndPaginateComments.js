import {useEffect, useRef, useState} from "react";
import {YOUTUBE_COMMENTS_API} from "./constants";

const useFetchAndPaginateComments = (videoId) => {
    const [comments, setComments] = useState([]);
    const useNextPageTokenRef = useRef("");
    console.log("here is nextPageTokenRef: ", useNextPageTokenRef.current);


    const getInitialComments = async () => {
        try {
            const data = await fetch(`${YOUTUBE_COMMENTS_API(videoId)}`);
            if (data.ok) {
                const json = await data.json();
                console.log("comments json: ", json);
                setComments(json.items);
                useNextPageTokenRef.current = json.nextPageToken;
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getInitialComments();
    }, []);
    return comments;
}

export default useFetchAndPaginateComments;