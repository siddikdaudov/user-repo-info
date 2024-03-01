import { useSelector } from "react-redux";
import { Card } from "../card";
import styles from "./styles.module.css";

export const Cards = () => {
  const repositories = useSelector((state) => state.repositories.repositories);
  const isLoading = useSelector((state) => state.repositories.isLoading);

  if (isLoading) {
    return <p className={styles.loading}>Поиск проектов...</p>;
  }

  return (
    <div className={styles.cards}>
      {repositories?.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          photo={item.owner.avatar_url}
          owner={item.owner.login}
          stars={item.stargazers_count}
          watchers={item.watchers_count}
          githubUrl={item.owner.html_url}
          repositoryUrl={item.html_url}
        />
      ))}
    </div>
  );
};
