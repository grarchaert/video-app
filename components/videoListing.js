import { useQuery } from "@apollo/client";
import { VIDEOS_QUERY } from "../graphql/queries";
import VideoCard from "./VideoCard";

export default function VideoListing({tags}) {

  const { data, loading, error, refetch } = useQuery(VIDEOS_QUERY, {
    variables: {tags: tags, after: '', before: '' },
  });

  if (loading) {
    return <div className="loading"><div className="lds-dual-ring"></div></div>
  }

  if (error) {
    console.error(error);
    return null;
  }

  const videos = data.allVideos.items;
  const after = data.allVideos.cursor.after;
  const before = data.allVideos.cursor.before;

  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {
            videos.map((video, index) => (
                <VideoCard video={video} key={index}/>
            ))
        }
        </div>
        <br/>
        <div className="flex items-center justify-center">
            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                {before===null?null: <button onClick={() => refetch({
                        after: '',
                        before: before
                })} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Prev
                </button>}
                {after===null?null: <button onClick={() => refetch({
                        after: after,
                        before: ''
                })} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Next
                </button>}
            </div>
        </div>
    </div>
    
  )
}