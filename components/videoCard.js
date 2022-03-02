import Link from 'next/link'
import { locators } from '../locators/videoCard.locator'; 

function VideoCard({ video }) {
  const id = video.id
  const name = video.name
  const poster = video.poster

  const placeholderImg = process.env.NEXT_PUBLIC_PLACEHOLDER_VIDEO;

  return (
    <div className="md:flex px-1 py-2 w-full h-full">
        <article className="bg-indigo-900 shadow-lg cursor-pointer">
            <Link href={`/video/${id}`} passHref >
                    <div>
                        <img data-testid={locators.poster} src={poster!==null?poster:placeholderImg} className="w-full" />
                        <div className="px-6 py-4">
                            <p data-testid={locators.name} className="text-white text-md mb-2">{name}</p>
                        </div>
                    </div>
            </Link>
        </article>
    </div>
  )
}

export default VideoCard;