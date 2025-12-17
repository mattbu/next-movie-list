import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideos(movieId: string) {
  const response = await fetch(`${API_URL}/${movieId}/videos`, {
    cache: "force-cache",
  });
  const json = await response.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      <h2>Related Videos</h2>
      <div className={styles["video-container"]}>
        {videos.map((video) => (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        ))}
      </div>
    </div>
  );
}
