import styles from "./styles.module.css";

export const Author = ({ photo, name, githubUrl }) => {
  return (
    <div className={styles.author}>
      <img src={photo} alt="User Photo" />
      <a href={githubUrl} target="_blank">
        {name}
      </a>
    </div>
  );
};
