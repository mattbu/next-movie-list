import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";
import Link from "next/link";

export async function getMovie(movieId: string) {
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
        <div>
          <span>⭐️ {movie.vote_average.toFixed(1)}</span> |
          <span> 🗓️ {movie.release_date}</span> |
          <span> ⏱️ {movie.runtime}min</span>
        </div>
        <p className={styles.overview}>{movie.overview}</p>
        {/* <a
          href={movie.homepage}
          target={"_blank"}
          className={styles["home-link"]}
        >
          Homepage &rarr;
        </a> */}
        <div className={styles["button-container"]}>
          <Link
            href={movie.homepage}
            target={"_blank"}
            className={styles.button}
          >
            Homepage &rarr;
          </Link>
          <Link href={`/movies/${id}/credits`} className={styles.button}>
            Show Credits
          </Link>
        </div>
      </div>
    </div>
  );
}
