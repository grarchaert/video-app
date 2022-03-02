import ReactPlayer from 'react-player';
import { locators } from '../locators/videoPlayer.locator';

const placeholderImg = process.env.NEXT_PUBLIC_PLACEHOLDER_VIDEO;

const VideoPlayer = ({url}) => (
    <div className='wrapper'>
        <ReactPlayer data-testid={locators.player} className='player' url={url} width='100%'
          height='100%' controls light={placeholderImg}/>
    </div>
);

export default VideoPlayer;