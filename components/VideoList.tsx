import React from 'react'
import VideoCard from './VideoCard'

const VideoList = ({ videos }: { videos: any }) => {
    return (
        <div className='grid grid-cols-4 gap-7 m-10'>
            {videos.items?.map((video: any) => (
                <div key={video.id.videoId} >
                    <VideoCard video={video} />
                </div>
            ))}
        </div>
    )
}

export default VideoList