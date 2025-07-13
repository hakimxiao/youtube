import React from 'react';
import { type Metadata } from 'next';
import { API_KEY } from '@/lib/constant';
import Link from 'next/link';


const fetchYoutubeVideo = async (id: string) => {
    const urlFetch = new URL(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${API_KEY}&part=snippet`);

    urlFetch.searchParams.set("part", "snippet");
    urlFetch.searchParams.set("type", "video");

    try {
        const fetchVideos = await fetch(urlFetch);
        return fetchVideos.json();
    } catch (error) {
        console.log({ error });
    }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const fetchVideo = await fetchYoutubeVideo(id);

    return {
        title: fetchVideo.items[0].snippet.title
    }
}

const SreamPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const urlVideoEmbed = `https://www.youtube.com/embed/${id}`;
    const resultFetchYoutubeVideo = await fetchYoutubeVideo(id);

    console.log(resultFetchYoutubeVideo);

    return (
        <div className='px-8 grid-cols-10 gap-4'>
            <div className="w-[100%]">
                <iframe src={urlVideoEmbed} className='w-[90%] h-[35rem] mt-2 mx-auto border-2 border-b-slate-500 rounded-lg'></iframe>
            </div>
            <div className='flex flex-col m-2 bg-slate-900 p-4 border-4 border-blue-300 rounded-lg '>
                <h1 className='text-2xl font-bold text-white'>{resultFetchYoutubeVideo.items[0].snippet.channelTitle}</h1>
                <p className='mt-2 text-slate-500 font-serif'>{resultFetchYoutubeVideo.items[0].snippet.description}</p>
            </div>
            <div className='flex justify-between items-center ml-20 mr-20 mb-10 mt-12'>
                <div className="text-2xl font-bold text-red-500 hover:cursor-default">YOU<span className='text-white'>TUBE</span> API</div>
                <Link href="/" className='w-[200px] flex items-center justify-center h-10 rounded-sm bg-blue-300 hover:bg-blue-500'>Back</Link>
            </div>
        </div>
    )
}

export default SreamPage