import { getRepositoriesFulfilled, getRepositoriesPending, getRepositoriesRejected } from "./actions";
import { ENDPOINT_GET_REPOSITORIES } from "../../../../shared";

export const getRepositoriesThunk = () => async (dispatch) => {
  dispatch(getRepositoriesPending());
  try {
    const searchParams = new URLSearchParams(window.location.search);

    const response = await fetch(`${ENDPOINT_GET_REPOSITORIES}?${searchParams.toString()}`);
    const data = await response.json();

    dispatch(getRepositoriesFulfilled(data));
  } catch (error) {
    dispatch(getRepositoriesRejected("Что-то пошло не так"));
  }
};
