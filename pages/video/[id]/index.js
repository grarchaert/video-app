import { useRouter } from 'next/router';
import { useQuery } from "@apollo/client";
import { VIDEO_QUERY } from "../../../graphql/queries";
import VideoListing from '../../../components/VideoListing';
import VideoPlayer from '../../../components/videoPlayer';
import { MyAppContext } from '../../_app';
import { useContext } from 'react';

const url = process.env.NEXT_PUBLIC_URL_VIDEO;

const Video = () => {

    const {category, setCategory} = useContext(MyAppContext)
    const router = useRouter()
    const { id } = router.query

    const { data, loading, error } = useQuery(VIDEO_QUERY, {
        variables: {id: id },
    });

    if (loading) {
        return <div className="loading"><div className="lds-dual-ring"></div></div>
    }

    if (error) {
        console.error(error);
        return null;
    }

    const video = data.video;

    return (
        <>
        <div className="container my-12 mx-auto px-4 md:px-12">
            <VideoPlayer url={url}/>
            <p className="font-bold text-white text-xl mb-8">{video.name}</p>
            <div className="my-2">
            <p className="text-md text-left text-white">YOU MAY ALSO LIKE</p>
            </div>
            <VideoListing tags={category} />
        </div>
        </>
    )
}

export default Video;