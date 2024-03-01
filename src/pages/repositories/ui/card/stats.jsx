import styles from "./styles.module.css";
import star from "../../assets/star.png";
import eye from "../../assets/eye.png";

export const Stats = ({ stars, watchers }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <img src={star} alt="Icon" />
        <p>{stars}</p>
      </div>
      <div className={styles.stat}>
        <img src={eye} alt="Icon" />
        <p>{watchers}</p>
      </div>
    </div>
  );
};
