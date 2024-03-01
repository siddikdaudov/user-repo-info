import styles from "./styles.module.css";

export const Input = (props) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} {...props} />
    </label>
  );
};
