import React, {useEffect, useState} from 'react'
import ChatMessage from "./ChatMessage";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../utils/chatSlice";
import {generateRandomNames, makeRandomMessage} from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomNames(),
                message: makeRandomMessage(20),
            }))
        }, 1000);
        return () => clearInterval(i);
    }, []);
    return (
        <>
            <div
                className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                <div>
                    {chatMessages?.map((c, i) => (
                        <div key={i}>
                            <ChatMessage name={c.name} message={c.message}/>
                        </div>
                    ))}
                </div>
            </div>
            <form className="w-full p-2 ml-2 border border-black flex items-center" onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Archit",
                    message: liveMessage
                }))
                setLiveMessage("");
            }}>
                <input className="flex-grow px-2 border border-gray-500 rounded" type="text" value={liveMessage}
                       onChange={(e) => setLiveMessage(e.target.value)}/>
                <button className="px-2 mx-4 bg-blue-300 w-20 rounded-lg" type="submit">Send</button>
            </form>
        </>
    )
}
export default LiveChat
