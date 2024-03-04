import { useSelector, useDispatch } from "react-redux";
import { Card } from "../card";
import { deleteRepository } from "../../../../app/store/reducers/repositories/actions";
import styles from "./styles.module.css";

export const Cards = () => {
  const repositories = useSelector((state) => state.repositories.repositories);
  const isLoading = useSelector((state) => state.repositories.isLoading);

  const dispatch = useDispatch();

  const handleDeleteRepository = (e) => {
    if (e.target.localName !== "button" || !e.target.dataset.id) return;

    const deletedRepositories = JSON.parse(sessionStorage.getItem("deletedRepositories"));
    sessionStorage.setItem(
      "deletedRepositories",
      JSON.stringify(deletedRepositories ? [...deletedRepositories, e.target.dataset.id] : [e.target.dataset.id])
    );
    dispatch(deleteRepository(Number(e.target.dataset.id)));
  };

  if (isLoading) {
    return <p className={styles.loading}>Поиск проектов...</p>;
  }

  return (
    <div className={styles.cards} onClick={handleDeleteRepository}>
      {repositories?.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          photo={item.owner.avatar_url}
          owner={item.owner.login}
          stars={item.stargazers_count}
          watchers={item.watchers_count}
          githubUrl={item.owner.html_url}
          repositoryUrl={item.html_url}
          createdAt={item.created_at}
          description={item.description}
        />
      ))}
    </div>
  );
};
