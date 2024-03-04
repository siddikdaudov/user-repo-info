import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Author, Stats, Button, Input } from "../../../shared";
import { useRepository } from "../lib/useRepository";
import styles from "./styles.module.css";

const inputStyle = {
  border: "1px solid #a2a3a4",
  padding: "10px",
};

export const Info = () => {
  const { isLoading, data } = useRepository();
  const navigate = useNavigate();

  const [isEdit, setEdit] = useState(false);
  const [stars, setStars] = useState("");
  const [watchers, setWatchers] = useState("");
  const [createdAd, setCreatedAt] = useState("");
  const [description, setDescription] = useState("");

  const handleEdit = () => {
    const editedRepository = {
      ...data,
      stargazers_count: stars ? stars : data.stargazers_count,
      watchers_count: watchers ? watchers : data.watchers_count,
      created_at: createdAd ? new Date(createdAd).toISOString() : data.created_at,
      description: description ? description : data.description,
    };

    const editedRepositories = JSON.parse(sessionStorage.getItem("editedRepositories"));
    sessionStorage.setItem(
      "editedRepositories",
      JSON.stringify(
        editedRepositories
          ? [...editedRepositories.filter((item) => item.id !== data.id), editedRepository]
          : [editedRepository]
      )
    );
    navigate(-1);
  };

  if (isLoading) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        {!isEdit ? (
          <Button title="Редактировать" onClick={() => setEdit(true)} />
        ) : (
          <>
            <Button title="Сохранить" onClick={handleEdit} />
            <Button title="Отмена" style={{ backgroundColor: "red" }} onClick={() => setEdit(false)} />
          </>
        )}
      </div>
      <div className={styles.card}>
        <p className={styles.name}>{data.name}</p>
        <Author photo={data.owner.avatar_url} name={data.owner.login} githubUrl={data.owner.html_url} />
        <Stats stars={data.stargazers_count} watchers={data.watchers_count} />
        {isEdit && (
          <>
            <Input defaultValue={data.stargazers_count} onChange={(e) => setStars(e.target.value)} style={inputStyle} />
            <Input
              defaultValue={data.watchers_count}
              onChange={(e) => setWatchers(e.target.value)}
              style={inputStyle}
            />
          </>
        )}
        <p>{new Date(data.created_at).toLocaleDateString()}</p>
        {isEdit && (
          <Input
            type="date"
            defaultValue={new Date(data.created_at).toISOString().substring(0, 10)}
            onChange={(e) => setCreatedAt(e.target.value)}
            style={inputStyle}
          />
        )}
        <p>{data.description}</p>
        {isEdit && (
          <textarea
            defaultValue={data.description}
            onChange={(e) => setDescription(e.target.value)}
            style={inputStyle}
          />
        )}
      </div>
    </div>
  );
};
