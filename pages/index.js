import VideoListing from '../components/VideoListing'
import VideoPlayer from '../components/videoPlayer';
import { MyAppContext } from './_app';
import { useContext, useEffect } from 'react';

const url = process.env.NEXT_PUBLIC_URL_VIDEO;
const tag = '';

export default function Home() {

  const {category, setCategory} = useContext(MyAppContext)
  useEffect(() => {
    setCategory(tag)
  }, [])
  
  return (
    <div>
      
      <div className="container my-12 mx-auto px-4 md:px-12">
        <VideoPlayer url={url}/>
        <div className="my-2 mt-8">
          <p className="text-md text-left text-white">RECOMMENDED FOR YOU</p>
        </div>
        <VideoListing tags={tag} />
      </div>
    </div>
  )
}
