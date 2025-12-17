import MovieCredits from "../../../../../components/movie-credits";

interface IParams {
  params: { id: string };
}

export default async function MovieCreditsPage({ params }: IParams) {
  const { id } = await params;
  return (
    <div>
      <MovieCredits id={id} showAll={true} />
    </div>
  );
}
