import MovieCredits from "../../../../../components/movie-credits";
import MovieProviders from "../../../../../components/movie-providers";

interface IParams {
  params: { id: string };
}

export default async function MovieCreditsPage({ params }: IParams) {
  const { id } = await params;
  return (
    <div>
      <MovieCredits id={id} />
      <MovieProviders id={id} />
    </div>
  );
}
