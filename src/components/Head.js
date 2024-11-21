import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import {useNavigate} from "react-router-dom";
import useSearchSuggestions from "../utils/useSearchSuggestions";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const autocompleteSuggestions = useSearchSuggestions(searchQuery);

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img
                    onClick={() => dispatch(toggleMenu())}
                    alt="menu"
                    className="h-8 cursor-pointer"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
                />
                <a href="/">
                    <img
                        alt="youtube-logo"
                        className="h-8 mx-2"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    />
                </a>
            </div>
            <form className="col-span-10 px-10" onSubmit={(e) => {
                e.preventDefault();
                navigate(`/results?search_query=${searchQuery}`);
                setShowSuggestions(false);
                if (inputRef.current) {
                    inputRef.current.blur();
                }
            }}>
                <input
                    className="w-1/2 border border-gray-400 px-5 p-2 rounded-l-full"
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    ref={inputRef}
                />
                <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">
                    🔍
                </button>
            </form>
            {showSuggestions && (<div
                className="fixed bg-white py-2 px-2 w-[43rem] left-[19rem] top-[5rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {autocompleteSuggestions?.map(s => (
                        <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100"
                            onMouseDown={() => navigate(`/results?search_query=${s}`)}>🔍 {s}</li>
                    ))}
                </ul>
            </div>)}
            <div className="col-span-1">
                <img
                    alt="user-logo"
                    className="h-8"
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                />
            </div>
            <button onClick={() => navigate(`/infinite`)} className="bg-teal-500">Go to infinite</button>
        </div>
    );
};

export default Head;