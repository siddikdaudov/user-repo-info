import styles from "./styles.module.css";

export const Button = (props) => {
  return (
    <button className={styles.button} {...props}>
      <img src={props.icon} alt="Button Icon" />
    </button>
  );
};
