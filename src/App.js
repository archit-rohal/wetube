import {Provider} from "react-redux";
import "./App.css";
import store from "./utils/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import AppLayout from "./components/AppLayout";
import SearchResults from "./components/SearchResults";
import InfiniteScrollComponent from "./components/InfiniteScrollComponent";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <MainContainer/>,
            },
            {
                path: "/watch",
                element: <WatchPage/>,
            },
            {
                path: "/results",
                element: <SearchResults/>,
            },
            {
                path: "/infinite",
                element: <InfiniteScrollComponent/>,
            }
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <div>
                <RouterProvider router={appRouter}/>
            </div>
        </Provider>
    );
}

export default App;