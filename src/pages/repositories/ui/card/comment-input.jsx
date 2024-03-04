import { Input, Button } from "../../../../shared";
import pen from "../../../../shared/assets/pen.png";
import styles from "./styles.module.css";

export const CommentInput = () => {
  return (
    <div className={styles.comment}>
      <Input placeholder="Комментарий к проекту" style={{ padding: "15px" }} />
      <Button icon={pen} style={{ padding: "6px 8px", borderLeft: "1px solid rgb(162, 163, 164)" }} />
    </div>
  );
};
