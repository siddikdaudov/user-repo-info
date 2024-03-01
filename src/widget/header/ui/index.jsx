import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Input } from "../../../shared";
import { Button } from "../../../shared";
import { getRepositoriesThunk } from "../../../app/store/reducers/repositories/thunks";
import searchIcon from "../assets/search.png";
import styles from "./styles.module.css";

const MIN_NAME_LENGTH = 3;

export const Header = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.repositories.isLoading);

  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("q") ?? "");

  const searchRepositories = () => {
    if (name.length < MIN_NAME_LENGTH) return;

    searchParams.set("q", name);

    setSearchParams(searchParams.toString());
    dispatch(getRepositoriesThunk());
  };

  useEffect(() => {
    dispatch(getRepositoriesThunk());
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Начните ввод текст для поиска (не менее трех символов)"
          style={{ padding: "26px" }}
        />
        <Button
          icon={searchIcon}
          style={{ borderLeft: "1px solid #a2a3a4" }}
          onClick={searchRepositories}
          disabled={isLoading}
        />
      </div>
    </header>
  );
};
