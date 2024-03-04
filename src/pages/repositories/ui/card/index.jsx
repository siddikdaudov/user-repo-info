import { useState } from "react";
import { Author } from "../../../../shared";
import { CommentInput } from "./comment-input";
import { Header } from "./header";
import { MoreInfo } from "./more-info";
import { Stats } from "../../../../shared";
import styles from "./styles.module.css";

export const Card = ({ id, name, photo, owner, stars, watchers, repositoryUrl, githubUrl, createdAt, description }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.card}>
      <Header id={id} name={name} owner={owner} repositoryUrl={repositoryUrl} />
      <Author photo={photo} name={owner} githubUrl={githubUrl} />
      <div className={`${styles.statsWrapper} ${isOpen ? styles.open : ""}`}>
        <Stats stars={stars} watchers={watchers} />
        <button onClick={() => setOpen((current) => !current)}>▶</button>
      </div>
      {isOpen && <MoreInfo createdAt={createdAt} description={description} />}
      <CommentInput />
    </div>
  );
};
