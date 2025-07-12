import SearchInput from "@/components/SearchInput";
import VideoList from "@/components/VideoList";
import { API_KEY } from "@/lib/constant";
import { SearchParams } from "next/dist/server/request/search-params";

const apiToYoutube = async (pencarian: string) => {
  const urlFetch = new URL(`https://www.googleapis.com/youtube/v3/search?q=${pencarian}&key=${API_KEY}`);

  urlFetch.searchParams.set("maxResults", "10");
  urlFetch.searchParams.set("part", "snippet");
  urlFetch.searchParams.set("type", "video");

  try {
    const apiResponse = await fetch(urlFetch);
    return apiResponse.json();
  } catch (error) {
    console.log({ error });
  }

}

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const queryPencarian = searchParams.query;

  const pencarian = Array.isArray(queryPencarian) ? queryPencarian[0] : queryPencarian ?? "";
  const fetchVideosResult = await apiToYoutube(pencarian);

  return (
    <div>
      <div className="w-[50%] p-3">
        <SearchInput />
      </div>
      <div>
        <VideoList videos={fetchVideosResult} />
      </div>
    </div>
  );
}
