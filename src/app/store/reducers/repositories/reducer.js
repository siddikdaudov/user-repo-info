import { GET_REPOSITORIES_FULFILLED, GET_REPOSITORIES_PENDING, GET_REPOSITORIES_REJECTED } from "./action-types";

const INITIAL_STATE = {
  repositories: [],
  isLoading: false,
  error: null,
  totalCount: 0,
};

export const repositories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET
    case GET_REPOSITORIES_FULFILLED:
      return {
        ...state,
        repositories: action.payload.items,
        isLoading: false,
        error: null,
        totalCount: action.payload.total_count,
      };

    case GET_REPOSITORIES_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GET_REPOSITORIES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
