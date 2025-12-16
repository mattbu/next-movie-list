import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-credits.module.css";

async function getCredits(id) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}
export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      <h1>Casts</h1>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {credits.map((credit) => {
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
        </div>
      </div>
    </div>
  );
}
