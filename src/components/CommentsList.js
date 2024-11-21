import React from 'react';
import Comment from './Comment';

const CommentsList = ({comments}) => {
    return (
        <div>
            {comments?.map((comment, index) => (
                <div key={index}>
                    <Comment data={comment}/>
                    {comment.replies?.comments?.length > 0 && (
                        <div className="pl-5 border border-l-black ml-5">
                            <CommentsList comments={comment.replies.comments}/>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommentsList;

// import React from 'react'
// import Comment from "./Comment";
//
// const CommentsList = ({comments, hasReplies}) => {
//     console.log("comments from commentsList: ", comments);
//
//     console.log("batman: ", hasReplies)
//
//
//     return (
//         <div>
//             {comments?.map((comment, index) => (
//                 <div key={index}>
//                     <Comment data={comment}/>
//                     <div className="pl-5 border border-l-black ml-5">
//                         {hasReplies && <CommentsList comments={comment.replies.comments} hasReplies={hasReplies}/>}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }
// export default CommentsList