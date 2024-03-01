import styles from "./styles.module.css";

export const Author = ({ photo, name, githubUrl }) => {
  return (
    <div className={styles.author}>
      <img src={photo} alt="User Photo" />
      <button onClick={() => window.open(githubUrl, "_blank")}>{name}</button>
    </div>
  );
};
