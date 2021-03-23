import axios from "axios";
import { SET_USERS, SET_LOADED, SET_ERROR } from "../reducers/users";

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const fetchUsers = () => (dispatch) => {
  axios
    .get(`https://randomuser.me/api/?results=100`)
    .then(({ data: { results } }) => {
      dispatch(setLoaded(true));
      dispatch(setUsers(results));
    })
    .catch(() => {
      dispatch(setError(true));
    });
};
