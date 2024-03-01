import { Author } from "./author";
import { Stats } from "./stats";
import { CommentInput } from "./comment-input";
import styles from "./styles.module.css";

export const Card = ({ name, photo, owner, stars, watchers, repositoryUrl, githubUrl }) => {
  return (
    <div className={styles.card}>
      <button className={styles.title} onClick={() => window.open(repositoryUrl, "_blank")}>
        {name}
      </button>
      <Author photo={photo} name={owner} githubUrl={githubUrl} />
      <Stats stars={stars} watchers={watchers} />
      <CommentInput />
    </div>
  );
};
