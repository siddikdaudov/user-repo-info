import { getRepositoriesFulfilled, getRepositoriesPending, getRepositoriesRejected } from "./actions";
import { ENDPOINT_GET_REPOSITORIES } from "../../../../shared";

export const getRepositoriesThunk = () => async (dispatch) => {
  dispatch(getRepositoriesPending());
  try {
    const searchParams = new URLSearchParams(window.location.search);

    const response = await fetch(`${ENDPOINT_GET_REPOSITORIES}?${searchParams.toString()}`);
    const data = await response.json();

    const deletedRepositories = JSON.parse(sessionStorage.getItem("deletedRepositories"));
    const editedRepositories = JSON.parse(sessionStorage.getItem("editedRepositories"));

    const filteredData = [];

    if (deletedRepositories) {
      const filtered = data.items.filter(
        (repository) => !deletedRepositories.find((deleted) => repository.id === Number(deleted))
      );
      filteredData.push(...filtered);
    } else {
      filteredData.push(...data.items);
    }

    if (editedRepositories) {
      const filtered = filteredData.map((repository) => {
        const edited = editedRepositories.find((edited) => repository.id === edited.id);
        if (edited) {
          return edited;
        } else {
          return repository;
        }
      });
      filteredData.length = 0;
      filteredData.push(...filtered);
    }

    dispatch(getRepositoriesFulfilled({ total_count: data.total_count, items: filteredData }));
  } catch (error) {
    dispatch(getRepositoriesRejected("Что-то пошло не так"));
  }
};
