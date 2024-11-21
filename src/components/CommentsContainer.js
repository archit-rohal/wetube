import React from 'react'
import CommentsList from "./CommentsList";
import useFetchAndPaginateComments from "../utils/useFetchAndPaginateComments";
import {useSearchParams} from "react-router-dom";

const dummyComments = [
    {
        name: "Archit Rohal",
        text: "Lorem ipsum dolor sit amet, connectetur adip",
        replies: []
    },
    {
        name: "Archit Rohal",
        text: "Lorem ipsum dolor sit amet, connectetur adip",
        replies: [
            {
                name: "Archit Rohal",
                text: "Lorem ipsum dolor sit amet, connectetur adip",
                replies: []
            },
            {
                name: "Archit Rohal",
                text: "Lorem ipsum dolor sit amet, connectetur adip",
                replies: [
                    {
                        name: "Archit Rohal",
                        text: "Lorem ipsum dolor sit amet, connectetur adip",
                        replies: [
                            {
                                name: "Archit Rohal",
                                text: "Lorem ipsum dolor sit amet, connectetur adip",
                                replies: [
                                    {
                                        name: "Archit Rohal",
                                        text: "Lorem ipsum dolor sit amet, connectetur adip",
                                        replies: []
                                    },
                                    {
                                        name: "Archit Rohal",
                                        text: "Lorem ipsum dolor sit amet, connectetur adip",
                                        replies: [
                                            {
                                                name: "Archit Rohal",
                                                text: "Lorem ipsum dolor sit amet, connectetur adip",
                                                replies: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

        ]
    },
    {
        name: "Archit Rohal",
        text: "Lorem ipsum dolor sit amet, connectetur adip",
        replies: []
    },
    {
        name: "Archit Rohal",
        text: "Lorem ipsum dolor sit amet, connectetur adip",
        replies: []
    },
    {
        name: "Archit Rohal",
        text: "Lorem ipsum dolor sit amet, connectetur adip",
        replies: []
    },
    {
        name: "Archit Rohal",
        text: "Lorem ipsum dolor sit amet, connectetur adip",
        replies: []
    }
]

const CommentsContainer = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    const videoComments = useFetchAndPaginateComments(videoId);
    console.log("here is video comments: ", videoComments);

    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments</h1>
            <CommentsList comments={videoComments}/>
        </div>
    )
}

export default CommentsContainer