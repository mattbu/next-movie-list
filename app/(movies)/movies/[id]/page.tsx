import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

async function getMovie(movieId: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(`Fetching movies: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${movieId}`);
  const json = await response.json();
  return json;
}

async function getVideos(movieId: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(`Fetching videos: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${movieId}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <Suspense fallback={<h1>Loading movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
