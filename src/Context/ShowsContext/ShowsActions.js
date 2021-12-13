import React, { useReducer } from "react";

import axios from "axios";
import ShowContext from "./ShowsContext";
import ShowReducer from "./ShowsReducer";
import { ALL_SHOWS, RESET_LOADING, SET_LOADING, GET_SHOW } from "../types";

const ShowsActions = (props) => {
  const initialState = {
    shows: [],
    show: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowReducer, initialState);

  const getAllShows = async () => {
    try {
      dispatch({ type: SET_LOADING });
      let res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      dispatch({ type: ALL_SHOWS, payload: res.data });
    } catch (error) {}
  };

  const getShow = async (id) => {
    try {
      dispatch({ type: SET_LOADING });
      let res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      dispatch({ type: GET_SHOW, payload: res.data });
      dispatch({ type: RESET_LOADING });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
    }
  };

  return (
    <ShowContext.Provider value={{ ...state, getAllShows, getShow }}>
      {props.children}
    </ShowContext.Provider>
  );
};

export default ShowsActions;
