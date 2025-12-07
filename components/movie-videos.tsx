import { API_URL } from "../app/(home)/page";

async function getVideos(movieId: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(`Fetching videos: ${Date.now()}`);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("something broke....");
  // const response = await fetch(`${API_URL}/${movieId}/videos`, {
  //   cache: "force-cache",
  // });
  // const json = await response.json();
  // return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
