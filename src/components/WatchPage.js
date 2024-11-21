import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {closeMenu} from "../utils/appSlice";
import {useSearchParams} from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import {GOOGLE_API_KEY} from "../utils/constants";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [isLiveStream, setIsLiveStream] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const checkIfLive = async () => {
            try {
                const videoId = searchParams.get("v");
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`
                );
                const data = await response.json();
                setIsLiveStream(
                    data.items[0]?.snippet?.liveBroadcastContent === "live"
                );
            } catch (e) {
                console.error(e);
            }
        };
        checkIfLive();
        dispatch(closeMenu());
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div className="px-5 flex w-full">
                <div>
                    <iframe
                        width="1200"
                        height="600"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full">
                    {isLiveStream && <LiveChat/>}
                </div>
            </div>
            <CommentsContainer/>
        </div>
    )
        ;
};

export default WatchPage;
