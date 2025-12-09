import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

async function getMovie(movieId: string) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(`Fetching movies: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${movieId}`, {
    cache: "force-cache",
  });
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
