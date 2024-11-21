import React from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {getTimeElapsed} from "../utils/timeUtils";
import {useSelector} from "react-redux";
import useFetchPaginatedVideos from "../utils/useFetchPaginatedVideos";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("search_query");
    const searchResultsArray = useSelector(store => store.searchResults.searchResponse);

    useFetchPaginatedVideos(searchTerm);

    console.log("search results array: ", searchResultsArray);


    return (
        <div>
            <div className="px-5">
                {searchResultsArray?.map(item => {
                    const {
                        id: {videoId},
                        snippet: {
                            title,
                            description,
                            channelTitle,
                            publishedAt,
                            liveBroadcastContent,
                            thumbnails: {high: {url, width, height}}
                        }
                    } = item;
                    return (
                        <Link to={"/watch?v=" + videoId} key={videoId}>
                            <div className="px-5 py-4 flex">
                                <div className="mr-5">
                                    <img src={url} alt="search-item-thumbnail"
                                         height={height}
                                         width={width}
                                         className="rounded-lg"/>
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium">{title}</h4>
                                    <p className="text-gray-500 pl-2">{getTimeElapsed(publishedAt)}</p>
                                    <p className="text-gray-600">🔴 {channelTitle} ✔</p>
                                    <p className="text-gray-600 text-wrap">{description}</p>
                                    {liveBroadcastContent === "live" && <img
                                        src={"https://img.freepik.com/premium-vector/youtube-live-stream-icon-red-black_609989-1411.jpg"}
                                        alt="live-image" height="20px" width="60px"/>}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchResults;