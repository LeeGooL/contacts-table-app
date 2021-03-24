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
