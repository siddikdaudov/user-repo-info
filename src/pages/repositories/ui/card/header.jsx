import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Header = ({ id, name, owner, repositoryUrl }) => {
  return (
    <div className={styles.header}>
      <a className={styles.title} href={repositoryUrl} target="_blank">
        {name}
      </a>
      <div className={styles.headerActions}>
        <button data-id={id}>Удалить</button>
        <Link to={`${owner}/${name}`} className={styles.cardLink}>
          Перейти
        </Link>
      </div>
    </div>
  );
};
