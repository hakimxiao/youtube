import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const VideoCard = ({ video }: { video: any }) => {
    return (
        <Card className='bg-gradient-to-br from-slate-400 to-slate-200'>
            <CardContent>
                <Link href={`/video/${video.id.videoId}`}>
                    <Image width={500} height={500} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                </Link>
            </CardContent>
            <CardFooter>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg">{video.snippet.channelTitle.slice(0, 20)}...</h1>
                    <h2 className="font-semibold text-sm">{video.snippet.title.slice(0, 20)}...</h2>
                </div>
            </CardFooter>
        </Card>
    )
}

export default VideoCard