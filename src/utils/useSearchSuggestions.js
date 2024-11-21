import {cacheResults} from "./searchSlice";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const useSearchSuggestions = searchString => {

    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();

    const searchCache = useSelector(store => store.search);

    const getSearchSuggestions = async () => {
        try {
            const response = await fetch(`/api/search?q=${searchString}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const json = await response.json();
            setSuggestions(json[1]);
            dispatch(cacheResults({
                [searchString]: json[1],
            }));
        } catch (error) {
            console.error('Error fetching search suggestions:', error);
        }
    }

    useEffect(() => {
        const timer = setTimeout(
            () => {
                if (searchCache[searchString]) {
                    setSuggestions(searchCache[searchString]);
                } else {
                    getSearchSuggestions();
                }
            }, 200);
        return () => clearTimeout(timer);
    }, [searchString])

    return suggestions;
}

export default useSearchSuggestions;