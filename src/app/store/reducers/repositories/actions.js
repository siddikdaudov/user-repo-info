import { GET_REPOSITORIES_FULFILLED, GET_REPOSITORIES_PENDING, GET_REPOSITORIES_REJECTED } from "./action-types";

// GET
export const getRepositoriesFulfilled = (payload) => ({
  type: GET_REPOSITORIES_FULFILLED,
  payload,
});

export const getRepositoriesPending = () => ({
  type: GET_REPOSITORIES_PENDING,
});

export const getRepositoriesRejected = (payload) => ({
  type: GET_REPOSITORIES_REJECTED,
  payload,
});
