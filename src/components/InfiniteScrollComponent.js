import React, {useEffect, useState} from 'react';
import {YOUTUBE_COMMENTS_API} from "../utils/constants";
import CommentsList from "./CommentsList";

const InfiniteScrollComponent = () => {
    const [comments, setComments] = useState([]);
    const getInitialComments = async () => {
        try {
            const data = await fetch(`${YOUTUBE_COMMENTS_API}`);
            if (data.status !== 200) {
                throw new Error(`fetch api call failed`)
            }
            const json = await data.json();
            setComments(json.items);
        } catch (e) {
            console.error(e);
        }
    }
    console.log(comments);

    useEffect(() => {
        getInitialComments();
    }, []);
    return (
        <div>
            <h1 className="text-2xl font-bold">Comments</h1>
        </div>
    );
};

export default InfiniteScrollComponent;