import { ALL_SHOWS, RESET_LOADING, SET_LOADING, GET_SHOW } from "../types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ALL_SHOWS:
      return {
        ...state,
        shows: payload,
        loading: false,
      };
    case GET_SHOW:
      return {
        ...state,
        show: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
