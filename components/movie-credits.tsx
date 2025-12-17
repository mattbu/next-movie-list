import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-credits.module.css";
import Link from "next/link";

interface IMovieCredits {
  id: string;
  showAll?: boolean;
}

async function getCredits(id) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}
export default async function MovieCredits({
  id,
  showAll = false,
}: IMovieCredits) {
  const credits = await getCredits(id);
  const allCredits = showAll ? credits : credits.slice(0, 4);
  return (
    <div className={styles.container}>
      <h2>Casts</h2>
      <div className={styles.wrapper}>
        <div
          className={`${styles.list} ${!showAll ? styles.grid5 : styles.grid6}`}
        >
          {allCredits.map((credit) => {
            return (
              <div key={credit.cast_id}>
                <div className={styles["profile-container"]}>
                  {credit.profile_path ? (
                    <img src={credit.profile_path} alt={credit.name} />
                  ) : (
                    <div className={styles["no-image"]} />
                  )}
                </div>
                <h5>{credit.name}</h5>
                <h6>{credit.character}</h6>
              </div>
            );
          })}
          {!showAll ? (
            <Link href={`/movies/${id}/credits`} className={styles["show-all"]}>
              Show All &rarr;
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
