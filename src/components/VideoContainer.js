import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import VideoCard from "./VideoCard";
import useFetchPaginatedVideos from "../utils/useFetchPaginatedVideos";

const VideoContainer = () => {
    const mostPopularVideos = useSelector(store => store.trendingVideos.videos);

    useFetchPaginatedVideos();


    if (!mostPopularVideos.length) return <div>Shimmer</div>;

    return (
        <div className="flex flex-wrap">
            {mostPopularVideos?.map((video) => (
                <Link key={video.id} to={"/watch?v=" + video.id}>
                    <VideoCard info={video}/>
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;