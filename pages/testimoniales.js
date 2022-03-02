import VideoListing from '../components/VideoListing'
import { MyAppContext } from './_app';
import { useContext, useEffect } from 'react';

const tag = 'Testimoniales';

const Testimoniales = () => {
    
    const {category, setCategory} = useContext(MyAppContext)
    useEffect(() => {
        setCategory(tag)
    }, [])

    return  (
    <>
        <div className="container my-12 mx-auto px-4 md:px-12">
            <p className="text-white text-center text-xl py-2 mb-2">{category}</p>
            <VideoListing tags={category} />
        </div>
    </>
    )
}

export default Testimoniales;