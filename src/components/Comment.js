import React from 'react'
import {getTimeElapsed} from "../utils/timeUtils";

const Comment = ({data}) => {
    // Extract comment data whether it's a top-level comment or reply
    const commentData = data.snippet.topLevelComment ?
        data.snippet.topLevelComment.snippet :
        data.snippet;

    const {
        authorDisplayName,
        authorProfileImageUrl,
        likeCount,
        publishedAt,
        textDisplay
    } = commentData;

    const defaultProfilePicUrl = "https://cdn-icons-png.flaticon.com/512/74/74472.png";
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img
                className="w-12 h-12 rounded-full"
                src={authorProfileImageUrl || defaultProfilePicUrl}
                alt="comment-profile-pic"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultProfilePicUrl;
                }}
            />
            <div className="px-3">
                <div className="flex items-center">
                    <p className="font-bold text-sm tracking-wide">{authorDisplayName}</p>
                    <span className="ml-1 text-sm text-gray-800">
                        {getTimeElapsed(publishedAt)}
                    </span>
                </div>
                <p className="mt-2">{textDisplay}</p>
                <figure className="flex items-center space-x-5 mt-2">
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/13/12/15/hand-159474_1280.png"
                        height="15px"
                        width="16px"
                        alt="thumbs-up-image"
                    />
                    <span>{likeCount}</span>
                    <img
                        src="https://www.freeiconspng.com/thumbs/youtube-dislike-png/black-and-white-youtube-dislike-21.png"
                        height="15px"
                        width="16px"
                        alt="thumbs-down-image"
                        className="ml-5"
                    />
                </figure>
            </div>
        </div>
    );
};
export default Comment