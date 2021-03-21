export const SET_USERS = "SET_USERS";
export const SET_LOADED = "SET_LOADED";
export const SET_ERROR = "SET_ERROR";

const initialState = {
  users: [],
  isLoaded: false,
  isError: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload,
        isLoaded: true,
        isError: false,
      };

    case SET_LOADED:
      return {
        ...state,
        isLoaded: payload,
      };

    case SET_ERROR:
      return {
        ...state,
        isError: payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default usersReducer;
