import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINT_GET_REPOSITORY } from "../../../shared";

export const useRepository = () => {
  const { user, repository } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${ENDPOINT_GET_REPOSITORY}/${user}/${repository}`);
        const data = await response.json();
        setData(data);
      } catch {
        setError("Не удалось получить данные");
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
