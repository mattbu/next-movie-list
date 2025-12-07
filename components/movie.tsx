import Link from "next/link";
import styles from "../styles/movie.module.css";

interface IMovieProps {
  title: string;
  poster_path: string;
  id: string;
}

export default function Movie({ title, poster_path, id }: IMovieProps) {
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
